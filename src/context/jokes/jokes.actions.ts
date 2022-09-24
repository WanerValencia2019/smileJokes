import axios from "axios"
axios.defaults.baseURL = `https://smilejokefunctions.netlify.app/api`

export const handleGetNewJoke = async (token: string) => {
    const url = "/getNewJoke?token=" + token
    return await axios.get(url, {
        headers: {
            // "Authorization": token,
            'Content-Type': 'application/json'
        }
    })
}

export const handlecreateJoke = async (token: string, value: string, icon_url: string) => {
    const url = "/add-new-joke?token=" + token
    const data = {
        value,
        icon_url
    }
    return await axios.post(url,data, {
        headers: {
            // "Authorization": token,
            'Content-Type': 'application/json'
        }
    })
} 