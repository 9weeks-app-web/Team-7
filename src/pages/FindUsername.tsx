import { useState } from "react";
import { Link } from "react-router-dom";

import UsersLayout from "../components/layout/UsersLayout";
import ConfirmUsernameForm from "../components/find/username/ConfirmUsernameForm";
import FindUsernameForm from "../components/find/username/FindUsernameForm";

const FindUsername = (): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [recoveredUsername, setRecoveredUsername] = useState<string>("");
  return (
    <UsersLayout>
      <div className="flex flex-col items-center">
        <Link to="/">
          <img src="/logoSfacTitle.svg" alt="LogoSfacTitle" />
        </Link>
        <h1 className="title mt-[20px]">
          {isAuthenticated ? "아이디 확인" : "아이디 찾기"}
        </h1>
      </div>
      {isAuthenticated ? (
        <ConfirmUsernameForm recoveredUsername={recoveredUsername} />
      ) : (
        <FindUsernameForm
          onAuthenticationChange={setIsAuthenticated}
          onUsernameRecovery={setRecoveredUsername}
        />
      )}
    </UsersLayout>
  );
};

export default FindUsername;
