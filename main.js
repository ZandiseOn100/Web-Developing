const btn = document.getElementById("btn");
const joke = document.getElementById("joke");

const apiKey = "saQSqjgZXiG7b/SjAQF/dA==jxF8UIS0WKWRDUjW";

const options = {
    method: "GET",
    headers: { 
        "X-Api-Key": apiKey,
    },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke(){
    try {

        joke.innerText = "Loading....";
        btn.disabled = true;
        btn.innerText = "Updating...";
        const response = await fetch(apiUrl, options)
        const data = await response.json()
        btn.disabled = false;
        btn.innerText = "Tell Me A Joke";
        joke.innerText = data[0].joke; 
        
    } catch (error) {
        joke.innerText = "An error occured, try again later";
        console.log(error);
    }
}
btn.addEventListener("click", getJoke);