import { SubmitHandler, useForm } from "react-hook-form";
import { InputDatas } from "../types/nicknameTypes";
import NicknameContainer from "../components/nickname/NicknameContainer";
import NicknameItems from "../components/nickname/NicknameItems";
import NicknameCheckbox from "../components/nickname/NicknameCheckbox";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveData } from "../store/joinSlice";
import FormInputBox from "../components/common/FormInputBox";
import UsersLayout from "../components/layout/UsersLayout";
import { useState } from "react";
import Button from "../components/design/Button";

const Nickname = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputDatas>();

  const [isSuccess, setIsSucess] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDataSubmit: SubmitHandler<InputDatas> = (data) => {
    dispatch(saveData({ userData: data, joinState: { step2: true } }));
    navigate("/signup?type=email&step=3");
  };

  return (
    <UsersLayout>
      <NicknameContainer>
        <NicknameItems>
          <h1 className="flex flex-col justify-between items-center mb-[50px]">
            <img
              src="/logoSfacTitle.svg"
              alt="SFAC Logo"
              className="mx-auto mb-[20px]"
            />
            <div className="flex">
              <span className="flex items-center justify-between bg-primary-20 text-primary-80 rounded-full px-[10px] py-[6px] mr-[6px] text-xs">
                단계 <strong> 2</strong>/3
              </span>
              <strong className="font-bold text-[24px]">
                닉네임을 설정해주세요.
              </strong>
            </div>
          </h1>
        </NicknameItems>
        <form onSubmit={handleSubmit(handleDataSubmit)}>
          <div className="grid gap-s-2">
            <FormInputBox
              register={register}
              options={{
                onChange: () => {
                  if (watch("nickname") !== "") setIsSucess(true);
                  else setIsSucess(false);
                },
              }}
              name="nickname"
              title="닉네임"
              placeholder="닉네임 입력"
              maxLength={15}
              isSuccess={isSuccess}
              successMessage="사용 가능한 닉네임입니다."
            />
            <p>{errors?.nickname?.message}</p>
            <div className="grid gap-[9px]">
              <p className="text-2">제안허용</p>
              <NicknameCheckbox
                register={register}
                title="채용제안"
                target="agreeRecruit"
              />
              <NicknameCheckbox
                register={register}
                title="의견제안"
                target="agreeOpinion"
              />
              <NicknameCheckbox
                register={register}
                title="프로젝트 제안"
                target="agreeProject"
              />
            </div>
          </div>
          <div className="w-full flex gap-[6px] text-gray-500 mt-s-4">
            <Button type="button" onClick={() => navigate(-1)} width="w-[96px]">
              이전
            </Button>
            <Button
              type="submit"
              color={watch("nickname") !== "" ? "blue" : undefined}
              disabled={watch("nickname") === ""}
              width="w-[282px]"
            >
              다음
            </Button>
          </div>
        </form>
      </NicknameContainer>
    </UsersLayout>
  );
};

export default Nickname;
