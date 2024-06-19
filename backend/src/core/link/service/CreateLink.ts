import UseCase from "../../shared/UseCase";
import RepositoryLink from "./RepositoryLink";

type Input = {
  url: string;
  shortUrl: string;
  color: string;
  userId: string | undefined;
};

export default class CreateLink implements UseCase<Input, void> {
  constructor(private readonly repository: RepositoryLink) {}

  async toExecute(data: Input): Promise<void> {
    const {url, shortUrl, color, userId} = data;
    await this.repository.createLink({
      url,
      shortUrl,
      color,
      userId,
    });
  }
}
