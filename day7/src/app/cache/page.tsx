export default async function FetchLogger() {
    console.log("Rendering FetchLogger component");
      interface Todo {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }
  
    const start1 = performance.now();
    const res1 = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      cache: "force-cache",
    });
    const data1: Todo = await res1.json();
    const duration1 = performance.now() - start1;
    console.log("Fetched with force-cache:", data1, `in ${duration1.toFixed(2)} ms`);
  
  
    const start2 = performance.now();
    const res2 = await fetch("https://jsonplaceholder.typicode.com/todos/2", {
      cache: "no-store",
    });
    const data2: Todo = await res2.json();
    const duration2 = performance.now() - start2;
    console.log("Fetched with no-store:", data2, `in ${duration2.toFixed(2)} ms`);
  
    return (
      <div>
        <h2>Fetch Logger Component</h2>
      </div>
    );
  }
  