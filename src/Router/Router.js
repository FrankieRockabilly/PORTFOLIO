import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout";
import HomePage from "../Pages/HomePage";


// Router dengan TrackPageView di MainLayout agar bekerja di semua halaman
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout />
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
