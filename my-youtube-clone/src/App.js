import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import store from "./utils/store";
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([{
    path: '/',
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      }, {
        path: 'watch',
        element: <WatchPage />
      }
    ]
  }])

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>

  );
}

export default App;

