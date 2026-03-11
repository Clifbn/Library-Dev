"use client";

import { motion } from 'motion/react';
import * as React from "react";
import { ShareholderReports, Report } from "@/app/components/ui/carousel";

const booksData: Report[] = [
    {
        id: "book1",
        quarter: "New Arrival",
        period: "Added July 2025",
        imageSrc: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
        isNew: true,
    },
    {
        id: "book2",
        quarter: "Staff Pick",
        period: "Added May 2025",
        imageSrc: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=500&fit=crop",
    },
    {
        id: "book3",
        quarter: "Bestseller",
        period: "Added January 2025",
        imageSrc: "https://images.unsplash.com/photo-1521056787327-165eb2b67af7?w=400&h=500&fit=crop",
    },
    {
        id: "book4",
        quarter: "Classic",
        period: "Added October 2024",
        imageSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop",
    },
    {
        id: "book5",
        quarter: "Featured",
        period: "Added July 2024",
        imageSrc: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=400&h=500&fit=crop",
    },
];

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background image later*/}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/images/Hero-image-bg.png"
                    alt="Library background"
                    className="w-full h-full object-cover opacity-100 -scale-x-100"
                />
                {/* Optional: Add a gradient overlay to blend the image into your off-white color */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FDFAF5]/50" />
            </div>
            {/* Background Abstract Elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path fill="#1E3A8A" d="M45.7,-77.6C58.9,-69.3,69.1,-56.1,76.4,-41.8C83.7,-27.5,88.1,-12,87.4,3.2C86.7,18.4,80.9,33.3,71.8,45.8C62.7,58.3,50.3,68.4,36.4,74.9C22.5,81.4,7.1,84.3,-8.4,83.1C-23.9,81.9,-39.5,76.6,-52.4,67.6C-65.3,58.6,-75.5,45.9,-81.2,31.5C-86.9,17.1,-88.1,1.1,-85.4,-14.2C-82.7,-29.5,-76.1,-44.1,-65.4,-55.1C-54.7,-66.1,-39.9,-73.5,-25.4,-79.1C-10.9,-84.7,3.3,-88.5,18.4,-86.3C33.5,-84.1,49.5,-75.9,45.7,-77.6Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Your Next Great <span className="text-primary italic">Discovery</span> is Waiting.
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                            Unlock a world of knowledge with ScholarStream. Seamlessly access thousands of digital resources and track your physical loans in one scholarly hub.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                    </motion.div>
                </div>
            </div>

            {/* Book Carousel — part of the Hero */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <ShareholderReports
                    reports={booksData}
                    title="Featured Books & Collections"
                    subtitle="Explore our curated library collection"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
