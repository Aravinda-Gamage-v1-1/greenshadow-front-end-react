import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/Store.ts";
import {AuthLayout} from "./components/AuthLayout.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";

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
