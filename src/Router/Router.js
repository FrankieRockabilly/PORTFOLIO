import { createBrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import MainLayout from "../Component/MainLayout";
import HomePage from "../Pages/HomePage";

// Inisialisasi Google Analytics dari .env
const trackingId = process.env.REACT_APP_GA_TRACKING_ID;
if (trackingId) {
  ReactGA.initialize(trackingId);
} else {
  console.warn("Google Analytics Tracking ID tidak ditemukan di .env");
}

// Fungsi untuk Melacak Perubahan Halaman
const TrackPageView = () => {
  const location = useLocation(); // Gunakan useLocation untuk melacak perubahan rute

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]); // useEffect berjalan setiap kali rute berubah

  return null;
};

// Router dengan TrackPageView di MainLayout agar bekerja di semua halaman
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <TrackPageView /> {/* Memantau perubahan halaman */}
      </MainLayout>
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
