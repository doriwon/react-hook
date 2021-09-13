import React from "react";
import UserContextProvider from "./context";
import Screen from "./Screen";

function App() {
  return (
    <UserContextProvider>
      {/* Screen이 children : Provider로 부터 모든 data를 가져올 수 있음 */}
      <Screen />
    </UserContextProvider>
  );
}

export default App;
