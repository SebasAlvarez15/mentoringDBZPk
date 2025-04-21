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
import { ChangeEvent } from "react";

interface ImageUploadFieldProps {
  controlName: string;
  title: string;
  description?: string;
  onImageChange?: (file: File | null) => void;
}

export default function ImageUploadField({
  controlName,
  title,
  description,
  onImageChange,
}: ImageUploadFieldProps) {
  return (
    <FormField
      name={controlName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="image/*"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0] || null;
                field.onChange(e.target.files);
                if (onImageChange) onImageChange(file);
              }}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
