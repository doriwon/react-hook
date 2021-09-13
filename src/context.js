// 한 공간에 State들 정의
import React, { useState, useContext } from "react";

// Context는 어플리케이션의 데이터 저장소
const UserContext = React.createContext();

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
    <UserContext.Provider
      value={{
        user,
        fn: { logUserIn }, // logUserOut 함수가 생성될 수 있으니 object로 생성
      }}
    >
      {/* 해당 Provider를 모든 children에 대한 부모로 만들기 위함 */}
      {children}
    </UserContext.Provider>
  );
};

//중복으로 사용되는 것을 막기위한 함수 생성
export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export default UserContextProvider;
