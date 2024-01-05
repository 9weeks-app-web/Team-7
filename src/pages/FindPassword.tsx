import UsersLayout from "../components/layout/UsersLayout";
import FindPasswordForm from "../components/find/password/FindPasswordForm";

const FindPassword = (): JSX.Element => {
  return (
    <UsersLayout>
      <FindPasswordForm />
    </UsersLayout>
  );
};

export default FindPassword;
