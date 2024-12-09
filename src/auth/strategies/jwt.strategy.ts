import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import jwtConfig from "../config/jwt.config";
import { ConfigType } from "@nestjs/config";
import { AuthJwtPayload } from "../types/auth-jwtPayload";
import { Inject, Injectable } from "@nestjs/common";

// this strategy is responsible for extracting the jwt from the incoming request headers and check if it is valid to then allow the user to access the API 
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(jwtConfig.KEY) private jwtConfigutation: ConfigType <typeof jwtConfig>){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfigutation.secret,
      ignoreExpiration: false,
    })
  }

  // validate function
  validate(payload: AuthJwtPayload) {
    // until here the payload has been validated
    return {
      id: payload.sub // get the user id to protect the API
    }
  }
}