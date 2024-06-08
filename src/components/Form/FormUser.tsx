import * as zod from "zod";
import { useFormContext } from "react-hook-form";

import { Input } from "../Input/input";
import { useEffect } from "react";
import { formatedCPFInput, formatedPhoneInput } from "../../utils/mask";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
function isValidCPF(cpf: any) {
  if (typeof cpf !== "string") return false
  cpf = cpf.replace(/[\s.-]*/igm, '')
  if (
    !cpf ||
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  ) {
    return false
  }
  var soma = 0
  var resto
  for (var i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11)) resto = 0
  if (resto != parseInt(cpf.substring(9, 10))) return false
  soma = 0
  for (var i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11)) resto = 0
  if (resto != parseInt(cpf.substring(10, 11))) return false
  return true
}
export const userFormSchema = zod.object({
  name: zod
    .string()
    .min(1, 'Campo obrigátorio')
    .min(3, 'Caracteres minimo 3')
    .regex(new RegExp(/^[a-zA-Z]+\s+[a-zA-Z]+$/), 'Informe o nome completo'),
  cpf: zod
    .string()
    .min(1, "Campo obrigatório")
    .refine((cpf: string) => {
      return isValidCPF(cpf);
    }, "Digite um cpf válido."),
  dateBirth: zod
    .string()
    .date("Informe uma data válida"),
  phone: zod
    .string()
    .min(1, "Campo obrigátorio")
    .min(19, "Informe um telefone válido")
});
export type UserFormData = zod.infer<typeof userFormSchema>;

export function FormUser() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<UserFormData>();

  const cpfValue = watch("cpf");
  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("cpf", formatedCPFInput(cpfValue))
  }, [cpfValue]);

  useEffect(() => {
    setValue("phone", formatedPhoneInput(phoneValue))
  }, [phoneValue]);



  return (
    <>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex gap-3">
          <Input
            label="Nome"
            placeholder="Nome completo"
            {...register("name")}
            error={errors.name?.message}
          />
        </div>
        <div className="flex gap-3 max-md:flex-col">
          <Input
            label="CPF"
            maxLength={14}
            placeholder="CPF"
            {...register("cpf")}
            error={errors.cpf?.message}
          />
          <Input
            label="Data de Nascimento"
            type="date"
            {...register("dateBirth")}
            error={errors.dateBirth?.message}
          />
          <Input
            label="Contato"
            placeholder="Número para contato"
            {...register("phone")}
            error={errors.phone?.message}
          />
        </div>
      </div>
    </>
  );
}