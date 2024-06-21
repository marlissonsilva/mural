import express from "express";
import cors from "cors";
import RegisterUser from "./core/user/service/RegisterUser";
import RegisterUserController from "./adapters/user/RegisterUserController";
import ConsultUser from "./core/user/service/ConsultUser";
import ConsultUserController from "./adapters/user/ConsultUserController";
import LoginUserController from "./adapters/user/LoginUserController";
import LoginUser from "./core/user/service/LoginUser";
import CreateLink from "./core/link/service/CreateLink";
import CreateLinkController from "./adapters/link/CreateLinkController";
import ConsultLink from "./core/link/service/ConsultLink";
import ConsultLinkController from "./adapters/link/ConsultLinkController";
import ConnectDatabase from "./external/database/connect";
import RepositoryUserMongoose from "./external/mongoose/RepositoryUserMongoose";
import RepositoryLinkMongoose from "./external/mongoose/RepositoryLinkMongoose";
import DeleteLink from "./core/link/service/DeleteLink";
import DeleteLinkController from "./adapters/link/DeleteLinkController";

const app = express();
const port = 4000;

const db = new ConnectDatabase();
db.connect();
const corsOptions = {
  origin: ["http://localhost:3000", "https://mural-mongo-frontend.vercel.app"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// ----------------------routes user ------------------
const repositoryUser = new RepositoryUserMongoose();

const registerUser = new RegisterUser(repositoryUser);
new RegisterUserController(app, registerUser);

const consultUser = new ConsultUser(repositoryUser);
new ConsultUserController(app, consultUser);

const loginUser = new LoginUser(repositoryUser);
new LoginUserController(app, loginUser);

// --------------------routes link ------------------
const repositoryLink = new RepositoryLinkMongoose();

const createLink = new CreateLink(repositoryLink);
new CreateLinkController(app, createLink);

const consultLink = new ConsultLink(repositoryLink);
new ConsultLinkController(app, consultLink);

const deleteLink = new DeleteLink(repositoryLink);
new DeleteLinkController(app, deleteLink);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  console.log(`🦊 Express is running at http://localhost:${port}`);
});
