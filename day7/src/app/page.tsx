"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const Popup = dynamic(() => import("@/components/popup"));

export default function PopupTestPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Pop-up
      </button>
      {isOpen && <Popup onClose={() => setIsOpen(false)} />}
    </div>
  );
}
