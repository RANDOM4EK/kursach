import React, { createContext, useContext } from "react";
import AuthContext from "../context/autorisation/AuthContext";
import style from "./AutorisationForm.module.css"
import PrivateRoute from "../privat/PrivateRoute";





const AuthorizationForm = () => {

    const submit = () =>{
        PrivateRoute
    }
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('AuthorizationForm must be used within a AuthProvider');
  }
  
  const { gmail, password } = context;
 
  return (
    <div className={style.form_container}> 
      <form action="">
        <label htmlFor="Gmail">Gmail</label>
        <input 
          type="text" 
          id="Gmail"
          value={gmail} 
          onChange={(e) => context.setGmail(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input 
          type="password" 
          id="Password"
          value={password} 
          onChange={(e) => context.setPassword(e.target.value)}
        />
        <button onClick={submit}type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default AuthorizationForm;
