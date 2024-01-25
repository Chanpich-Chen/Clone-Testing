import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./Layout/Sidebar.jsx";
import LogInPage from "./Pages/auth/LogInPage.Jsx";
import Dashboard from "./Components/Dashboard.jsx";
import SearchBar from "./Components/ManageEmployee/SearchBar.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import BasicInfo from "./Components/AddEmployee/Indicator/BasicInfo.jsx";
import Steppers from "./Components/AddEmployee/Indicator/Steppers.jsx";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/manageEmployee",
        element: <SearchBar />,
        
      },
      
      {
        path:"/basicInfo",
        element:<BasicInfo/>
      },

      {
         path:"/steppers",
         element: <Steppers/>
      },
     
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/** provider of redux*/}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
  
);
