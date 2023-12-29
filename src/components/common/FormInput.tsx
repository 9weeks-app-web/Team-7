import { useState } from "react";
import { FormInputProps } from "../../types/formInputTypes";
import { customStyle, handleShowClick } from "../../utils/inputUtils";

const FormInput = ({
  register,
  name = "name",
  isError,
  isVisible,
  options,
  maxLength,
  currentLength,
  ...props
}: FormInputProps): JSX.Element => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [type, setType] = useState(props.type);

  const styles = customStyle(props.className, isError, isVisible);

  return (
    register && (
      <div className="relative">
        <input
          {...register(name, options)}
          {...props}
          maxLength={maxLength}
          type={type}
          className={`p-[14px] w-full h-[52px] rounded-md border text-neutral-90 font-semibold text-sm ${styles}`}
        />
        {props.type === "password" && (
          <div className="w-[24px] h-[24px] absolute top-[50%] translate-y-[-50%] right-[16px]">
            <div
              onClick={() =>
                handleShowClick(isShow, props.type, setIsShow, setType)
              }
            >
              {isShow ? (
                <img src="./hide.svg" alt="show/hide" />
              ) : (
                <img src="./show.svg" alt="show/hide" />
              )}
            </div>
          </div>
        )}
        {maxLength && currentLength && (
          <div className="h-[1.25rem] absolute top-[50%] translate-y-[-50%] right-[16px] text-neutral-30 font-semibold text-sm">
            {currentLength?.length || 0} / {maxLength}
          </div>
        )}
      </div>
    )
  );
};

export default FormInput;
