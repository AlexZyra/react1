import useFetch from '../hooks/useFetch'

const Users = () => {

    const [data, error, isLoading] = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <div>
            <h1>Users</h1>
            {error && <h2>{error}</h2>}
            {isLoading && <h1>Loading ...</h1>}
            <ul>
                {data.length > 0 && data.map((users) => <li key={users.id}>
                    {users.name}
                </li>)}
            </ul>
        </div>
    )
}

export default Users