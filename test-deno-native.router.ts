import { Status } from "https://deno.land/std@0.127.0/http/http_status.ts";

// Simple Native Deno Router
type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";
type CallbackHandler = (
  request: Request,
  params?: Record<string, string>,
) => Promise<Response>;

type NativeRoute = {
  pattern: URLPattern;
  handler: CallbackHandler;
};

export default class Router {
  private routes: Record<HttpMethods, Array<NativeRoute>> = {
    "DELETE": [],
    "GET": [],
    "POST": [],
    "PUT": [],
  };

  add(method: HttpMethods, pathname: string, handler: CallbackHandler) {
    this.routes[method].push({
      pattern: new URLPattern({ pathname }),
      handler,
    });
  }

  async route(request: Request): Promise<Response> {
    for (const route of this.routes[request.method as HttpMethods]) {
      if (route.pattern.test(request.url)) {
        const params = route.pattern.exec(request.url)?.pathname.groups;
        return await route.handler(request, params);
      }
    }

    return new Response(null, { status: Status.NotFound });
  }
}
