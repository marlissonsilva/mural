import User from "../../core/user/model/User";
import RepositoryUser from "../../core/user/service/RepositoryUser";

export default class RepositoryUserInMemory implements RepositoryUser {
  private readonly users: User[] = [];

  async getAll(): Promise<User[]> {
    return this.users;
  }

  async getByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) ?? null;
  }

  async createUser(user: User): Promise<User> {
    const newUser = {...user};
    this.users.push(newUser);
    return newUser;
  }

  async login(email: string, password: string): Promise<User> {
    return this.users[0];
  }
}
