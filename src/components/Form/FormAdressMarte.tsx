import * as zod from "zod";
import { useFormContext } from "react-hook-form";

import { Input } from "../Input/input";

export const addressFormSchema = zod.object({
  lote: zod.string().min(4, "Informe o lote"),
  complement: zod.string().min(4, "Informe tipo de armazenamento"),
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
        <div className="flex gap-3">
          <div>
            <Input
              label="Lote"
              placeholder="Lote"
              {...register("lote")}
              error={errors.lote?.message}
            />
          </div>
          <Input
            label="Complemento"
            placeholder="Complemento"
            {...register("complement")}
            error={errors.complement?.message}
          />
        </div>
      </div>
    </>
  );
}