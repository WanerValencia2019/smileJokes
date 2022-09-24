import supabaseInstance from "../../helpers/supabaseInstance"

export const handleLogin = async (email: string, password: string) => {
    return await supabaseInstance.auth.signIn({
        email,
        password,
    })
}

export const handleLogout = async () => {
    return await supabaseInstance.auth.signOut();
}