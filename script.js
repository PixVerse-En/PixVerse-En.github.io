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
        embeds: [
          {
            title: "New Message",
            description: message,
            fields: [
              {
                name: "Name",
                value: name,
                inline: true,
              },
              {
                name: "Email",
                value: email,
                inline: true,
              },
            ],
            color: 0x00ff00,
          },
        ],
      };
      // There is no purpose in spamming this webhook.
      try {
        await fetch(
          "https://discord.com/api/webhooks/1225775455685312533/Tg3rTfqC9Ah5xed5UyF8TZ2mOneQrRjV9iHBicU1ST5v3JDEYGXjNaJm8nz8inailgph",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        alert("Message sent successfully!");

        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
      } catch (error) {
        console.error("Error sending message:", error);
        alert("Error sending message. Please try again later.");
      }
    });
});
