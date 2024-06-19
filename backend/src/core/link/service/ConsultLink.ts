import Link from "../model/Link";
import UseCase from "../../shared/UseCase";
import RepositoryLink from "./RepositoryLink";

export default class ConsultLink implements UseCase<number, Link[]> {
  constructor(private readonly repository: RepositoryLink) {}

  async toExecute(userId: number): Promise<Link[]> {
    return await this.repository.findByUserId(userId);
  }
}
