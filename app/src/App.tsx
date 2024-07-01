import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login/Login';
import ProfilePage from './pages/profile/Profile';
import HomePage from './pages/home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />
    }, 
    {
        path: '/profile',
        element: <ProfilePage />
    },
    {
        path: '/home',
        element: <HomePage />
    }
]);

export const App = () => {

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
