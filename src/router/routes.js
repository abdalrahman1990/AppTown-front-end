import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Discover = () => import(/* webpackChunkName: "common" */ "@/pages/Discover.vue");
const Home = () => import(/* webpackChunkName: "common" */ "@/pages/Home.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const ControlPanel = () => import(/* webpackChunkName: "common" */ "@/pages/ControlPanel.vue");
const Create = () => import(/* webpackChunkName: "common" */ "@/pages/Create.vue");


const guest = (to, from, next) => {
  if (!localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/");
  }
};
const auth = (to, from, next) => {
  if (localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/login");
  }
};

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "Discover",
        name: "Discover",
        component: Discover
      },
      {
        path: "Home",
        name: "Home",
        component: Home
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "ControlPanel",
        name: "ControlPanel",
        component: ControlPanel
      },
      {
        path: "Create",
        name: "Create",
        component: Create
      },
      {
        path: "Home",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
      },
      {
        path: "login",
        name: "Login",
        beforeEnter: guest,
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/Auth/Login.vue")
      },
      {
        path: "register",
        name: "Register",
        beforeEnter: guest,
        component: () =>
          import(/* webpackChunkName: "register" */ "@/views/Auth/Register.vue")
      },
      {
        path: "verify/:hash",
        name: "Verify",
        beforeEnter: auth,
        props: true,
        component: () =>
          import(/* webpackChunkName: "verify" */ "@/views/Auth/Verify.vue")
      },

      {
        path: '/story',
        name: 'story',
        props: true,
        component: () => import(/* webpackChunkName: "story" */ '@/pages/Story.vue')
      },
      {
        path: '/product',
        name: 'product',
        props: true,
        component: () => import(/* webpackChunkName: "product" */ '@/pages/Product.vue')
      },

    ]
  },
  { path: "*", component: NotFound },
];


export default routes;
