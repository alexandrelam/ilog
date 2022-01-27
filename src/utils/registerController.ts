import Router from 'koa-router';
import { Controller } from '../controllers';

export const registerController = (
  router: Router,
  controllers: Controller[]
) => {
  controllers.forEach((controller) => controller(router));
};
