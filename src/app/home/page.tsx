"use client";

import React, { useEffect, useState } from 'react';
// import Background from '@/components/page-components/Background';
import { FloatingDockDemo } from '@/components/page-components/Navbar';
import Experience from '@/components/page-components/Experience';
import Grid from '@/components/page-components/Grid';
import Footer from '@/components/page-components/Footer';
import Hero from '@/components/page-components/Hero';
// import Hobbies from '@/components/page-components/Hobbies';
import { api } from '../api';
import { addToast } from "@heroui/toast";
import { cn } from '@heroui/theme';

const HomePage: React.FC = () => {
    const [quote, setQuote] = useState("");
    // Function to fetch data from the JSON file
    const fetchQuotes = async () => {
        try {
            const response = await api.get('/quotes.json');
            const quotes = response.data.data;
            // Get the current date
            const today = new Date();
            const startOfYear = new Date(today.getFullYear(), 0, 0); // Jan 1st
            const diff = today.getTime() - startOfYear.getTime();
            const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

            // Select quote based on the day of the year
            const index = dayOfYear % quotes.length; // Cycle through quotes
            const dailyQuote = quotes[index];

            setQuote(dailyQuote.quote);
            return response.data; // Return the JSON data

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            addToast({
                title: "Quote of the Day",
                description: quote,
                timeout: 10000,
                shouldShowTimeoutProgress: true,
                classNames: {
                    base: cn([
                        "bg-default-50 w-1/3 z-1 dark:bg-background shadow-sm",
                    ]),
                }
            });
        }, 5000);

        // Cleanup: Clear the timeout if the component unmounts
        return () => clearTimeout(timeout);
    }, [quote])

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