import './App.css';
import LoginPage from './pages/login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfilePage from './pages/profile/Profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />
    }, 
    {
        path: '/profile',
        element: <ProfilePage />
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
