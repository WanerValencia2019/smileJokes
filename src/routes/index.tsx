import React, { useContext } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Loader from '../components/loader';
import loaderContext from '../context/loader/loader.context';
import Home from '../pages/home';
import Login from '../pages/login';
import MyJokes from '../pages/myJokes';
import Register from '../pages/register';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

export default function AppRoutes() {
    const { loading } = useContext(loaderContext);

    return (
        <Router>
           {loading && <Loader />} 
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/verify" element={<Login />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/my-jokes" element={<MyJokes />} />
                </Route>
            </Routes>
        </Router>
    );
}
