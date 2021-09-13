// 한 공간에 State들 정의
import React, { useState } from "react";

// Context는 어플리케이션의 데이터 저장소
export const UserContext = React.createContext();

// Provider : 주로 Context를 가져올 수 있게 하기 위한 부모같은 역할
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Son",
    loggedIn: false,
  });

  // 로그인을 위한 함수
  const logUserIn = () =>
    setUser({
      ...user, //로그인외의 다른 모든 object (name: "Son")
      loggedIn: true,
    });

  // Provider의 모든 children은 user에 대한 접근권한이 생김
  return (
    //value로 값 할당
    <UserContext.Provider value={{ user, logUserIn }}>
      {/* 해당 Provider를 모든 children에 대한 부모로 만들기 위함 */}
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
