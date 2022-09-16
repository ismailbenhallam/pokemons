import axios from "axios";

const apiFetch = async <T>(url: string) => {
    try {
        const response = await axios.get<T>(url)
        const data = response.data
        return {
            data, error: null
        }
    } catch (error) {
        return {data: null, error: error as Error}
    }
}

export default apiFetch