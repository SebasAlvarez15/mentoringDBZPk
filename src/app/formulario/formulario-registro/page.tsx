"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationForm, FormSchema } from "../validation/validationForm";

type Inputs = {
  example: string;
  exampleRequired: string;
  imagen: FileList;
};

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(validationForm),
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-8">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-white">Formulario de registro</h1>

          <label className="text-white">Nombre completo</label>
          <input
            className="border border-indigo-600"
            defaultValue=""
            placeholder="Nombre completo"
            {...register("nombre")}
          />
          {errors.nombre && (
            <span className="text-red-500">{errors.nombre.message}</span>
          )}

          <label className="text-white">Cedula</label>
          <input
            className="border border-indigo-600"
            placeholder="Cedula"
            {...register("cedula")}
          />
          {errors.cedula && (
            <span className="text-red-500">{errors.cedula.message}</span>
          )}

          <label className="text-white">Adjuntar imagen</label>
          <input
            className="border border-indigo-600"
            type="file"
            accept="image/*"
            {...register("imagen")}
          />
          {errors.imagen && (
            <span className="text-red-500">
              {String(errors.imagen.message)}
            </span>
          )}

          {watch("imagen") && watch("imagen").length > 0 && (
            <img
              src={URL.createObjectURL(watch("imagen")[0])}
              alt="Vista previa"
              className="w-32 h-32 object-cover rounded"
            />
          )}
          <input className="border border-indigo-600" type="submit" />
        </form>
      </div>
    </>
  );
}
