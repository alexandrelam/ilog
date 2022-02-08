import { Producer } from 'kafkajs';
import Router from 'koa-router';
import { Controller } from '../controllers';

export const registerController = (
  router: Router,
  controllers: Controller[],
  producer: Producer
) => {
  controllers.forEach((controller) => controller(router, producer));
};
