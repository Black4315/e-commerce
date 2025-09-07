import { FieldError, UseFormRegister } from "react-hook-form";
import z from "zod";

// Zod schema for validation
export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Your name is required." }),
  email: z
    .string()
    .min(1, { message: "Your email is required." })
    .email({ message: "Invalid email address." }),
  phone: z.string().min(1, { message: "Your phone number is required." }),
  message: z.string().optional(),
});

// Infer the type from the schema for TypeScript
export type ContactFormType = z.infer<typeof contactFormSchema>;

