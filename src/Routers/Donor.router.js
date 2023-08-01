import { lazy, Suspense } from "react";

const DonorHome = lazy(() => import("../Views/Donor/Donor.jsx"));

export const DonorRouter = [
  {
    path: "/donor/home",
    name: "DonorHome",
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <DonorHome />
          </Suspense>
        ),
      },
    ],
  },
];
