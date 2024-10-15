import { useState } from "react";
import UserContext from "./userContext";

function UserContextProvider({ children }) {
  const [user, SetUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, SetUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;