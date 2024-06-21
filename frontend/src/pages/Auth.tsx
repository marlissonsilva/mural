import Button from "@/components/Button";
import {createContext, useState, useContext} from "react";
import Request from "@/core/Request";
import {useRouter} from "next/router";
import Layout from "@/components/Layout";
import Input from "@/components/Input";
import useAuth from "@/hooks/useAuth";

export default function Auth() {
  const router = useRouter();
  const [action, setAction] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setLogged} = useAuth();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    const dataToCheck = {email, password};

    try {
      const response = await Request.post("/user/login", dataToCheck);
      if (!response.status) {
        Request.addToken(response);
        setLogged(true);
        router.push("/Dashboard");
        return;
      }
      window.alert("Usuário ou senha incorretos");
    } catch (error) {
      window.alert("Usuário ou senha incorretos");
    }
  };

  const handleCreateUser = async (event: any) => {
    event.preventDefault();
    const dataToCheck = {name, email, password};

    try {
      const response = await Request.post("/user/create", dataToCheck);
      if (response.status) {
        alert(
          "Erro ao cadastar! Verifique os dados ou confirme se já tem perfil criado"
        );
        return;
      }
      setName("");
      setEmail("");
      setPassword("");
      setAction("login");
    } catch (error) {}
  };

  function handleRequest(event: any) {
    if (action === "login") {
      handleLogin(event);
      return;
    }
    handleCreateUser(event);
  }

  function handleClickBtnLogin() {
    setAction("login");
    setEmail("");
    setPassword("");
  }

  function handleClickBtnCreate() {
    setAction("registar");
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <section className="flex flex-col justify-center items-center  h-screen bg-zinc-800">
      <h2 className="text-3xl font-semibold p-6 text-zinc-200">
        {action === "login" ? "Fazer Login" : "Criar conta"}
      </h2>
      <div
        className={`flex items-center justify-center  w-[95vw] max-w-[500px] p-8 rounded-md`}
      >
        <div className="w-full ">
          <div className="flex gap-6 mb-6 justify-between">
            <Button color="green" onClick={handleClickBtnLogin} widthFull>
              Login
            </Button>
            <Button
              color="cyan"
              className="bg-cy"
              onClick={handleClickBtnCreate}
              widthFull
            >
              Registar
            </Button>
          </div>
          <form
            onSubmit={handleRequest}
            method="post"
            action="/"
            className="flex flex-col align-center"
          >
            {action !== "login" ? (
              <Input
                label="name"
                text="Nome"
                value={name}
                minlength={3}
                valueChange={setName}
              />
            ) : (
              ""
            )}
            <Input
              label="email"
              text="Email"
              type="email"
              value={email}
              valueChange={setEmail}
            />
            <Input
              label="password"
              text="Senha"
              type="password"
              minlength={6}
              value={password}
              valueChange={setPassword}
            />
            <Button
              color={action === "login" ? "green" : "cyan"}
              className="mt-4"
            >
              {action === "login" ? "Login" : "Criar"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
