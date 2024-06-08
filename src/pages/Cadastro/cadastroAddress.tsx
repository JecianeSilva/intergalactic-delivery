import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import { useUser } from "../../contexts/User/UserContext";
import {
  FormAddress as FormAddress2,
  addressFormSchema as addressFormSchema2,
  AddressFormData as AddressFormData2,
} from "../../components/Form/FormAdressMarte";
import {
  FormAddress,
  addressFormSchema,
  AddressFormData,
} from "../../components/Form/FormAdressTerra";
import { ModalAddress } from "../../components/ModalAddress/ModalAddress";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import { MapPinLine } from "phosphor-react";

function Cadastro() {
  const navigate = useNavigate();
  const [isTerra, setIsTerra] = useState(true);

  const {
    user,
    address,
    setAddress,
  } = useUser();


  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormSchema),
  })
  const addressForm2 = useForm<AddressFormData2>({
    resolver: zodResolver(addressFormSchema2),
  });

  const { handleSubmit } = isTerra ? addressForm : addressForm2;

  function handleSubmitFormAddress(data: any) {
    setAddress(data);

    const newData = { user, typeAddress: isTerra ? 0 : 1, address: data };
    console.log(newData);
    // backend
    //try
    toast.success('Cadastro efetuado com sucesso!');
    navigate('/')
    //catc
    // toast.success('Cadastro efetuado com sucesso!');
  }

  return (
    <form
      className="flex gap-8 max-w-[1180px] mr-auto w-[90%] mx-auto flex-col max-[415px]:w-full max-[415px]:gap-0"
      onSubmit={handleSubmit(handleSubmitFormAddress)}
    >
      <ModalAddress title="">
        <div className="border-gray-50 border-1 shadow-lg rounded-lg px-6 py-8 max-w-content w-full max-[415px]:shadow-none max-[415px]:px-4">
          <div className="flex justify-between max-[600px]:flex-col">
            <div className="flex flex-col align-start">
              <div className="flex gap-2">
                <MapPinLine size={28} className="text-blue-600" />
                <span className="font-bold text-md text-gray-950 max-[415px]:text-sm">
                  Cadastro de usuário - Dados do endereço
                </span>
              </div>
              <p className="font-sans text-sm text-gray-500 ml-9">
                Por favor, forneça seu endereço principal
              </p>
            </div>
            <div className="flex items-center ml-4 min-w-[140px] max-[600px]:mt-4  max-[600px]:justify-center" onClick={() => setIsTerra(!isTerra)}>
              <div>
                <label
                  className="inline-block pr-2"
                  htmlFor="switchPlanet"
                >Terra</label>
                <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                  type="checkbox"
                  role="switch"
                  id="switchPlanet" />
                <label className="pl-2" htmlFor="switchPlanet">Marte</label>
              </div>
            </div>
          </div>
          {isTerra ?
            <FormProvider {...addressForm}>
              <FormAddress />
            </FormProvider> :
            <FormProvider {...addressForm2}>
              <FormAddress2 />
            </FormProvider>
          }
        </div>

      </ModalAddress>
      <div className="flex justify-end w-full mt-8 mb-40 max-md:justify-center">
        <div className="flex w-[40%] gap-8 max-md:w-full max-md:mx-4 max-[415px]:flex-col">
          <Button
            type="button"
            label="Voltar"
            onClick={() => { navigate('/cadastro-etapa1') }}
            className="bg-gray-600 hover:bg-blue-900 max-w-content mx-auto max-[400px]:w-full"
          />
          <Button
            type="submit"
            label="Finalizar"
            className="bg-blue-600 hover:bg-blue-900 max-w-content mx-auto max-[400px]:w-full"
          />
        </div>
      </div>
    </form >
  )
}

export default Cadastro
