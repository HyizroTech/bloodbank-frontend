import { lazy, Suspense } from "react";

const Login = lazy(() => import("../Views/Login/Login.jsx"));

export const LoginRouter = [
  {
    path: "/login",
    name: "Login",
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
];
