import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const SignInComponent = lazy(() => import('../components/auth/SignIn'));
const DashboardComponent = lazy(() => import('../components/dashboard/Dashboard'));
const ReservationComponent = lazy(() => import('../components/reservations/ReservationList'));
const ReservationDetail = lazy(() => import ('../components/reservations/ReservationDetail'));

export default function Routing() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route exact path={`/`} element={<SignInComponent />} />
                <Route exact path={'/dashboard'} element={<PrivateRoute><DashboardComponent /></PrivateRoute>} />
                <Route exact path={'/reservations'} element={<PrivateRoute><ReservationComponent /></PrivateRoute>} />
                <Route exact path={'/reservations/:Id'} element={<PrivateRoute><ReservationDetail /></PrivateRoute>} />
            </Routes>
        </Suspense>
    )
}