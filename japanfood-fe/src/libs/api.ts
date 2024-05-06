import axios  from 'axios';

interface axiosType{
    endpoint: string,
    method: string,
    headers:any,
    body?: any
}

export async function axiosHttpRequest({endpoint, method, headers, body}: axiosType) {
    try {
        const url = `${import.meta.env.VITE_API_URL}${endpoint}`
        const responseData = await axios({
            method: method,
            url: url,
            headers: headers,
            data: body
        });
        return responseData;
    } catch (error) {
        throw error;
    }
}