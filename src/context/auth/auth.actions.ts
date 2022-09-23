import supabaseInstance from "../../helpers/supabaseInstance"

export const handleLogin = async (email: string, password: string) => {
    return await supabaseInstance.auth.signUp({
        email,
        password,
    })
}