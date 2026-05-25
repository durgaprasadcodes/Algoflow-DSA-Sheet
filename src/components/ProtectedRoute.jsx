
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    const userInfo = localStorage.getItem("user_info");

    if (!userInfo) {
        return <Navigate to="/login" replace />;
    }

    const user = JSON.parse(userInfo);

    return user.isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}