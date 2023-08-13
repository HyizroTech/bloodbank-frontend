import { lazy, Suspense } from "react";
const RegisterDonor = lazy(() => import("../Views/Register/RegisterDonor"));
const RegisterBloodBank = lazy(() =>
  import("../Views/Register/RegisterBloodBank")
);

export const RegisterRouter = [
  {
    path: "/register/donor",
    name: "RegisterDonor",
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <RegisterDonor />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/register/bloodbank",
    name: "RegisterBloodBank",
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <RegisterBloodBank />
          </Suspense>
        ),
      },
    ],
  },
];
