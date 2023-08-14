import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let aboutController = new AbortController();
        const getData = async () => {
            setIsLoading(true);
            setError("")
            setData([])

            try {
                const response = await fetch(url, {
                    signal: aboutController.signal
                })

                if (!response.ok) {
                    throw new Error("Failed fetch")
                }

                const data = await response.json();
                setData(data);

            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        getData()

        return () => {
            aboutController.abort()
        }
    }, [])

    return [data, error, isLoading]
}

export default useFetch