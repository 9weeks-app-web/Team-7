import { Tab } from "../components/design/Tabs";
import PageLayout from "../components/layout/PageLayout";
import Button from "../components/design/Button";
import Card from "../components/design/Card";
import CommunityTab from "../components/community/CommunityTab";

import CommunitySidebar from "../components/community/CommunitySidebar";
import WeeklyPopularTopics from "../components/community/home/WeeklyPopularTopics";
import NewPost from "../components/community/home/NewPost";
import AdvertisingBanner from "../components/community/home/AdvertisingBanner";
import AskHelp from "../components/community/home/AskHelp";
import RecruitInfo from "../components/community/home/RecruitInfo";
import BestPost from "../components/community/home/BestPost";

import PostFilter from "../components/community/post/PostFilter";
import PostList from "../components/community/post/PostList";
import PopularPost from "../components/community/post/PopularPost";
import Pagenation from "../components/community/post/PageNation";
import CommunityPostButton from "../components/community/CommunityPostButton";
import PopularKeyword from "../components/community/post/PopularKeyword";

import RecommendedNotice from "../components/community/recruit/RecommendedNotice";
import RecruitNotice from "../components/community/recruit/RecruitNotice";
import RecruitFilter from "../components/community/recruit/RecruitFilter";

const Community = () => {
  const tabs: Tab[] = [
    {
      id: "1",
      label: "커뮤니티 홈",
      content: (
        <div className="flex mt-[42px]">
          <section className="main-section">
            <WeeklyPopularTopics />
            <NewPost />
            <AdvertisingBanner />
            <AskHelp />
            <RecruitInfo />
            <BestPost />
          </section>
          <CommunitySidebar spacing="ml-[20px]">
            <Card
              width="w-[339px]"
              height="h-auto"
              color="bg-[#99BDFF] text-white"
              border="rounded-[6px]"
              spacing="py-[30px] pl-[35px]"
            >
              <div>커뮤니티에서</div>
              <div>솔직하고 다양한</div>
              <div>이야기를 나눠보세요.</div>
              <div className="mt-[10px] text-[#E5EEFF] underline">
                {"[" + "커뮤니티 이용 규칙" + "]"}
              </div>
            </Card>

            <Card
              width="w-[339px]"
              height="h-auto"
              border="border rounded-[6px]"
              spacing="px-[35px] py-[30px] mt-[20px]"
              customStyle="flex flex-col justify-center items-center"
            >
              <div>
                <div>회원가입 또는 로그인으로</div>
                <div>커뮤니티에 참여해보세요.</div>
              </div>

              <div className="flex mt-[30px] text-[14px] font-semibold">
                <Button width="w-[128px]" height="h-[39px]">
                  로그인
                </Button>
                <div className="ml-[10px]"></div>
                <Button
                  color="black"
                  width="w-[128px]"
                  height="h-[39px]"
                  padding="py-[9px] px-[39px]"
                >
                  회원가입
                </Button>
              </div>
            </Card>
          </CommunitySidebar>
        </div>
      ),
    },
    {
      id: "2",
      label: "전체 게시글",
      content: (
        <div className="flex mt-[42px]">
          <section className="main-section">
            <PostFilter />
            <PostList />
            <Pagenation />
          </section>
          <CommunitySidebar spacing="mt-[20px]">
            <Card spacing="p-auto">
              <PopularPost />
              <PopularKeyword />
            </Card>
          </CommunitySidebar>
        </div>
      ),
    },
    {
      id: "3",
      label: "채용 공고",
      content: (
        <div className="flex mt-[42px]">
          <section className="main-section">
            <h1 className="title">추천 채용 공고</h1>
            <div className="text-neutral-50 mt-[10px]">
              내가 설정한 관심사 분야와 연관된 채용 정보입니다.
            </div>
            <RecommendedNotice />
            <h1 className="title mt-[79px]">전체 채용 공고</h1>
            <RecruitFilter />
            <RecruitNotice />
          </section>
        </div>
      ),
    },
    {
      id: "4",
      label: "전문가 피드백",
      content: <div>전문가 피드백</div>,
    },
  ];

  return (
    <PageLayout>
      <CommunityTab tabs={tabs} />
      <CommunityPostButton />
    </PageLayout>
  );
};

export default Community;
