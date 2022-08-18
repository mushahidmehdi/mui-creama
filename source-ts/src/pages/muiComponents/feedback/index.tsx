import React from "react";
import { RoutePermittedRole } from "../../../shared/constants/AppConst";

const Alert = React.lazy(() => import("./Alert"));
const Backdrop = React.lazy(() => import("./Backdrop"));
const Dialog = React.lazy(() => import("./Dialog"));
const Progress = React.lazy(() => import("./Progress"));
const Skeleton = React.lazy(() => import("./Skeleton"));
const Snackbar = React.lazy(() => import("./Snackbar"));

export const feedbackConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: "/mui/feedback/alert",
    element: <Alert />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/mui/feedback/backdrop",
    element: <Backdrop />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/mui/feedback/dialog",
    element: <Dialog />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/mui/feedback/progress",
    element: <Progress />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/mui/feedback/skeleton",
    element: <Skeleton />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/mui/feedback/snackbars",
    element: <Snackbar />,
  },
];
