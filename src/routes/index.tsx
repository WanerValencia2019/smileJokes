import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../pages/login';
import PublicRoute from './publicRoute';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </Router>
    );
}
