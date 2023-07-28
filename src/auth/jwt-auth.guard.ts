import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  //when this function returns true - access approved
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const token = this.extractTokenFromHeader(req);
      if (!token) {
        throw new UnauthorizedException();
      }
      //decode token
      const payload = this.jwtService.verify(token);

      req.user = payload;
      return true;
    } catch (e) {
      console.error(e);
      throw new UnauthorizedException({
        message: "Пользователь не авторизован",
      });
    }
  }

  private extractTokenFromHeader(req: Request): string | undefined {
    const [type, token] = req.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
