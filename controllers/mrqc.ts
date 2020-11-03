import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.prefix("/mrqc");

router.get("/", async (ctx) => {
  let res = await (await fetch(
    "http://xhdev.docimaxvip.com:8090/api/Dictionary/QualityControlList?name=&catalogueType=-1&isUse=-1&pageIndex=1&pageSize=20",
  )).json();
  ctx.response.body = res;
});

export default router;
