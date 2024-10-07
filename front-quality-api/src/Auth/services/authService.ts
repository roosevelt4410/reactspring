import axios from "axios";

export const loginUser = async ({username, password}:any) => {
    try {
        return await axios.post('http://localhost:8080/login', {
        /* return await axios.post('http://localhost:8080/apitestswagger-0.0.1/login', { */
            username,
            password,
        });
    } catch (error) {
        throw error;
    }
}