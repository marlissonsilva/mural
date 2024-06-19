import {Express, Request, Response, NextFunction} from "express";
import ConsultLink from "../../core/link/service/ConsultLink";
import Auth from "@src/middleware/auth";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

export default class ConsultLinkController {
  constructor(readonly server: Express, readonly useCase: ConsultLink) {
    const authMiddleware = new Auth();

    server.use((req: AuthRequest, res, next) =>
      authMiddleware.authenticate(req, res, next)
    );
    server.get(
      "/link",
      async (req: AuthRequest, res: Response, next: NextFunction) => {
        try {
          const userId = (req as any).user._id;
          if (!userId) {
            return res.status(401).send({message: "Token inválido"});
          }
          const result = await this.useCase.toExecute(userId);
          res.send(result);
        } catch (err) {
          res.status(401).send({message: `Erro ao consultar links: ${err}`});
        }
      }
    );
  }
}
