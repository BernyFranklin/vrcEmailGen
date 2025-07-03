document.addEventListener("DOMContentLoaded", () => {
   const params = new URLSearchParams(window.location.search);
   const email = params.get("email");

   const output = document.getElementById("emailOutput");
   if (email) {
      output.innerHTML = `<div>${email}</div>`;
   } else {
      output.textContent = "No email content found.";
   }

   const copyBtn = document.getElementById("copyBtn");
   if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
         try {
            await navigator.clipboard.write([
               new ClipboardItem({
                  "text/html": new Blob([output.innerHTML], {
                     type: "text/html",
                  }),
                  "text/plain": new Blob([output.innerText], {
                     type: "text/plain",
                  }),
               }),
            ]);
            alert("Email copied to clipboard!");
         } catch (err) {
            console.error("Copy Failed:", err);
            alert("Copy failed. Your browser may not support this feature.");
         }
      });
   }
});
