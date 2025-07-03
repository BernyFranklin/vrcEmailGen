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

      const introduction = `<p>Good ${greeting} ${firstName} (Student ID: ${studentID}),<br/>Thank you for contacting the Veterans Resource Center at Fresno State! Here is the information we discussed earlier:</p>`;

      let body = "";
      const options = [
         {
            id: "option1",
            text: `<p><b>CalVet Fee Waiver</b><br/>The CalVet Fee Waiver is a California state benefit that waives <i>state tuition</i> for eligible students. It does not cover campus-based fees. To apply, visit your local County Veteran Services Office with the required documentation (see attached checklist). If you've already received your approved CalVet Fee Waiver award letter, you can attach it in your reply to this email, and we will apply it to your student account.</p>`,
         },
         {
            id: "option2",
            text: `<p><b>Chapter 30 - Montgomery G.I. Bill (Active Duty)</b><br/>Chapter 30 provides a monthly stipend while enrolled in school. For eligibility details and current benefit rates, please visit: <a href="https://www.va.gov/education/benefit-rates/montgomery-active-duty-rates" target="_blank" rel="noopener noreferer">https://www.va.gov/education/benefit-rates/montgomery-active-duty-rates</a><br/><br/><b>To Apply for Chapter 30 benefits:</b><ol><li>Go to <a href="https://www.va.gov/education/" target="_blank" rel="noopener noreferer">https://www.va.gov/education/</a></li><li>Click <b>How to Apply for Education Benefits</b></li><li>Scroll to the section titled <b>How Do I Apply?</b></li><li>Click the <b>Apply for Education Benefits</b> button</li><li>Submit VA Form 22-1990 online</li></ol>Once approved, the VA will mail you a <b>Certificate of Eligibility (COE)</b>. Once you have enrolled in your courses, you can upload your documents and certify those courses by logging into your Fresno State Student Center. Follow the step-by-step certification guide (attached), and click the <b>Attachments</b> button to upload both your <b>COE</b> and <b>Birth Certificate</b>.</p>`,
         },
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

      const conclusion = `<p>We also encourage all students to submit a FAFSA application for federal financial aid, as doing so will not impact your monthly VA stipend. Apply here: <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener noreferrer">https://studentaid.gov/h/apply-for-aid/fafsa</a><br/><br/>If you have any further questions, feel free to email us directly or stop by our office at University Center Suite 101.<br/><br/>Best Regards,</p>`;

      // Build the email
      const email = `${introduction}${body}${conclusion}`;
      // Encode the email
      const encodedEmail = encodeURIComponent(email);
      // Redirect to preview page
      window.location.href = `emailPreview.html?email=${encodedEmail}`;

      console.log(email);
   });
