console.log("JavaScript is running");

let c = document.createElement('div');
document.body.appendChild(c);

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showDots(duration) {
    let dots = "";
    const interval = 400; 
    const endTime = Date.now() + duration;

    while (Date.now() < endTime) {
        dots = dots.length < 3 ? dots + "." : ""; 
        c.innerHTML = c.innerHTML.replace(/\.*$/, "") + dots;
        await wait(interval);
    }

    c.innerHTML = c.innerHTML.replace(/\.*$/, "") + "...";
}

async function displayMessages() {
    c.innerHTML += "Initializing Hacking";
    await showDots(2000); 
    c.innerHTML += "<br>";

    c.innerHTML += "Reading Your Files";
    await showDots(3000); 
    c.innerHTML += "<br>";

    c.innerHTML += "Password File Detected";
    await showDots(4000);
    c.innerHTML += "<br>"; 

    c.innerHTML += "Sending All Passwords & Personal Files To Server";
    await showDots(5000); 
    c.innerHTML += "<br>";

    c.innerHTML += "Cleaning Up";
    await showDots(6000); 
    c.innerHTML += "<br>";

    c.innerHTML += "Done!";
}

displayMessages();