"use client";
import React, { useEffect, useState } from "react";

interface AboutInterface {
    id: number;
    title: string;
    description: string;
}

const About: React.FC = () => {
    const [aboutus, setAboutData] = useState<AboutInterface | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/data.json");
                const data = await res.json();
                setAboutData(data.about);
            } catch (error) {
                console.error("Error fetching about data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="text-center">
            {aboutus ? (
                <div>
                    <h2 className="text-lg font-semibold mt-3">{aboutus.title}</h2>
                    <p className="text-gray-600 text-sm">{aboutus.description}</p>
                </div>
            ) : (
                <p>Not Found</p>
            )}
        </div>
    );
};

export default About;
