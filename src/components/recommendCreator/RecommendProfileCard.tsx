import { recommendCreatorDummy } from "../../constants/recommendCreator";
import ProductsList from "./ProductsList";

const RecommendProfileCard = (props: any) => {
  const { profileImg, username, subject, products } = props;
  console.log("프로덕트 왜 안나오니: ", props);

  return recommendCreatorDummy.map((index) => {
    <li
      key={index + username}
      className="w-[336px] h-[210px] p-[20px] rounded-[6px] bg-primary-white cursor-pointer transition-all"
    >
      <div className="flex justify-between mb-[24px]">
        <div className="flex">
          <div className="bg-neutral-10 w-[54px] h-[54px] rounded-full mr-[10px] overflow-hidden">
            <img src={profileImg} alt={`${username}의 프로필 사진`} />
          </div>
          <div>
            <h3 className="text-neutral-90 text-[16px]">{username}</h3>
            <span className="text-neutral-90 text-[12px] py-[4px] px-[10px] bg-primary-20 rounded-[10px]">
              {subject}
            </span>
          </div>
        </div>
        <button className="text-[12px] text-primary-white w-[52px] h-[28px] rounded-[6px] bg-primary-100 py-[4px] px-[8px]">
          팔로우
        </button>
      </div>
      <ul className="flex justify-between">
        <ProductsList products={products} />
      </ul>
    </li>;
  });
};

export default RecommendProfileCard;
