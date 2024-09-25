import axios from "axios";

export const loginUser = async ({username, password}:any) => {
    try {
        return await axios.post('http://localhost:8080/login', {
            username,
            password,
        });
    } catch (error) {
        throw error;
    }
}