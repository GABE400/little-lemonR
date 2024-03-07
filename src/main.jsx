import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./index.css";
import Home from "./routes/HomePage/Home.jsx";
import Layout from "./Layout";
import BookingPage from "./routes/BookingPage/BookingPage";
import SuccessPage from "./components/pages/SuccessPage";
import BookForm from "./components/Form/BookForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='booking-page' element={<BookingPage />} />
      <Route path='success' element={<SuccessPage />} />
      <Route path='book-form' element={<BookForm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
