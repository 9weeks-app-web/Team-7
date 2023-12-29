import {
  FieldErrors,
  FieldValues,
  UseFormClearErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import FormInput from "./FormInput";
import Button from "../design/Button";
import PhoneCertificationButton from "../design/PhoneCertificationButton";
import { useState } from "react";
import { isError } from "../../utils/inputUtils";
import ErrorText from "./ErrorText";
import SuccessText from "./SuccessText";
import PhoneCertificationText from "./PhoneCertificationText";

interface phoneCertificationProps {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  certificationNumber: string | number;
  errors: FieldErrors<FieldValues>;
}

const carrierList = ["SKT", "KT", "LG U+", "알뜰폰"];

const PhoneCertification = ({
  register,
  watch,
  clearErrors,
  certificationNumber,
  errors,
}: phoneCertificationProps): JSX.Element => {
  const [currnetSelect, setCurrentSelect] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleCarrierClick = (target: string) => {
    if (currnetSelect && currnetSelect === target) setCurrentSelect("");
    else setCurrentSelect(target);
  };

  const isCorrectNumber = (target: string) =>
    /^\d{2,3}-?\d{3,4}-?\d{4}$/.test(target);

  const validateCertificationNumber = (target: string) => {
    setIsClicked(false);
    if (target === certificationNumber) {
      setIsSuccess(true);
      return true;
    } else {
      setIsSuccess(false);
      return "잘못된 인증번호입니다. 다시 인증해주세요.";
    }
  };

  const handleCertificationClick = () => {
    setIsClicked(true);
    setIsSuccess(false);
    clearErrors("phoneCertification");
  };

  return (
    <div className="flex flex-col gap-s-1">
      <label className="text-2" htmlFor="phoneCertification">
        휴대폰 인증
      </label>
      <div className="flex gap-s-1">
        {carrierList.map((item, index) => (
          <PhoneCertificationButton
            key={index}
            width="w-[66px]"
            onClick={() => handleCarrierClick(item)}
            name={item}
            color={currnetSelect === item ? "blue" : undefined}
          >
            {item}
          </PhoneCertificationButton>
        ))}
      </div>
      <div className="flex gap-s-1">
        <FormInput
          className="w-[282px]"
          name="phoneNumber"
          placeholder="휴대폰 번호 입력"
          register={register}
          maxLength={13}
          options={{
            onChange: (event) => {
              event.target.value = event.target.value
                .replace(/[^0-9]/g, "")
                .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
                .replace(/(\-{1,2})$/g, "");
            },
          }}
        />
        <Button
          width="w-[96px]"
          color={
            isCorrectNumber(watch("phoneNumber")) && currnetSelect !== ""
              ? "blue"
              : undefined
          }
          disabled={
            !isCorrectNumber(watch("phoneNumber")) || currnetSelect === ""
          }
          onClick={handleCertificationClick}
        >
          인증 요청
        </Button>
      </div>
      <div className="grid gap-s-1">
        <FormInput
          name="phoneCertification"
          placeholder="인증 번호 입력"
          register={register}
          options={{
            validate: {
              validateCertificationNumber,
            },
          }}
          isError={isError("phoneCertification", errors)}
        />
        <div>
          {isError("phoneCertification", errors) && (
            <ErrorText
              errorMessage={errors.phoneCertification?.message as string}
            />
          )}
          {isSuccess && <SuccessText successMessage={"인증되었습니다."} />}
          {isClicked && (
            <PhoneCertificationText
              phoneCertificationText={"인증 번호 입력 (00:59)"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneCertification;
