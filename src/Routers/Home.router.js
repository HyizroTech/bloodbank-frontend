import { lazy, Suspense } from "react";

const Home = lazy(() => import("../Views/Home/Home.jsx"));

export const HomeRouter = [
  {
    path: "/",
    name: "Home",
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
];
