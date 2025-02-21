"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
interface AboutInterface {
    id: number;
    name: string;
    position: string;
    bio: string;
}
const AboutId = () => {
    const router = useRouter();
    const { id } = router.query;
    const [aboutus, setAboutData] = useState<AboutInterface>();
    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const res = await fetch('/data.json');
                const data = await res.json();
                const empByID = data.about.team.find((emp: AboutInterface) => emp.id === Number(id));
                setAboutData(empByID);
            } catch (error) {
                console.error("Error fetching emp:", error);
            }
        };
        fetchProduct();
    }, [id]);
    return (
        <div className="text-center">
            {aboutus ? (
                <div>
                    <h2 className="text-lg font-semibold mt-3">{aboutus.name}</h2>
                    <p className="text-gray-600 text-sm">{aboutus.position}</p>
                    <p className="text-gray-600 text-sm">{aboutus.bio}</p>
                </div>
            ) : (
                <p>Not found</p>
            )}
        </div>
    );
};

export default AboutId;
