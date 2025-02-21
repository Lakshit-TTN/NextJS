import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Custom404() {

    const [timer, setTimer] = useState<number>(5);
    const router = useRouter();

    useEffect(() => {
        const intervalToken = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalToken);
                    router.push("/");
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalToken);
    });

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-bold text-red-600">404</h1>
            <p className="text-xl mt-4">Oops! The page youre looking for doest exist.</p>
            <p className="text-xl mt-4">Redirecting in {timer}</p>
        </div>
    );
}
