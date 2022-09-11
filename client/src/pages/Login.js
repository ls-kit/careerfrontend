import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import TopHeader from '../components/shared/TopHeader';

const Login = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default Login;