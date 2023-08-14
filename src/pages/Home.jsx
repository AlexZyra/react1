import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Product from "../components/Product";

const Home = () => {

    // const [data, error, isLoading] = useFetch('https://jsonplaceholder.typicode.com/todos')

    // return (
    //     <div>
    //         <h1>Todos</h1>
    //         {error && <h2>{error}</h2>}
    //         {isLoading && <h1>Loading ...</h1>}
    //         <ul>
    //             {data.length > 0 && data.map((users) => <li key={users.id}>
    //                 {users.title}
    //             </li>)}
    //         </ul>
    //     </div>
    // )

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch(
                    'https://64c63c060a25021fde916f9e.mockapi.io/catalogue'
                );
                if (!response.ok) {
                    throw new Error('Failed fetch data')
                }
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchAllProducts()
    }, [])
    return (
        <>
            <div className="products__list">
                {products.length > 0 && products.map(p => <Product product = {p} />)}
            </div>
        </>
    )
}

export default Home