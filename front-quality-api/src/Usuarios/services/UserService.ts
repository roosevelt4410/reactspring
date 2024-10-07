import axios from "axios"

const BASE_URL = 'http://localhost:8080/users'; 
/* const BASE_URL = 'http://localhost:8080/apitestswagger-0.0.1/users'; */
const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-Type": "application/json",
        }
    }
}

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const save = async ({ username, email, password, admin }:any) => {
    try {
        return await axios.post(BASE_URL, {
            username,
            email,
            password,
            admin,
        }, config());
    } catch (error) {
        throw error;
    }
}

export const update = async({ id, username, email, admin }:any) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            username,
            email,
            admin,
        }, config());
    } catch (error) {
        throw error;
    }
}

export const remove = async (id:any) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`, config());
    } catch (error) {
        console.error(error);
    }
}