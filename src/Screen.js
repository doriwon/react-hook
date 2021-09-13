import React, { useContext } from "react";
import { UserContext } from "./context";
import Header from "./Header";

const Screen = ({ user }) => {
  // Screen이 Provider의 children으로 들어와있기 때문에 context.js의 logUserIn 함수를 사용 가능한 것
  const { logUserIn } = useContext(UserContext);
  return (
    <div>
      <Header user={user} />
      {/* 해당 페이지에서 사용하지 않지만 내부 컨테이너에서 사용하기 떄문에 props를 전달해줘야 함 */}
      <h1>first Screen</h1>
      <button onClick={logUserIn}>Log user in</button>
    </div>
  );
};

export default Screen;
