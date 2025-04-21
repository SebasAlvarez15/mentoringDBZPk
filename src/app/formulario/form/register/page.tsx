"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import LabelField from "../../../../components-form/label-field";
import ImageUploadField from "../../../../components-form/image-upload-field";
import LabelId from "../../../../components-form/label-id";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Nombre requerido con minimo 3 caracteres.",
  }),
  lastName: z.string().min(5, {
    message: "Apellidos requeridos con minimo 5 caracteres.",
  }),
  id: z
    .string()
    .min(1, { message: "El número de identificación es obligatorio." }),
  // .regex(/^\d+$/, { message: "El ID debe contener solo números." }),
  image: z
    .any()
    .refine((file) => file && file.length > 0, {
      message: "Debes seleccionar una imagen.",
    })
    .refine(
      (file) => {
        const acceptedTypes = ["image/jpeg", "image/png"];
        return file && file[0] && acceptedTypes.includes(file[0].type);
      },
      {
        message: "Solo se permiten imágenes JPEG o PNG.",
      }
    ),
});

export default function FormRegisterAuth() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <LabelField title="Nombre" controlName="username" />
            <LabelField title="Apellido" controlName="lastName" />
            <LabelId
              controlName="id"
              title="Número de Identificación"
              placeholder="1.1017.226.000"
            />
            <ImageUploadField controlName="image" title="image" />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
}
