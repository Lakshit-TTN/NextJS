"use client"
import { LoadingContext } from "@/provider/loadingProvider";
import { useContext, useEffect, useReducer, useState } from "react"


interface Product {
    id: number;
    name: string;
}
type State = {
    products: Product[];
    // loading: boolean;
};
type Action =
    { type: "add"; payload: Product } | { type: "get"; payload: Product[] } | { type: "delete"; payload: number }

const initialValue: State = {
    products: [],
    // loading: true,
};

//we pass state and action in our reducer fn
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "add":
            return { ...state, products: [...state.products, action.payload] };
        case "get":
            return {
                ...state,
                // loading: false,
                products: action.payload,
            }
        case "delete":
            return { ...state, products: state.products.filter((p) => p.id !== action.payload) };
        default:
            return state
    }
}

const ProductReducer: React.FC = () => {
    //it thas a state var and dispatch fn 
    const [state, dispatch] = useReducer(reducer, initialValue);
    const { loading, setLoading } = useContext(LoadingContext);
    const [productName, setProductName] = useState("");
    useEffect(() => {
        const fetchProd = async () => {
            try {
                setLoading(true);
                const res = await fetch('/api/products');
                const data: Product[] = await res.json();
                dispatch({ type: "get", payload: data })
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false)
            }
        }
        fetchProd()
    }, [setLoading])

    const handleDel = (id: number) => {
        dispatch({ type: "delete", payload: id });
    }
    const handleAdd = () => {
        const newProd = { id: Date.now(), name: productName };//we have added predefined product here : we can use an input and add the following 
        dispatch({ type: "add", payload: newProd });
        setProductName("");
    }
    return (
        <div>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter product name" />
        <button onClick={handleAdd}>Add</button>
        {loading ? <p>Loading...</p> :
            <ul>
                {state.products.map((p) => (
                    <li key={p.id}>{p.name} <button onClick={() => handleDel(p.id)}>Delete</button></li>
                ))}
            </ul>
        }
    </div>
    )
}
export default ProductReducer;