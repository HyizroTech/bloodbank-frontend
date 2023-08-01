import { lazy, Suspense } from "react";

const BloodBankHome = lazy(() => import("../Views/BloodBank/BloodBank.jsx"));

export const BloodBankRouter = [
  {
    path: "/bloodbank/home",
    name: "BloodBankHome",
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <BloodBankHome />
          </Suspense>
        ),
      },
    ],
  },
];
