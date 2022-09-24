import axios from "axios"
axios.defaults.baseURL = `https://smilejokefunctions.netlify.app/.netlify/functions`
export const handleGetNewJoke = async (token: string) => {
    const url = "/getNewJoke"
    return await axios.get(url, {
        headers: {
            "Authorization": token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })    
} 