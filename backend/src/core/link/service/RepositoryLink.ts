import Link from "../model/Link";

export default interface RepositoryLink {
  findByUserId(userId: string): Promise<Link[]>;
  createLink(link: Partial<Link>): Promise<Link>;
  getById(id: string): Promise<Link>;
  deleteLink(id: string): Promise<boolean>;
}
