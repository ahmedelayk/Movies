import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Add from './Components/Add';
import Details from './Components/Details';
import Notfound from './Components/Notfound';

function App() {
    const routers = createBrowserRouter([
        {
            path: '', element: <Layout />, children: [
                { path: 'home', element: <Home /> },
                { path: 'add', element: <Add /> },
                { path: 'movie/:id', element: <Details /> },
                { path: '*', element: <Notfound /> },
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={routers}></RouterProvider>
        </>
    );
}

export default App;
