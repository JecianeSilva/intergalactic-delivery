import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { UserCircle } from "phosphor-react";

import { useUser } from "../../contexts/User/UserContext";
import { FormUser, UserFormData, userFormSchema } from "../../components/Form/FormUser";
import { Modal } from "../../components/Modal/Modal";
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
      className="flex gap-8 max-w-[1180px] mr-auto w-[90%] mx-auto flex-col max-[415px]:w-full gap-0"
      onSubmit={handleSubmit(handleSubmitFormUser)}
    >
      <Modal title="">
        <div className="border-gray-50 border-1 shadow-lg rounded-lg px-6 py-8 max-w-content w-full max-[415px]:shadow-none max-[415px]:px-4">
          <div>
            <div className="flex gap-2">
              <UserCircle size={28} className="text-blue-600" />
              <span className="font-bold text-md text-gray-950 max-[415px]:text-sm">
                Cadastro de usuário - Dados Pessoais
              </span>
            </div>
            <p className="font-sans text-sm text-gray-500 ml-9 max-[415px]:ml-9">
              Por favor, forneça seu dados pessoal.
            </p>
          </div>
          <FormProvider {...userForm} >
            <FormUser />
          </FormProvider>
        </div>
      </Modal>

      <div className="flex justify-end w-full mt-8 mb-20 max-[415px]:mt-4">
        <div className="flex w-[30%] gap-8 mb-20 max-md:w-[100%] max-[415px]:px-4">
          <Button
            type="submit"
            label="Avançar"
            className="bg-blue-600 hover:bg-blue-900  max-[1170px]:mx-auto max-md:w-[100%]"
          />
        </div>
      </div>
    </form >
  )
}

export default Cadastro
