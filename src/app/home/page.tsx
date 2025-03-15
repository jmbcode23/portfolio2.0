"use client";

import React, { useEffect, useState } from 'react';
import Background from '@/components/page-components/Background';
import { FloatingDockDemo } from '@/components/page-components/Navbar';
import Experience from '@/components/page-components/Experience';
import Grid from '@/components/page-components/Grid';
import Footer from '@/components/page-components/Footer';
import Hero from '@/components/page-components/Hero';
import Hobbies from '@/components/page-components/Hobbies';
import { api } from '../api';
import { addToast, ToastProvider } from "@heroui/toast";

const HomePage: React.FC = () => {
    const [quotes, setQuotes] = useState([]);
    // Function to fetch data from the JSON file
    const fetchQuotes = async () => {
        try {
            const response = await api.get('/quotes.json');
            setQuotes(response.data.data);
            return response.data; // Return the JSON data

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchQuotes();
        addToast({
            title: "Quote of the Day",
            description: "quotes[1]?.quote",
            timeout: 10000,
            shouldShowTimeoutProgress: true,
        });
    }, [])

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