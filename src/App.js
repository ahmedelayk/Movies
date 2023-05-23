import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import Layout from './Components/Layout';
// import Home from './Components/Home';
// import Add from './Components/Add';
// import Details from './Components/Details';
// import Notfound from './Components/Notfound';
import MainContext from './Contexts/mainContext';

// const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('./Components/Home'));
const Add = lazy(() => import('./Components/Add'));
const Details = lazy(() => import('./Components/Details'));
const Notfound = lazy(() => import('./Components/Notfound'));

function App() {
    const routers = createBrowserRouter([
        {
            path: '', element: <Layout />, children: [
                { index: true, element: <Home /> },
                { path: 'add', element: <Add /> },
                { path: 'movie/:id', element: <Details /> },
                { path: '*', element: <Notfound /> },
            ]
        }
    ])
    return (
        <>
            <Suspense fallback={<h3>Loading ....</h3>}>
                <MainContext>
                    <RouterProvider router={routers}></RouterProvider>
                </MainContext>
            </Suspense>
        </>
    );
}

export default App;
