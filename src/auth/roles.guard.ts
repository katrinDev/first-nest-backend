import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "./roles.decorator";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(req);

    if (!token) {
      throw new UnauthorizedException({
        message: "Пользователь не авторизован",
      });
    }

    try {
      const payload = this.jwtService.verify(token);
      req.user = payload;

      return payload.roles.some((role) => requiredRoles.includes(role.value));
    } catch (e) {
      console.error(e);
      throw new HttpException("Нет доступа", HttpStatus.FORBIDDEN);
    }
  }

  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
