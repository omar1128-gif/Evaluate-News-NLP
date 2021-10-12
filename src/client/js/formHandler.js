function handleSubmit(event) {
    event.preventDefault();

    document.getElementById("results").innerHTML = "";
    let formText = document.getElementById("url").value;

    if (Client.validateURL(formText)) {
        fetch("http://localhost:8081/evaluate", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: formText }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.hasOwnProperty("error")) {
                    throw Error(res.error);
                }

                Object.keys(res).forEach((key) => {
                    let resultsElement = document.getElementById("results");
                    let p = document.createElement("p");

                    const keyWithTitleCase =
                        key.charAt(0).toUpperCase() + key.slice(1);
                    p.innerHTML = `${keyWithTitleCase}: ${res[key]}`;
                    resultsElement.appendChild(p);
                });
            })
            .catch((err) => {
                // Error coming from the backend

                document.getElementById("results").innerHTML =
                    "Error: " + err.message;
            });
    } else {
        // The entered URL is not a valid URL
        alert("Please enter a valid URL");
    }
}

export { handleSubmit };
