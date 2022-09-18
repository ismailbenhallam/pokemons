import axios from "axios";

const apiFetch = async <T>(url: string) => {
    const response = await axios.get<T>(url)
    return response.data
}

export default apiFetch