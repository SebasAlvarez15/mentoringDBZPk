"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface MaskedIdFieldProps {
  controlName: string;
  title: string;
  placeholder?: string;
  description?: string;
}

export default function LabelId({
  controlName,
  title,
  placeholder,
  description,
}: MaskedIdFieldProps) {
  const [maskedValue, setMaskedValue] = useState("");

  const formatId = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <FormField
      name={controlName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder || "1.017.226.000"}
              value={maskedValue}
              onChange={(e) => {
                const rawValue = e.target.value.replace(/\D/g, ""); // sin puntos
                const masked = formatId(rawValue); // con puntos
                setMaskedValue(masked); // actualizar lo que se ve
                field.onChange(rawValue); // guardar el valor sin formato
              }}
              inputMode="numeric"
              // pattern="\d*"
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
