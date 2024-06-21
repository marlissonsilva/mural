import UseCase from "@src/core/shared/UseCase";
import RepositoryLink from "./RepositoryLink";

export default class DeleteLink implements UseCase<string, boolean> {
  constructor(private readonly repository: RepositoryLink) {}
  async toExecute(id: string): Promise<boolean> {
    console.log("Service",id)
    const link = await this.repository.getById(id);
    console.log("Testando",link);
    console.trace("Ola")
    if (!link) {
      return false;
    }
    await this.repository.deleteLink(id);
    return true;
  }
}
