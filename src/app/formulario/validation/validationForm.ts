import z from "zod";

export const validationForm = z.object({
  nombre: z
    .string()
    .min(3, { message: "El nombre debe tener mínimo 3 caracteres" })
    .max(20, { message: "El nombre debe tener máximo 20 caracteres" }),
  cedula: z
    .string()
    .min(3, { message: "La cedula debe tener mínimo 3 caracteres" })
    .max(20, { message: "La cedula debe tener máximo 20 caracteres" }),
  imagen: z
    .any()
    .refine((file) => file && file.length > 0, {
      message: "La imagen es requerida",
    })
    .refine((file) => file && file[0] && file[0].size < 50 * 1024, {
      message: "El tamaño de la imagen debe ser menor a 50kB",
    })
    .refine(
      (file) =>
        file && file[0] && ["image/jpeg", "image/png"].includes(file[0].type),
      {
        message: "El formato de la imagen debe ser JPEG o PNG",
      }
    ),
});

export type FormSchema = z.infer<typeof validationForm>;
