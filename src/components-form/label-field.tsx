import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface LabelFieldProps {
  controlName: string;
  title: string;
  placeholder?: string;
  description?: string;
}

export default function LabelField({
  controlName,
  title,
  placeholder,
  description,
}: LabelFieldProps) {
  return (
    <FormField
      name={controlName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{title}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
