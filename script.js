const div = document.getElementById("div1");


async function getData() {
    try {
        const response = await fetch("http://api.weatherapi.com/v1/current.json?key=237cd11433d1446a9bf220653262801&q=London&aqi=yes");
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error("error", error);
        
    }
}

getData();
div.textContent(data);
