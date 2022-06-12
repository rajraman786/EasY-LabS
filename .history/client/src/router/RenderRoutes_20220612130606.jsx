// import { lazy } from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import GetStarted from "../pages/GetStarted";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import ProblemEditor from "../pages/ProblemEditor";
import TeacherDashboard from "../pages/TeacherDashboard/TeacherDashboard";
import NotFound from "../pages/NotFound";

// const Login = lazy(() => import("pages/auth/Login"));
// const Home = lazy(() => import("pages/Home"));

const ROUTES = [
    // {
    //     path: "/",
    //     key: "ROOT",
    //     exact: true,
    //     component: () => {
    //         if (!localStorage.getItem("token")) {
    //             return <Redirect to={"/login"} />;
    //         }
    //         return <Redirect to={"/app"} />;
    //     },
    //     routes: [],
    // },
    // {
    //     path: "/login",
    //     key: "LOGIN",
    //     exact: true,
    //     component: Login,
    //     routes: [],
    // },
    // {
    //     path: "/app",
    //     exact: false,
    //     key: "APP",
    //     component: (props) => {
    //         if (!localStorage.getItem("token")) {
    //             return <Redirect to={"/"} />;
    //         }
    //         return <RenderRoutes {...props} />;
    //     },
    //     routes: [
    //         {
    //             path: "/app",
    //             key: "APP_ROOT",
    //             exact: true,
    //             component: Home,
    //         },
    //     ],
    // },
    {
        path: "/",
        key: "HOME",
        exact: false,
        component: Home,
        props: {},
        // routes: [],
    },
    {
        path: "/get-started",
        key: "GET STARTED",
        exact: "true",
        component: GetStarted,
        props: {
            isLogin: true,
        },
        routes: [],
    },
    {
        path: "/access-account",
        key: "ACCESS-ACCOUNT",
        exact: "true",
        component: GetStarted,
        props: {
            isLogin: true,
        },
        routes: [],
    },
    {
        path: "/create-account",
        key: "CREATE-ACCOUNT",
        exact: "true",
        component: GetStarted,
        props: {
            isLogin: false,
        },
        routes: [],
    },
    {
        path: "/signup",
        key: "SIGNUP",
        exact: false,
        component: SignUp,
        props: {
            startSignUp: true,
        },
        routes: [],
    },
    {
        path: "/complete-signup",
        key: "SIGNUP",
        exact: false,
        component: SignUp,
        props: {
            startSignUp: false,
        },
        routes: [],
    },
    {
        path: "/login",
        key: "LOGIN",
        exact: false,
        component: Login,
        props: {},
        routes: [],
    },
    {
        path: "/problem/:id",
        key: "PROBLEM",
        exact: true,
        component: ProblemEditor,
        props: {},
        routes: [],
    },
    {
        path: "/teacherDh=ashboard",
        key: "PROBLEM",
        exact: true,
        component: ProblemEditor,
        props: {},
        routes: [],
    }
];

export default ROUTES;

export const RenderRoutes = ({ routes }) => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => {
                    return (
                        <Route
                            key={route.key}
                            path={route.path}
                            exact={route.exact}
                            element={<route.component {...route.props} />}
                        />
                    );
                })}

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
