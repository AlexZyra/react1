import { useEffect, useState } from "react";

const List = () => {
    // const { items } = props;
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const getProducts = async () => {
            try {
                setError("");
                setIsLoading(true);

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed :(");
                }

                const data = await response.json();
                setProducts(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        }

        getProducts()
    }, [])

    return (
        <div>
            {error && <h1>{error}</h1>}
            {isLoading && <h1>Loading</h1>}
            {/* <div className="spinner"></div> */}
            <ul className="ul">
                {/* {items.map((i) => (
                <li>{i}</li>
            ))} */}
                {products.length > 0 &&
                    products.map(i => <li key={i.id}>{i.name}</li>)}

            </ul>
        </div>

    )
}

export default List