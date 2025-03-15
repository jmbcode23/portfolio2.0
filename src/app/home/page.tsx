"use client";

import React from 'react';
import Background from '@/components/page-components/Background';
import { FloatingDockDemo } from '@/components/page-components/Navbar';
import Experience from '@/components/page-components/Experience';
import Grid from '@/components/page-components/Grid';
import Footer from '@/components/page-components/Footer';
import Hero from '@/components/page-components/Hero';
import Hobbies from '@/components/page-components/Hobbies';

const HomePage: React.FC = () => {

    return (
        <main className="">
            {/* <Background> */}
            <div className='flex flex-col items-center justify-center h-full p-3'>
                <FloatingDockDemo />
                <Hero />
                <Grid />
                <Experience />
                {/* <Hobbies /> */}
                <Footer />
            </div>
            {/* </Background> */}
        </main>
    );
};

export default HomePage;