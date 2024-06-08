import * as zod from "zod";
import { useFormContext } from "react-hook-form";

import { Input } from "../Input/input";

export const loginFormSchema = zod.object({
  email: zod.string().min(1, 'Campo obrigatório').email('Digitel um e-mail válido'),
  password: zod.string().min(1, 'Campo obrigatório').min(6, 'Mínimo 6 caracteres'),
});

export type LoginFormData = zod.infer<typeof loginFormSchema>;

export function FormLogin() {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormData>();

  return (
    <>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2 mb-4">
          <Input
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
            error={errors.password?.message}
          />
        </div>
      </div>
    </>
  );
}