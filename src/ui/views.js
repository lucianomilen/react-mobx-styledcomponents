import React from "react";

//models
import { Route } from "mobx-router";

//containers
import LoginContainer from "./login/containers/LoginContainer";
import PostContainer from "./success/containers/PostContainer";

const views = {
  login: new Route({
    path: "/",
    component: <LoginContainer />
  }),
  success: new Route({
    path: "/list",
    component: <PostContainer />
  })
};

export default views;
