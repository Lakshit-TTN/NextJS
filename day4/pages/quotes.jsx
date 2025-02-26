import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuotes } from "../redux/quoteReducer";

export default function Quotes() {

  const dispatch = useDispatch();//we need to use useDispatch hook here 
  const quotes  = useSelector((state) => state.quotes.quotes);//to extract the state from the slice

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data =  await response.json();
        dispatch(setQuotes(data.quotes)); 
      } catch (err) {
        console.log("Failed to fetch quotes");
      }
    };
    fetchQuotes();
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Quotes</h1>
      <ul className="space-y-4">
        {quotes?.map((quote) => (
          <li key={quote.id} className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="text-lg">"{quote.quote}"</p>
            <p className="text-sm text-gray-600">- {quote.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
