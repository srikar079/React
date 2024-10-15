import React, { createContext, useState } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create the provider component
const UserContextProvider= ({children})=>{
        <UserContext.Provider >
            {children}
        </UserContext.Provider>
}

export { UserContextProvider };
export default UserContext;