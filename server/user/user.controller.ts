import autoBind from 'auto-bind';
import Koa from 'koa';
import { UserService } from './user.service';

interface CreateUserRequest {
  email: string;
  id: number;
}

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
    autoBind(this);
  }

  async list(ctx: Koa.Context): Promise<void> {
    const users = await this.userService.getAll();
    ctx.body = { users };
  }

  async get(ctx: Koa.Context): Promise<void> {
    const id = parseInt(ctx.params.id, 10);
    const user = await this.userService.getById(id);
    if (user) {
      ctx.body = { user };
    } else {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
    }
  }

  async create(ctx: Koa.Context): Promise<void> {
    const body = ctx.request.body as CreateUserRequest;
    const { email, id } = body;
    try {
      const user = await this.userService.create(id, email);
      ctx.status = 201;
      ctx.body = { user };
    } catch (err) {
      ctx.status = 400;
      ctx.body = { error: 'Bad Request. Failed to create user' };
    }
  }
}
