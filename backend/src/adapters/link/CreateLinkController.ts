import {Express, Request, Response} from "express";
import CreateLink from "../../core/link/service/CreateLink";
import Auth from "@src/middleware/auth";

interface AuthRequest extends Request {
  user?: {_id: string; email: string};
}

export default class CreateLinkController {
  constructor(readonly server: Express, readonly useCase: CreateLink) {
    const authMiddleware = new Auth();

    server.use((req, res, next) => authMiddleware.authenticate(req, res, next));
    server.post("/link/create", async (req: AuthRequest, res: Response) => {
      const {url, shortUrl, color} = req.body as any;

      if (url.length < 6) {
        res.send({message: "Insira uma url válida!"});
      }

      if (!shortUrl) {
        res.send({message: "O campo não pode ser vazio"});
      }

      try {
        await useCase.toExecute({
          url,
          shortUrl,
          color,
          userId: req.user?._id,
        });
        res.status(201).send({message: "Link criado com sucesso"});
      } catch (error) {
        res.status(500).send({message: "Erro ao criar link"});
      }
    });
  }
}
