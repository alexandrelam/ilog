import { Context } from 'koa';
import Router from 'koa-router';
import { Controller } from '.';
import { Author, AuthorModel } from 'nivclones-ilog-models';
import { Producer } from 'kafkajs';

export const AuthorController: Controller = (
  router: Router,
  producer: Producer
) => {
  router.get('/authors', async (ctx: Context) => {
    const payload = await AuthorModel.find();
    ctx.body = payload;
  });

  router.post('/authors', async (ctx: Context) => {
    const body: Author = ctx.request.body;
    const author = new AuthorModel(body);
    await producer.send({
      topic: 'create',
      messages: [{ value: JSON.stringify({ subject: 'author', body }) }],
    });
    console.log(`sent: ${JSON.stringify(author)}`);
    ctx.body = author;
  });

  router.put('/authors/:id', async (ctx: Context) => {
    const body: Author = ctx.request.body;
    const id: string = ctx.params.id;
    ctx.body = await AuthorModel.findByIdAndUpdate(id, body);
  });

  router.delete('/authors/:id', async (ctx: Context) => {
    const id: string = ctx.params.id;
    ctx.body = await AuthorModel.findByIdAndDelete(id);
  });
};
