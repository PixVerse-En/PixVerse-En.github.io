"use strict;";

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".contact-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        alert("Some of the fields are missing!");
        return;
      }

      const payload = {
        name: name,
        email: email,
        message: message,
      };

      try {
        const response = await fetch(
          "https://narutoiiia.pythonanywhere.com/send_webhook",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (response.ok) {
          alert("Message sent successfully!");
          nameInput.value = "";
          emailInput.value = "";
          messageInput.value = "";
        } else {
          alert("Error sending message. Please try again later.");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        alert("Error sending message. Please try again later.");
      }
    });
});
