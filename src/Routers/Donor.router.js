import { lazy, Suspense } from "react";

const DonorHome = lazy(() => import("../Views/Donor/Donor.jsx"));
const AllBloodBanks = lazy(() =>
  import("../Views/Donor/components/BloodBanks.jsx")
);

export const DonorRouter = [
  {
    path: "/donor",
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
      {
        path: "findbloodbanks",
        element: (
          <Suspense>
            <AllBloodBanks />
          </Suspense>
        ),
      },
    ],
  },
];
