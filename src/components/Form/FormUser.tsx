import * as zod from "zod";
import { useFormContext } from "react-hook-form";

import { Input } from "../Input/input";

export const userFormSchema = zod.object({
  name: zod.string().min(3, "Informe seu nome"),
  cpf: zod.string().min(3, "Informe seu cpf"),
  dateBirth: zod.string().date().min(1, "Campo Obrigatorio"),
  phone: zod.string().min(1, "Informe seu número de telefone")
});
export type UserFormData = zod.infer<typeof userFormSchema>;

export function FormUser() {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserFormData>();

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