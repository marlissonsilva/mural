import UseCase from "../../shared/UseCase";
import RepositoryLink from "./RepositoryLink";

type Input = {
  url: string;
  shortUrl: string;
  color: string;
  icon: string;
  userId: string | undefined;
};

export default class CreateLink implements UseCase<Input, void> {
  constructor(private readonly repository: RepositoryLink) {}

  async toExecute(data: Input): Promise<void> {
    const {url, shortUrl, color, icon, userId} = data;
    await this.repository.createLink({
      url,
      shortUrl,
      color,
      icon,
      userId,
    });
  }
}
