import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDocument } from '../models/user.schema';

const getCurentUserByContext = (context: ExecutionContext): UserDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurentUserByContext(context),
);
