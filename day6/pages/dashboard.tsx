"use client";
import { signOut, useSession } from "next-auth/react";
import LoginButton from "./login";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
export default function Dashboard() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      {session ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {userData.map((user) => (
              <div key={user.id} className="border rounded-2xl shadow-lg p-4 max-w-xs bg-white">
                <h2 className="text-lg font-semibold mt-3">{user.name}</h2>
                <p className="text-gray-600 text-sm">{user.username}</p>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </div>
            ))}
          </div>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer mt-4" onClick={() => signOut({ callbackUrl: "/" })}>
            Sign out
          </button>
        </>
      ) : ( <LoginButton />)}
    </div>
  );
}
