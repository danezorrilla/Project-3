import React from "react";
import{Route, Redirect} from "react-router-dom";

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb){
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb){
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

export default fakeAuth;