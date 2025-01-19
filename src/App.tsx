import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/Store.ts";
import {AuthLayout} from "./components/AuthLayout.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import {MainLayout} from "./components/MainLayout.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import FieldPage from "./pages/FieldPage.tsx";

function App() {
    const routes = createBrowserRouter(
        [
            {
                path: "/",
                element: <AuthLayout/>,
                children: [
                    {path: "", element: <SignInPage/>},
                    {path:"signup", element:<SignUpPage/>},
                ],
            },
            {
                path: "/",
                element:<MainLayout/>,
                children:[
                    { path: "dashboard", element: <DashboardPage /> },
                    // { path: "crop", element: <CropsPage /> },
                    // { path: "staff", element: <StaffPage /> },
                    { path: "field", element: <FieldPage /> },
                    // { path: "logs", element: <LogsPage /> },
                    // { path: "vehicles", element: <VehiclePage /> },
                    // { path: "equipment", element: <EquipmentPage /> },
                ],
            },
        ]
    );

  return (
    <>
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
    </>
  )
}

export default App
