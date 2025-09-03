import { cn } from '@/lib/utils';
import { useState, type ComponentProps } from 'react';
import { type Control, useController } from 'react-hook-form';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

type TextInputProps = ComponentProps<'input'> & {
  control: Control<any>;
  label?: string;
  name: string;
};

export default function TextInput({
  control,
  label,
  name,
  className,
  ...inputProps
}: TextInputProps) {
  const {
    formState: { errors },
  } = useController({ control, name });

  // state to toggle input type if its password
  const [visible, setVisible] = useState(false);

  // toggle only if original type is password
  const currentType = inputProps.type === 'password' ? (visible ? 'text' : 'password') : inputProps.type;
  const togglePasswordVisibility = () => {
    setVisible((v) => !v);
  };

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-semibold">{label}</label>}

      <div className='relative h-8'>
        <input
          {...control.register(name)}
          {...inputProps}
          type={currentType}
          data-error={!!errors[name]}
          className={cn('auth-input peer', className)}
        />

        <div className='motion-border-b peer-focus:after:w-full after:bg-secondary-3 after:bottom-0 after:duration-350 peer-data-[error=true]:after:bg-red-500' />

        <EyeShowPass type={inputProps.type} visible={visible} toggleVisibility={togglePasswordVisibility} />

      </div>

      {errors[name] && (
        <span className="text-red-500 sm-text">{errors[name].message?.toString()}</span>
      )}
    </div>
  );
}


export const EyeShowPass = ({
  type,
  visible,
  toggleVisibility,
}: {
  type?: string;
  visible: boolean;
  toggleVisibility: () => void
}) => (
  type == 'password' &&
  <div
    className="absolute end-0 top-2 cursor-pointer"
    onClick={toggleVisibility}
    aria-label={visible ? "Hide password" : "Show password"}
  >
    {visible ? <IoEyeOutline /> : <IoEyeOffOutline />}
  </div>
)
