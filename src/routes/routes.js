import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import WebCarrer from "@/pages/WebCarrer.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import SettingUser from "@/pages/UserProfile/SettingUser.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
// import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Register from "@/pages/formRegister.vue";
import Login from "@/pages/formLogin.vue";

const routes = [
  { path: '/', name:"Carrer", component: WebCarrer},
  { path: "/login", name: "Login", component: Login },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "Carrer",
        name: "WebCarrer",
        component: WebCarrer
      },
      {
        path: "register",
        name: "Register",
        component: Register
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "setting",
        name: "Setting",
        component: SettingUser
      }
    ]
  }
];

export default routes;
