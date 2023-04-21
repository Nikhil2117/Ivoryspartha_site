import React from "react";
import ReactDOM from "react-dom/client";
import makeServer from "./server/server";
import { RouterProvider,createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/host/HostVans";
import HostVanDetails from "./pages/host/HostVanDetails";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostCaterersDetails from "./pages/host/HostCaterersDetails";
import HostCaterersPricing from "./pages/host/HostCaterersPricing";
import HostCaterersPhotos from "./pages/host/HostCaterersPhotos";
import HostCatererssInfo from "./pages/host/HostCatererssInfo";
import HostPhotographer from "./pages/host/HostPhotographer";
import HostPhotographerDetails from "./pages/host/HostPhotographerDetails";
import HostPhotographersPricing from "./pages/host/HostPhotographersPricing";
import HostPhotographerPhotos from "./pages/host/HostPhotographerPhotos";
import HostPhotographerInfo from "./pages/host/HostPhotographerInfo";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/host/Dashboard";
// import Form from "./pages/Form";
import Formnew, { action } from "./pages/Formnew";
import NotFound from './pages/NotFound'

makeServer();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<About />} />
      <Route path="about" element={<Home />} />
      {/* <Route path="form" element={<Form-new />} /> */}
      <Route path="vans" element={<Vans />} />
      <Route path="forms" element={<Formnew />} action={action}/>
      <Route path="vans/:id" element={<VanDetail />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path=":id" element={<HostCaterersDetails />}>
          <Route index element={<HostCatererssInfo />} />
          <Route path="pricing" element={<HostCaterersPricing />} />
          <Route path="photos" element={<HostCaterersPhotos />} />
        </Route>
        <Route path="income" element={<HostPhotographer />} />
        <Route path="income/:id" element={<HostPhotographerDetails />}>
          <Route index element={<HostPhotographerInfo />} />
          <Route path="pricing" element={<HostPhotographersPricing />} />
          <Route path="photos" element={<HostPhotographerPhotos />} />
        </Route>
        
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
