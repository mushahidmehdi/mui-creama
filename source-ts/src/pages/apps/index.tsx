import React from "react";
import { RoutePermittedRole } from "shared/constants/AppConst";

import { Navigate } from "react-router-dom";

const Mail = React.lazy(() => import("./Mail"));
const ToDo = React.lazy(() => import("./ToDo"));
const Contact = React.lazy(() => import("./Contact"));
const ScrumBoard = React.lazy(() => import("./ScrumBoard"));
const Chat = React.lazy(() => import("./Chat"));
const Wall = React.lazy(() => import("./Wall"));

export const appsConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: [
      "/apps/mail/label/:label",
      "/apps/mail/label/:label/:id",
      "/apps/mail/:folder",
      "/apps/mail/:folder/:id",
    ],
    element: <Mail />,
  },
  {
    path: "/apps/mail",
    element: <Navigate to="/apps/mail/inbox" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: [
      "/apps/todo/label/:label",
      "/apps/todo/label/:label/:id",
      "/apps/todo/:folder/:id",
      "/apps/todo/:folder",
    ],
    element: <ToDo />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/todo",
    element: <Navigate to="/apps/todo/folder/all" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/contact/folder/:name", "/apps/contact/label/:name"],
    element: <Contact />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/apps/contact",
    element: <Navigate to="/apps/contact/folder/all" />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/scrum-board/:id", "/apps/scrum-board"],
    element: <ScrumBoard />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/chat"],
    element: <Chat />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: ["/apps/wall"],
    element: <Wall />,
  },
];
