import * as zod from "zod";
import { useFormContext } from "react-hook-form";

import { Input } from "../Input/input";

export const addressFormSchema = zod.object({
  lote: zod.string().min(1, "Campo obrigatório").min(4, "Código do Lote tem 4 digitos").max(4, "Código do Lote tem 4 digitos"),
  typeStorage: zod.string().min(4, "Informe tipo de armazenamento"),
});
export type AddressFormData = zod.infer<typeof addressFormSchema>;

export function FormAddress() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddressFormData>();

  return (
    <>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex gap-3 max-md:flex-col">
          <div>
            <Input
              label="Lote"
              maxLength={4}
              placeholder="Lote"
              {...register("lote")}
              error={errors.lote?.message}
            />
          </div>
          <Input
            label="Tipo de armazenamento"
            placeholder="Complemento"
            {...register("typeStorage")}
            error={errors.typeStorage?.message}
          />
        </div>
      </div>
    </>
  );
}