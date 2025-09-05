"use client";
import { useContactForm } from "../hooks/useContactForm";
import FormField from "@/components/ui/FormField";

// Main component that uses the custom hook and FormField component
const ContactForm = () => {
  const { handleSubmit, onSubmit, isSubmitting, submitMessage, control } = useContactForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xldd bg-white p-6 sm:p-10 rounded-xl shadow-[0_1px_13px_rgba(0,0,0,0.05)] border border-gray-100"
    >
      <h2 className="sr-only">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <FormField
          name="name"
          type="text"
          placeholder="Your Name *"
          control={control}
        />
        <FormField
          name="email"
          type="email"
          placeholder="Your Email *"
          control={control}
        />
        <FormField
          name="phone"
          type="tel"
          placeholder="Your Phone *"
          control={control}
        />
      </div>

      <div className="mb-8">
        <FormField
          name="message"
          type="textarea"
          placeholder="Your Message"
          rows="6"
          control={control}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting} // tells assistive tech it's "loading"
          aria-live="polite" // announces the change in text
          aria-disabled={isSubmitting} // redundancy for better SR support
          className={`
                w-full sm:w-auto px-10 py-4 font-semibold text-white rounded-lg
                bg-secondary-3 hover:bg-hover-button-2 focus:outline-none focus:ring-2 focus:ring-secondary-3 focus:ring-offset-2
                transition-all duration-300
                ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
              `}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>

      {submitMessage.text && (
        <div
          role="status"
          aria-live="polite"
          className={`mt-4 text-center ${
            submitMessage.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {submitMessage.text}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
