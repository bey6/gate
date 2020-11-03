import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Wellcome to visit GATE.";
}).get("/book", (ctx) => {
  ctx.response.body = [
    "You do not know javascript.",
    "datastruct and arithmetic.",
  ];
});
export default router;
