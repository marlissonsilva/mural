import UseCase from "../../shared/UseCase";
import User from "../model/User";
import RepositoryUser from "./RepositoryUser";

export default class ConsultUser implements UseCase<void, User[]> {
  constructor(private readonly repository: RepositoryUser) {}

  async toExecute(): Promise<User[]> {
    return await this.repository.getAll();
  }
}
