import { useEffect, useState } from "react";

function App() {
    // const [count, setCount] = useState(0)
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products").then((result) => {
            result.json().then((resp) => {
                // console.log("result", resp);
                setData(resp);
            })
        })
    }, []);
    console.log(data)

    return (
        <table>
            <tr>
                <td>Limit:{data.limit}</td>
                {/* <td>Data: {data.products.title}</td> */}
            </tr>

        </table>
    )
}

export default comp;