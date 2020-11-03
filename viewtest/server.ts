import { Application } from "https://deno.land/x/oak@v6.0.0/mod.ts";
import {
  adapterFactory,
  engineFactory,
  viewEngine,
} from "https://deno.land/x/view_engine@v1.3.0/mod.ts";

const denjuckEngine = engineFactory.getDenjuckEngine();
const oakAdapter = adapterFactory.getOakAdapter();

const app = new Application();

app.use(viewEngine(oakAdapter, denjuckEngine));

app.use(async (ctx, next) => {
  ctx.render("index.html", { data: { name: "John" } });
});

await app.listen({ port: 8000 });
