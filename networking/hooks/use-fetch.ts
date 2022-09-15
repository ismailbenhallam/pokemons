import axios from "axios";
import {useEffect, useState} from "react";

const useFetch = async <T>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const fetch = async () => {
        try {
            const response = await axios.get<T>(url)
            setData(response.data)
        } catch (error) {
            setError(error as Error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return {data, isLoading, error}
}

export default useFetch