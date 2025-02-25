import { useReducer } from "react"

// export default function Home() {
//     const [val,setVal]=useState(0);
//     return(
//         <div>
//             <br />
//             {val}
//             <button onClick={()=>setVal(8)}>add</button>
//             <br />
//             {val}
//             <button onClick={()=>setVal(9)}>sub</button>
//         </div>
//     )
// }


//takes state and action
function reducer(state: { val1: number; val2: number }, action: { type: string }) 
{
    switch (action.type) {
        case "add":
            return { val1: 10, val2: state.val2 };
        case "sub":
            return { val1: state.val1, val2: 6 };
        default:
            return state;
    }
}
export default function Home() {
    const [val, dispatch] = useReducer(reducer, { val1: 0, val2: 0 });
    return (
        <div>
            <h1>useReducer</h1>
            <br />
            {val.val1}
            <button onClick={() => dispatch({ type: "add" })}>add</button>
            <br />
            {val.val2}
            <button onClick={() => dispatch({ type: "sub" })}>sub</button>
        </div>
    )
}