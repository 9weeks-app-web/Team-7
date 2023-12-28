import { SubmitHandler, useForm } from "react-hook-form";
import { InputDatas } from "../types/nicknameTypes";
import NicknameContainer from "../components/nickname/NicknameContainer";
import NicknameItems from "../components/nickname/NicknameItems";
import NicknameCheckbox from "../components/nickname/NicknameCheckbox";

const Nickname = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<InputDatas>();

  const handleDataSubmit: SubmitHandler<InputDatas> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[1200px] m-auto">
      <NicknameContainer>
        <NicknameItems>
          {/* TODO: logo 추가시 수정
          <image src="" alt="Logo" /> */}
          <h1>회원가입</h1>
        </NicknameItems>
        <form onSubmit={handleSubmit(handleDataSubmit)}>
          <NicknameItems>
            <p>닉네임</p>
            <input
              id="nickname"
              {...register("nickname", {
                required: true,
              })}
            />
            <p>{errors?.nickname?.message}</p>
          </NicknameItems>
          <NicknameItems>
            <p>제안허용</p>
            <NicknameCheckbox
              register={register}
              title="채용제안"
              target="recruit"
            />
            <NicknameCheckbox
              register={register}
              title="의견제안"
              target="opinion"
            />
            <NicknameCheckbox
              register={register}
              title="프로젝트 제안"
              target="project"
            />
            <button disabled={!isValid}>완료</button>
          </NicknameItems>
        </form>
      </NicknameContainer>
    </div>
  );
};

export default Nickname;
