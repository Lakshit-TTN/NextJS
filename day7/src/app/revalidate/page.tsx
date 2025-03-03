"use client";

import { useState } from "react";
import { revalidateCache } from "@/actions/page";

export default function CacheRevalidate() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      next: { tags: ["revalTag"] }, 
    });
    const json = await res.json();
    setData(json);
  }

  return (
    <div>
      <button onClick={fetchData} className="px-4 py-2 bg-green-500 text-white rounded">
        Fetch Data
      </button>
      <button onClick={() => revalidateCache()} className="ml-2 px-4 py-2 bg-red-500 text-white rounded">
        Revalidate Cache
      </button>
      {data && <pre className="mt-4 p-2 border rounded">{JSON.stringify(data)}</pre>}
    </div>
  );
}
