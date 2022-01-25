import Application, { Context, Next } from "koa";

export const configureLogger = (app: Application) => {
  // logger
  app.use(async (ctx: Context, next: Next) => {
    await next();
    const rt = ctx.response.get("X-Response-Time");
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  });

  // x-response-time
  app.use(async (ctx: Context, next: Next) => {
    const start: number = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set("X-Response-Time", `${ms}ms`);
  });
};
