import TopGNB from "../components/design/TopGNB";
import SnsJoinForm from "../components/join/SnsJoinForm";
import UsersLayout from "../components/layout/UsersLayout";

const Join = () => {
  return (
    <>
      <TopGNB />
      <UsersLayout>
        <SnsJoinForm />
      </UsersLayout>
    </>
  );
};

export default Join;
