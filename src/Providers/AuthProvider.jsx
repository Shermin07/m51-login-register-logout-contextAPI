/* eslint-disable react/prop-types */
import { createContext } from "react";


const AuthProvider = ({children}) => {

const AuthContext = createContext(null);


const authInfo = {

}

    return (
        <div>
            <AuthContext.Provider  value={authInfo}>
          {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;