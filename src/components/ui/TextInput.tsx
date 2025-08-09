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
          className='auth-input peer focus:border-transparent'
        />

        <div className='motion-border-b peer-focus:after:w-full after:h-[0.5px] after:bg-secondary-3 after:bottom-0.25 after:duration-200 peer-[data-error="true"]:after:bg-red-600' />

        {inputProps.type == 'password' &&
          <div
            className="absolute end-0 top-2 cursor-pointer"
            onClick={togglePasswordVisibility}
            aria-label={visible ? "Hide password" : "Show password"}
          >
            {visible ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </div>
        }

      </div>

      {errors[name] && (
        <span className="text-red-500 sm-text">{errors[name].message?.toString()}</span>
      )}
    </div>
  );
}
