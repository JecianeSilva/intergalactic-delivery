import * as zod from "zod";
import { useFormContext } from "react-hook-form";

import { Input } from "../Input/input";

export const addressFormSchema = zod.object({
  zipCode: zod.string().min(1, "Informe o cep"),
  street: zod.string().min(1, "Informe a rua"),
  numberHouse: zod.string().min(1, "Informe o número da casa"),
  complement: zod.string().nullable(),
  district: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  country: zod.string().min(1, "Informe o país"),
  uf: zod.string().min(1, "Informe o estado"),
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
          <Input
            label="País"
            placeholder="Páis"
            {...register("country")}
            error={errors.country?.message}
          />
          <Input
            label="Estado"
            placeholder="UF"
            {...register("uf")}
            error={errors.uf?.message}
          />
          <Input
            label="Cidade"
            placeholder="Cidade"
            {...register("city")}
            error={errors.city?.message}
          />
        </div>
        <div className="flex gap-3">
          <div>
            <Input
              label="CEP"
              placeholder="CEP"
              {...register("zipCode")}
              error={errors.zipCode?.message}
            />
          </div>
          <Input
            label="Rua"
            placeholder="Rua"
            {...register("street")}
            error={errors.street?.message}
          />
          <div>
            <Input
              label="Nº"
              placeholder="Número"
              {...register("numberHouse")}
              error={errors.numberHouse?.message}
            />
          </div>
        </div>

        <div className="flex gap-3 max-[500px]:flex-col">
          <Input
            label="Complemento"
            placeholder="Complemento"
            isOptional
            {...register("complement")}
            error={errors.complement?.message}
          />
          <Input
            label="Bairro"
            placeholder="Bairro"
            {...register("district")}
            error={errors.district?.message}
          />
        </div>
      </div>
    </>

  );
}