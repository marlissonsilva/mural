import {Express} from "express";
import ConsultUser from "../../core/user/service/ConsultUser";

export default class ConsultUserController {
  constructor(readonly server: Express, readonly useCase: ConsultUser) {
    server.get("/user", async (req, res) => {
      const users = await useCase.toExecute();
      res.send(users);
    });
  }
}
