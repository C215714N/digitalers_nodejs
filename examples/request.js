export const request = async (formData) => {
    try {
        const response = await fetch("/validate.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}