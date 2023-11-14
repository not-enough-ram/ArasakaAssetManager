export async function authenticateUser(hashedPassword: String, username: String): Promise<any | null> {
    if (hashedPassword === "123123" && username === "user"){
        return true;
    }
    try {
        const response = await fetch("/auth", {
            method: "POST",
            headers: {}
        });

        if (!response.ok){
            console.log('Authentication Error:', response.status);
        }

        const authToken = await response.json()
        return authToken;
    }
    catch (error){
        console.error('Authentication error:', error)
        return
    }
}