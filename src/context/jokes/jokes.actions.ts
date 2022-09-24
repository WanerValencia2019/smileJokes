import axios from "axios"
axios.defaults.baseURL = `https://smilejokefunctions.netlify.app/.netlify/functions`

export const handleGetNewJoke = async (token: string) => {
    const url = "/getNewJoke"
    return await axios.get(url, {
        headers: {
            "Authorization": token,
            'Content-Type': 'application/json'
        }
    })
}

export const handleGetMyJokes = async (token: string) => {
    const url = "/my-jokes"
    return await axios.get(url, {
        headers: {
            "Authorization": token,
            'Content-Type': 'application/json'
        }
    })
}

export const handlecreateJoke = async (token: string, value: string, icon_url: string) => {
    const url = "/add-new-joke"
    const data = {
        value,
        icon_url
    }
    return await axios.post(url,data, {
        headers: {
            "Authorization": token,
            'Content-Type': 'application/json'
        }
    })
} 


export const handleRemoveJoke = async (token: string, jokeId: string) => {
    const url = `/remove-joke?id=${jokeId}`
    
    return await axios.delete(url, {
        headers: {
            "Authorization": token,
            'Content-Type': 'application/json'
        }
    })
} 