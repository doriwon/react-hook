import React from "react";
import Header from "./Header";

const Screen = ({ user }) => (
  <div>
    <Header user={user} />
    {/* 해당 페이지에서 사용하지 않지만 내부 컨테이너에서 사용하기 떄문에 props를 전달해줘야 함 */}
    <h1>first Screen</h1>
  </div>
);

export default Screen;
