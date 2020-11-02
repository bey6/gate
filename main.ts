import { serve } from "https://deno.land/std@0.76.0/http/server.ts";

for await (const req of serve({ port: 8080 })) {
  req.headers.append("content-type", "text/html");
  req.respond({
    body: `<h1>Hello world.</h1>`,
  });
}
