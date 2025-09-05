import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactFormSchema, ContactFormType } from "../types/contactForm";
import { zodResolver } from "@hookform/resolvers/zod";

// Custom hook to encapsulate form logic
export const useContactForm = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitMessage, setSubmitMessage] = useState<{
     type: string;
     text: string;
   }>({ type: "", text: "" });

   const {
     handleSubmit,
     control,
     formState: { errors },
     reset,
   } = useForm<ContactFormType>({
     resolver: zodResolver(contactFormSchema),
     defaultValues: {
       name: "",
       email: "",
       phone: "",
       message: "",
     },
   });

   const onSubmit = async (data: ContactFormType) => {
     setIsSubmitting(true);
     setSubmitMessage({ type: "", text: "" });

     try {
       // Simulate an API call
       await new Promise((resolve) => setTimeout(resolve, 1500));
       setSubmitMessage({
         type: "success",
         text: "Message sent successfully!",
       });
       reset(); // Reset the form after successful submission
     } catch (error) {
       setSubmitMessage({
         type: "error",
         text: "An error occurred. Please try again.",
       });
     } finally {
       setIsSubmitting(false);
     }
   };

   return {
     control,
     handleSubmit,
     errors,
     onSubmit,
     isSubmitting,
     submitMessage,
   };

};
