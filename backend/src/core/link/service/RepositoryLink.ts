import Link from "../model/Link";

export default interface RepositoryLink {
  findByUserId(userId: number): Promise<Link[]>;
  createLink(link: Partial<Link>): Promise<Link>;
}
