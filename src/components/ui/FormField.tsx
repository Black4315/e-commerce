import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";

// Type for FormField props
export type FormFieldProps = {
  label?: string;
  name: string;
  placeholder: string;
  control: Control<any>;
  rows?: string;
} & ComponentProps<"input">;

// Reusable component for a single form field with accessibility
const FormField = ({
  name,
  type,
  placeholder,
  control,
  rows,
}: FormFieldProps) => {
  const {
    field,
    formState: { errors },
  } = useController({ control, name });

  const errorMessage = errors[name]?.message?.toString();
  const isInvalid = !!errorMessage;

  return (
    <div className="col-span-1">
      <label htmlFor={name} className="sr-only">
        {placeholder}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          rows={Number(rows)}
          placeholder={placeholder}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? `${name}-error` : undefined}
          className="w-full p-4 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 resize-none"
          {...field}
        />
      ) : (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? `${name}-error` : undefined}
          className="w-full p-4 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          {...field}
        />
      )}
      {isInvalid && (
        <p id={`${name}-error`} role="alert" className="text-red-500 text-sm mt-1">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormField