function SendData(data) {
    try {
        let status;
        fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).then(status = true);
    }
    catch (error) {
        console.log(error);
        return false;
    }
    return status;
}