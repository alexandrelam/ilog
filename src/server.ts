import Application, { Context } from "koa";
import Koa from "koa";
import Router from "koa-router";
import { configureLogger } from "./utils/config";

const app: Application = new Koa();
const router: Router = new Router();

configureLogger(app);

router.get("/hello", (ctx: Context) => {
  ctx.body = "Hello World";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

console.log("app started");
