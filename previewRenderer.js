const params = new URLSearchParams(window.location.search);
const email = params.get("email");

if (email) {
    document.getElementById("emailOutput").innerHTML = `<pre>${email}</pre>`;
} else {
    document.getElementById("emailOutput").textContent = "No email content found.";
}