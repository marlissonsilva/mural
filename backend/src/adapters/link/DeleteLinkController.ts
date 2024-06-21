import {Express, Request, Response} from "express";
import DeleteLink from "@src/core/link/service/DeleteLink";
import Auth from "@src/middleware/auth";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

export default class DeleteLinkController {
  constructor(readonly server: Express, readonly useCase: DeleteLink) {
    const authMiddleware = new Auth();

    server.use((req: AuthRequest, res, next) =>
      authMiddleware.authenticate(req, res, next)
    );

    server.delete("/link/:id", async (req: AuthRequest, res: Response) => {
      const id = req.params.id;
      if (!id) {
        res.status(401).json("Não encontrado");
      }
      await this.useCase.toExecute(id);
      res.status(200).json({message: "Link apagado"});
    });
  }
}
