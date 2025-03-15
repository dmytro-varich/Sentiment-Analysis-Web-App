document.addEventListener("DOMContentLoaded", function () {
    const colors = ["#f2f2f2", "#ecdcfc", "#fcdcdc", "#dcf2fc ", "#dcfcdf", "#fefecd", "#fcf4dc"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".main-container").style.backgroundColor = randomColor;
});

const textarea = document.getElementById("textInput");

textarea.addEventListener("input", () => {
    textarea.style.height = "auto"; 
    textarea.style.height = `${textarea.scrollHeight - 20}px`;
});

document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('touchstart', () => {
      btn.classList.add('active');
    });
    btn.addEventListener('touchend', () => {
      btn.classList.remove('active');
    });
  });

// Get the backend URL from the environment variable
const backendUrl = window.BACKEND_URL || "http://localhost:8000/analyze";
console.log("Backend URL:", backendUrl);
window.analyzeText = async function() {
    console.log("Analyzing text...");
    const text = document.getElementById("textInput").value;
    if (!text) {
        alert("Enter the text!");
        return;
    }
    console.log("Text:", text);

    try {
        const response = await fetch(`${backendUrl}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });

        if (!response.ok) {
            throw new Error("Server response was not ok");
        }
        
        const data = await response.json();
        console.log("Result:", data);
        const positive_emoji = document.getElementById("positive-emoji");
        const negative_emoji = document.getElementById("negative-emoji");
        const neutral_emoji = document.getElementById("neutral-emoji");
        if (data.sentiment === "positive") {
            positive_emoji.style.opacity = 1.0;
            positive_emoji.style.fontSize = "70px";
            negative_emoji.style.opacity = 0.5;
            negative_emoji.style.fontSize = "50px";
            neutral_emoji.style.opacity = 0.5;
            neutral_emoji.style.fontSize = "50px";
        } else if (data.sentiment === "negative") {
            negative_emoji.style.opacity = 1.0;
            negative_emoji.style.fontSize = "70px";
            positive_emoji.style.opacity = 0.5;
            positive_emoji.style.fontSize = "50px";
            neutral_emoji.style.opacity = 0.5;
            neutral_emoji.style.fontSize = "50px";
        } else {
            neutral_emoji.style.opacity = 1.0;
            neutral_emoji.style.fontSize = "70px";
            positive_emoji.style.opacity = 0.5;
            positive_emoji.style.fontSize = "50px";
            negative_emoji.style.opacity = 0.5;
            negative_emoji.style.fontSize = "50px";
        }

    } catch (error) {
        console.error("Error occurred while analyzing text:", error);
        alert("There was an error with the request. Please try again.");
    }
}