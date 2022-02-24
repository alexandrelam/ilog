import { Author, AuthorModel } from 'nivclones-ilog-models';
import { Context } from 'koa';
import { Producer } from 'kafkajs';

export default {
  show: async function () {
    return await AuthorModel.find();
  },

  create: async function (ctx: Context, producer: Producer) {
    const body: Author = ctx.request.body;
    const author = new AuthorModel(body);
    await producer.send({
      topic: 'create',
      messages: [{ value: JSON.stringify({ subject: 'author', body }) }],
    });
    console.log(`sent: ${JSON.stringify(author)}`);
    return author;
  },

  update: async function (ctx: Context) {
    const body: Author = ctx.request.body;
    const id: string = ctx.params.id;
    return await AuthorModel.findByIdAndUpdate(id, body);
  },

  delete: async function (ctx: Context) {
    const id: string = ctx.params.id;
    return await AuthorModel.findByIdAndDelete(id);
  },
};
