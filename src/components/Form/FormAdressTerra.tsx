import * as zod from "zod";
import { useFormContext } from "react-hook-form";

import { Input } from "../Input/input";

export const addressFormSchema = zod.object({
  postalCode: zod
    .string()
    .min(1, "Campo obrigatório")
    .min(3, 'Mínimo 3 caracteres'),
  street: zod.string()
    .min(1, "Campo obrigatório")
    .min(3, 'Mínimo 3 caracteres'),
  numberHouse: zod
    .number({
      message: "Campo obrigatório"
    })
    .nonnegative("Número minimo permitido: 0"),
  complement: zod
    .string()
    .nullable(),
  district: zod
    .string()
    .min(1, "Campo obrigatório")
    .min(3, 'Mínimo 3 caracteres'),
  city: zod
    .string()
    .min(1, "Campo obrigatório")
    .min(3, 'Mínimo 3 caracteres'),
  country: zod
    .string()
    .min(1, "Campo obrigatório")
    .min(3, 'Mínimo 3 caracteres'),
  uf: zod
    .string()
    .min(1, "Campo obrigatório")
    .min(2, 'Mínimo 2 caracteres'),
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
        <div className="flex gap-3  max-md:flex-col">
          <div className="min-w-[220px]">
            <Input
              label="CEP(Postal Code)"
              placeholder="CEP"
              {...register("postalCode")}
              error={errors.postalCode?.message}
            />
          </div>
          <Input
            label="Rua"
            placeholder="Rua"
            {...register("street")}
            error={errors.street?.message}
          />
          <div className="min-w-[180px] max-md:w-full">
            <Input
              type="number"
              label="Nº"
              placeholder="Digite o nº da sua casa"
              {...register("numberHouse", {
                setValueAs: (value) => value !== '' ? Number(value) : value,
              })}
              error={errors.numberHouse?.message}
            />
          </div>
        </div>

        <div className="flex gap-3 max-md:flex-col">
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