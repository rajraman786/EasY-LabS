// import { lazy } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import GetStarted from "../pages/GetStarted";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import ProblemEditor from "../pages/ProblemEditor";
import TeacherDashboard from "../pages/TeacherDashboard/TeacherDashboard";
import All from "../pages/TeacherDashboard/AllLabs/All";
import NotFound from "../pages/NotFound";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";

// const Login = lazy(() => import("pages/auth/Login"));
// const Home = lazy(() => import("pages/Home"));

 

  const lab_details = {
    all_labs : [
        {   
            lab_id : 1,
            name:"C++",
            instructor:"",
            added : false,
            compiler:"c/c++",
            desc:"A basic and beginner friendly lab for learning C++",
            problems:[
        {
          problem_id:1,
          problem_name:"Prime Number",
          problem_desc:"Given a number, find whether it is prime number or not",
          sample_input:"5",
          sample_output:"Yes",
          date:"3-05-2001"
        },
        {
          problem_id:2,
          problem_name:"Armstrong Number",
          problem_desc:"Given a number, find whether it is armstrong number or not",
          sample_input:"153",
          sample_output:"Yes",
          date:"3-05-2001"
        }
      ],
        students:[]
        },
        {   
            lab_id : 2,
            name:"Python",
            instructor:"",
            added : false,
            compiler:"python",
            desc:"A basic and beginner friendly lab for learning Python",
            problems:[
        {
          problem_id:1,
          problem_name:"Prime Number",
          problem_desc:"Given a number, find whether it is prime number or not",
          sample_input:"5",
          sample_output:"Yes",
          date:"3-05-2001"
        },
        {
          problem_id:2,
          problem_name:"Armstrong Number",
          problem_desc:"Given a number, find whether it is armstrong number or not",
          sample_input:"153",
          sample_output:"Yes",
          date:"3-05-2001"
        }
      ],
        students:[]
        },
        {   
            lab_id : 3,
            name:"Java",
            instructor:"",
            added : false,
            compiler:"java",
            desc:"A basic and beginner friendly lab for learning Java",
            problems:[
        {
          problem_id:1,
          problem_name:"Prime Number",
          problem_desc:"Given a number, find whether it is prime number or not",
          sample_input:"5",
          sample_output:"Yes",
          date:"3-05-2001"
        },
        {
          problem_id:2,
          problem_name:"Armstrong Number",
          problem_desc:"Given a number, find whether it is armstrong number or not",
          sample_input:"153",
          sample_output:"Yes",
          date:"3-05-2001"
        }
      ],
        students:[]

        },
        {   
            lab_id : 4,
            name:"C",
            instructor:"",
            added : false,
            compiler:"c/c++",
            desc:"A basic and beginner friendly lab for learning C",
            problems:[
        {
          problem_id:1,
          problem_name:"Prime Number",
          problem_desc:"Given a number, find whether it is prime number or not",
          sample_input:"5",
          sample_output:"Yes",
          date:"3-05-2001"
        },
        {
          problem_id:2,
          problem_name:"Armstrong Number",
          problem_desc:"Given a number, find whether it is armstrong number or not",
          sample_input:"153",
          sample_output:"Yes",
          date:"3-05-2001"
        }
      ],
        students:[]
        }
    ],

    myLabs:[],

    students: [
        {
            student_id:1,
            name: "Kunal Kanotra",
            entry_no: "19BCS047",
            department: "CSE",
            myLabs: [1],
            problems_solved: {
                "1" : [1],
                "2" : [],
                "3" : [],
                "4" : []
            }
        },
        {
            student_id:2,
            name: "Deepdarshan",
            entry_no: "19BCS031",
            department: "CSE",
            myLabs: [],
            problems_solved: {
                "1" : [1],
                "2" : [],
                "3" : [],
                "4" : []
            }
        },
        {
            student_id:3,
            name: "Raman Raj",
            entry_no: "19BCS063",
            department: "CSE",
            myLabs: [],
            problems_solved: {
                "1" : [1],
                "2" : [],
                "3" : [],
                "4" : []
            }
        }

    ]
    
  }



const ROUTES=[];

export const RenderRoutes = ({ routes }) => {

    const [connectedLabDetails,setConnectedLabDetails] = useState(lab_details);

    //console.log("KK",connectedLabDetails)

    var tempRoutes = [
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
            path: "/:problem/:student/:lab/:id",
            key: "PROBLEM",
            exact: true,
            component: ProblemEditor,
            props: {
                connectedLabDetails: connectedLabDetails,
                setConnectedLabDetails: setConnectedLabDetails
            },
            routes: [],
        },
        {
            path: "/teacher-dashboard/*",
            key: "TEACHER-DASHBOARD",
            exact: true,
            component: TeacherDashboard,
            props: {
                connectedLabDetails: connectedLabDetails,
                setConnectedLabDetails: setConnectedLabDetails,
            },
            routes: [],
        },
        {
            path: "/student-dashboard/*",
            key: "STUDENT-DASHBOARD",
            exact: true,
            component: StudentDashboard,
            props: {
                connectedLabDetails: connectedLabDetails,
                setConnectedLabDetails: setConnectedLabDetails,
            },
            routes: [],
        },
    ];

    ROUTES.push(...tempRoutes)
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

export default ROUTES;


