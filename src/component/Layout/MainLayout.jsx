import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <FooterLink></FooterLink>
        </div>
    );
};

export default MainLayout;