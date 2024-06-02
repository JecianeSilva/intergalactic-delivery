import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { UserCircle } from "phosphor-react";

import { useUser } from "../../contexts/User/UserContext";
import { FormUser, UserFormData, userFormSchema } from "../../components/Form/FormUser";
import { ModalAddress } from "../../components/ModalAddress/ModalAddress";
import { Button } from "../../components/Button/Button";

function Cadastro() {
  const navigate = useNavigate();

  const {
    user,
    setUser,
  } = useUser();


  const userForm = useForm<UserFormData>({
    defaultValues: {
      name: user?.name,
      cpf: user?.cpf,
      dateBirth: user?.dateBirth,
      phone: user?.phone
    },
    resolver: zodResolver(userFormSchema),
  })

  const { handleSubmit } = userForm;

  function handleSubmitFormUser(data: any) {
    console.log(data);
    setUser(data);
    navigate("/cadastro-etapa2");
  }

  return (
    <form
      className="flex gap-8 max-w-[1180px] mr-auto w-[90%] mx-auto flex-col"
      onSubmit={handleSubmit(handleSubmitFormUser)}
    >
      <ModalAddress title="">
        <div className="border-gray-50 border-1 shadow-lg rounded-lg px-6 py-8 max-w-content w-full">
          <div>
            <div className="flex gap-2">
              <UserCircle size={28} className="text-blue-600 " />
              <span className="font-bold text-gray-950">
                Cadastro de usuário - Dados Pessoais
              </span>
            </div>
            <p className="font-sans text-sm text-gray-500 ml-9">
              Por favor, forneça seu dados pessoal.
            </p>
          </div>
          <FormProvider {...userForm} >
            <FormUser />
          </FormProvider>
        </div>

      </ModalAddress>

      <div className="flex justify-end w-full mt-8 mb-20">
        <div className="flex w-[30%] gap-8">
          <Button
            type="submit"
            label="Avançar"
            className="bg-blue-600 hover:bg-blue-900  max-[1170px]:mx-auto max-[520px]:w-[90%]"
          />
        </div>
      </div>
    </form >
  )
}

export default Cadastro
