import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import MyJokes from '../pages/myJokes';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
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
