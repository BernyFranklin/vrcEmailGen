document
   .getElementById("emailForm")
   .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from performing normal submit

      // Variables to use for content of the email
      const firstName = document.getElementById("firstName").value.trim();
      const studentID = document.getElementById("studentID").value.trim();

      const hour = new Date().getHours(); // Gets current hour for proper greeting
      let greeting;
      if (hour >= 5 && hour < 12) {
         greeting = "morning";
      } else if (hour >= 12 && hour < 17) {
         greeting = "afternoon";
      } else {
         greeting = "evening";
      }

      const introduction = `Good ${greeting} ${firstName} (Student ID: ${studentID}),\nThank you for contacting the Veteran's Resource Center at Fresno State! Here is the information we discussed earlier:`;

      let body = "";
      const options = [
         { id: "option1", text: "CalVet Text." },
         { id: "option2", text: "Chapter 30 Text." },
         { id: "option3", text: "Chapter 31 Text." },
         { id: "option4", text: "Chapter 33 Text." },
         { id: "option5", text: "Chapter 35 Text." },
         { id: "option6", text: "Chapter 1606 Text." },
         { id: "option7", text: "Military TA Text." },
         { id: "option8", text: "VNB Text." },
      ];

      options.forEach((option) => {
         const element = document.getElementById(option.id);
         if (element && element.checked) {
            body += "\n\n" + option.text;
         }
      });

      const conclusion =
         "\n\nIf you have any further questions, feel free to email us directly or stop by our office at University Center Suite 101.\n\nBest Regards,";

      // Build the email
      const email = `${introduction}${body}${conclusion}`;
      // Encode the email
      const encodedEmail = encodeURIComponent(email);
      // Redirect to preview page
      window.location.href = `emailPreview.html?email=${encodedEmail}`;

      console.log(email);
   });
