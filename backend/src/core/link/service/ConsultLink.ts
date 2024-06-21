import Link from "../model/Link";
import UseCase from "../../shared/UseCase";
import RepositoryLink from "./RepositoryLink";

export default class ConsultLink implements UseCase<string, Link[]> {
  constructor(private readonly repository: RepositoryLink) {}

  async toExecute(userId: string): Promise<Link[]> {
    return await this.repository.findByUserId(userId);
  }
}
