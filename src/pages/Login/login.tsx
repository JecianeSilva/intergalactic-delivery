
import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/images/bg-hero.png";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLogin, LoginFormData, loginFormSchema } from "../../components/Form/FormLogin";
import { Button } from "../../components/Button/Button";

function Login() {
  const navigate = useNavigate();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const { handleSubmit } = loginForm;

  function handleSubmitFormLogin(data: any) {
    console.log(data);
    navigate("/home");
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex max-w-6xl w-full mx-auto px-5 pt-[80px] max-md:flex-col gap-12">
        <div className="flex flex-col justify-center max-w-[300px] w-full pb-[100px] w-full h-full max-md:mx-auto">
          <form
            className="flex flex-col justify-center"
            onSubmit={handleSubmit(handleSubmitFormLogin)}
          >
            <FormProvider {...loginForm}>
              <FormLogin />
            </FormProvider>
            <Button
              type="submit"
              label="Login"
              className="bg-blue-600 hover:bg-blue-900  max-w-[300px] max-md:max-w-full"
            />
          </form>
          <hr className="h-px my-8 bg-slate-300 border-0" />
          <div className="text-sm font-medium text-gray-700">
            Não tem cadastro?{' '}
            <a href="/cadastro-etapa1" className="text-blue-700 hover:underline dark:text-blue-500"> Crie sua conta</a>
          </div>
        </div>
        <div className="flex h-full max-md:h-[500px]">
          <img src={HeroImg} style={{
            objectFit: "contain",
            maxHeight: "714px",
            width: "auto",
          }} />
        </div>
      </div>
    </div>

  )
}

export default Login
