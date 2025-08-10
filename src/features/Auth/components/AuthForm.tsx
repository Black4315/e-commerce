import { useKeyDown } from "@/hooks/useKeyDown";
import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef, ReactNode, RefObject, useRef } from "react";
import { Control, useController } from "react-hook-form";

interface AuthFormProps extends ComponentProps<"form"> {
    heading: string;
    subheading?: string;
    children: ReactNode;
    control: Control<any>
}

const AuthForm = forwardRef<HTMLFormElement, AuthFormProps>(
    ({ heading, subheading, children, className, control, ...props }, ref) => {
        const {
            formState: { errors },
        } = useController({ control, name: 'root' });

        const formRef = (ref as any) || useRef<HTMLFormElement | null>(null);

        // focus on the next input when "Enter" key is pressed
        const handleEnterPress = () => {
            const inputs = formRef.current.querySelectorAll('input, textarea, select');
            if (inputs) {
                const currentIndex = Array.from(inputs).findIndex((input) => input === document.activeElement);
                if (currentIndex !== -1 && currentIndex < inputs.length - 1) {
                    (inputs[currentIndex + 1] as HTMLElement).focus();
                }
            }
        };

        useKeyDown('Enter', handleEnterPress, []);
        return (
            <form
                ref={ref}
                method={props.method || "POST"}
                className={cn("auth-form space-y-6 min-w-[250px] w-full sm:w-[370px]", className)}
                aria-labelledby="auth-form"
                aria-describedby={props["aria-describedby"]}
                autoComplete={props.autoComplete || "on"}
                noValidate={props.noValidate}
                encType={props.encType || "application/x-www-form-urlencoded"}
                {...props}
            >

                <header className="space-y-4 ">
                    <h1 id="auth-form-heading" className="med-heading  max-sm:text-2xl">
                        {heading}
                    </h1>
                    {subheading && (
                        <p className="reg-text">{subheading}</p>
                    )}
                </header>

                {errors.root && (
                    <div className="text-red-500">{errors.root.message}</div>
                )}

                <div className="space-y-7">
                    {children}
                </div>
            </form>
        )
    }
)

export default AuthForm