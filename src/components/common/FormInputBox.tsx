import FormInput from "./FormInput";
import { formInputBoxProps } from "../../types/formInputTypes";
import ErrorText from "./ErrorText";
import SuccessText from "./SuccessText";

const FormInputBox = ({
  register,
  name,
  title,
  options,
  isError,
  isSuccess,
  isVisible,
  maxLength,
  errorMessage,
  successMessage,
  currentLength,
  ...props
}: formInputBoxProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-s-1">
      <label className="text-2" htmlFor={name}>
        {title}
      </label>
      <FormInput
        register={register}
        name={name}
        options={options}
        isVisible={isVisible}
        isError={isError}
        maxLength={maxLength}
        currentLength={currentLength}
        {...props}
      />
      {isError && <ErrorText errorMessage={errorMessage} />}
      {isSuccess && <SuccessText successMessage={successMessage} />}
    </div>
  );
};

export default FormInputBox;
