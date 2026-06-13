export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    url.hostname = "apey-co.pages.dev";

    const upstream = new Request(url, {
      method: request.method,
      headers: request.headers,
      body: request.method !== "GET" && request.method !== "HEAD" ? request.body : undefined,
    });

    const response = await fetch(upstream);
    const headers = new Headers(response.headers);
    headers.set("Access-Control-Allow-Origin", "https://apey.co");
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");

    return new Response(response.body, {
      status: response.status,
      headers,
    });
  },
};
