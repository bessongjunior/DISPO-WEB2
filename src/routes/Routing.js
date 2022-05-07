import React from 'react';
import { BrowserRouter, Routes, Route, Router, Switch } from 'react-router-dom';
import LoginPage from '../views/auth/signin/signin';
import RegistrationPage from '../views/auth/signup/signup';
import HomePage from '../views/pages/home';
import AboutPage from '../views/pages/about';
import ServicesPage from '../views/pages/services';
import ContactPage from '../views/pages/contact';
import ResetRequest from '../views/Reset_password/reset_request';
import ResetToken from '../views/Reset_password/reset_token';
import SettingsPage from '../views/dashboard/dashboard/settings';
import StatsPage from '../views/dashboard/dashboard/stats';
import AccountPage from '../views/dashboard/dashboard/accounts';
import AssignPage from '../views/dashboard/dashboard/Assign';
import DashboardPage from '../views/dashboard/dashboard/dashboard';

const RoutingPage = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<HomePage />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/about-us' element={<AboutPage />} />
                <Route path='/contact-us' element={<ContactPage />} />

{/* Require signin info */}
                <Route path='/authentication/login' element={<LoginPage />} />
                <Route path='/authentication/register' element={<RegistrationPage />} />

{/* Reset password  */}
                <Route path='/reset_password/reset_request' element={<ResetRequest />} />
                <Route path='/reset_password/reset_token' element={<ResetToken />} />  

{/* Dashboard Pages info here */}
                <Route path='/admin/dashboard' element={<DashboardPage />} />
                <Route path='/admin/settings' element={<SettingsPage />} />
                <Route path='/admin/statistics' element={<StatsPage />} />
                <Route path='/admin/account' element={<AccountPage />} />
                <Route path='/admin/asign-collector' element={<AssignPage />} />
                {/* <Route path='/' element={< />} /> */}

            </Routes>
        
        </BrowserRouter>
     );
}
 
export default RoutingPage;