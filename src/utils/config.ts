import Application, { Context, Next } from 'koa';

export const configureLogger = (app: Application) => {
  // logger
  app.use(async (ctx: Context, next: Next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  });

  // x-response-time
  app.use(async (ctx: Context, next: Next) => {
    const start: number = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
};

export const configureError = (app: Application) => {
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      err.status = err.statusCode || err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
  });
};

export const configureHeader = (app: Application) => {
  app.use(async (ctx: Context, next: Next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    ctx.set('Content-Type', 'Application/json');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    await next();
  });
};
