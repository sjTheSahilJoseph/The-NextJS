"use client";

// As we do in native react component, we use useEffect for side effect.
// And useState for state variable.

import { useEffect, useState } from "react";


// Fetch data in client component.

function Data() {

    const [product, setProduct] = useState([]);

    useEffect(() => {

        let url = 'https://jsonplaceholder.typicode.com/posts';

        async function FetchData(url) {
            let data = await fetch(url);

            data = await data.json();

            setProduct(data);
        }

        FetchData(url);

    }, []);


    return (
        <>
            <div className="container">Data</div>
        {
            product?.map((p)=>{
                return <>
                    <div key={p.id}>
                    <h1>by {p.userId}</h1>
                    <h1>Title: {p.title}</h1>
                    <h1>Body: {p.body}</h1>
                    </div>
                </>
            })
        }
        </>
    );

}

export default Data;
