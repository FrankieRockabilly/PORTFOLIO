import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout";
import HomePage from "../Pages/HomePage";


const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <MainLayout />, // Gunakan layout utama
    children: [
      {
        path: '', // Halaman utama
        element: <HomePage />
      }
    ]
  }
]);

export default router;
