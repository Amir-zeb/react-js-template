import { Home, Page404 } from "../screens";

export const appRoutes = [
  {
    routeName:"/",
    ele:<Home />,
    exact: true,
    isProtected:false,
    layout:"primary",
    fallBack:"/login",
    _for:"all"
  },
  {
    routeName:"/*",
    ele:<Page404 />,
    exact: false,
    isProtected:false,
    layout:"primary",
    fallBack:"/",
    _for:"all"
  }
];