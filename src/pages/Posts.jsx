// import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Posts = () => {
    const [data, error, isLoading] = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
        <div >
            <h2>Posts page</h2>
            {error && <h2>{error}</h2>}
            {isLoading && <h1>Loading ...</h1>}

            <ul className="ul">
                {data &&
                    data.map(post => 
                        <li key={post.id}>
                            {/* <Link className="post-title" to={`/products/${post.id}`}>{post.title}</Link> */}
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </li>
                    )}
            </ul>

        </div>
    )
}

export default Posts