document.addEventListener("DOMContentLoaded", function () {
    const OPENROUTER_API_KEY = "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"; 
    const BASE_URL = "https://openrouter.ai/api/v1";
    let conversationHistory = [];

    async function sendMessage(message) {
        conversationHistory.push({ role: "user", content: message });

        try {
            const response = await fetch(`${BASE_URL}/chat/completions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Title": "https://your-site-url.com", // Optional. Replace with your site name.
                    "HTTP-Referer": window.location.href,
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`
                },
                body: JSON.stringify({
                    model: "sophosympatheia/rogue-rose-103b-v0.2:free",
                    messages: conversationHistory
                })
            });

            if (!response.ok) {
                throw new Error(`Failed to get response from API: ${response.statusText}`);
            }

            const responseBody = await response.json();
            const botMessage = responseBody.choices[0].message.content;
            addMessage("bot", botMessage);
            conversationHistory.push({ role: "assistant", content: botMessage });
        } catch (error) {
            console.error("Error:", error);
            addMessage("bot", "Sorry, I encountered an issue processing your request.");
        }
    }

    function addMessage(role, message) {
        let messageElem = `<div class="message ${role === "user" ? "user-message" : "bot-message"}">${message}</div>`;
        $("#messages").append(messageElem).scrollTop($("#messages")[0].scrollHeight);
    }

    $("#send-button").click(function () {
        let userInput = $("#user-input").val().trim();
        if (userInput !== "") {
            addMessage("user", userInput);
            $("#user-input").val("");
            sendMessage(userInput);
        }
    });

    $("#user-input").keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#send-button").click();
        }
    });
});
