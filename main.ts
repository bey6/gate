import { Application } from "https://deno.land/x/oak/mod.ts";
import index from "./controllers/index.ts";
import mrqc from "./controllers/mrqc.ts";

const app = new Application();

app.use(index.routes());
app.use(index.allowedMethods());
app.use(mrqc.routes());
app.use(mrqc.allowedMethods());

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(rt);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

console.log("server is running at: http://localhost:8080");
await app.listen("127.0.0.1:8080");
