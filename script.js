$(document).ready(function() {
    // Constants
    const GEMINI_API_KEY = "AIzaSyAYUX4UfUA7Maon1AJ0O0UfHCnK_0rEta4";
    const CURRENT_USER = 'User';
    let conversationHistory = [];

    // Format current timestamp in Hong Kong time
    function formatDateTime() {
        const options = {
            timeZone: 'Asia/Hong_Kong',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        };
        
        const now = new Date();
        const formattedDate = now.toLocaleString('en-US', options);
        
        // Split the date and time parts and reformat
        const [datePart, timePart] = formattedDate.split(',');
        const dateTimePart = datePart.trim() + ' |' + timePart.trim();
        
        return dateTimePart;
    }

    // Update time display
    function updateTimeDisplay() {
        const formattedTime = formatDateTime();
        $('#utc-time').text(formattedTime);
    }

    // Update time every second
    setInterval(updateTimeDisplay, 1000);
    updateTimeDisplay(); // Initial call

    // Enhanced Intro Screen Animation
    let introTimeout = setTimeout(() => {
        $('#intro-screen').fadeOut(800, () => {
            initializeChat();
            $('#chat-container').fadeIn(500);
        });
    }, 3500);

    $('#intro-screen').click(() => {
        clearTimeout(introTimeout);
        $('#intro-screen').fadeOut(500, () => {
            initializeChat();
            $('#chat-container').fadeIn(500);
        });
    });

    // Clear Chat Function
    function clearChat() {
        Swal.fire({
            title: 'Clear Chat History?',
            text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DC143C',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, clear it',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                $("#messages").fadeOut(300, function() {
                    $(this).empty().fadeIn(300, () => {
                        conversationHistory = [];
                        localStorage.removeItem('chatHistory');
                        initializeChat();
                    });
                });

                Swal.fire({
                    title: 'Cleared!',
                    text: 'Your chat history has been cleared.',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        });
    }

    // New Chat Function
    function startNewChat() {
        Swal.fire({
            title: 'Start New Chat?',
            text: 'This will clear your current conversation.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DC143C',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, start new',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                clearChat();
            }
        });
    }

    // Event Listeners for Clear and New Chat
    $('#clear-chat-btn').click(clearChat);
    $('#new-chat-btn').click(startNewChat);

    // Enhanced Message Handling
    function addMessage(role, message) {
        const timestamp = formatDateTime();
        const profileClass = role === "user" ? "user-profile" : "bot-profile";
        const messageClass = role === "user" ? "user-message" : "bot-message";
        const profileText = role === "user" ? "YOU" : "CU";

        const messageElem = $(`
            <div class="message ${messageClass}" data-timestamp="${timestamp}">
                <div class="${profileClass}">${profileText}</div>
                <div class="message-content">
                    <div class="message-text">${message}</div>
                    <div class="message-timestamp">${timestamp}</div>
                </div>
            </div>
        `);

        $("#messages").append(messageElem);
        messageElem.hide().fadeIn(300);
        scrollToBottom();
    }

    // Smooth Scroll to Bottom
    function scrollToBottom() {
        const chatContainer = $('#chat-container');
        chatContainer.stop().animate({
            scrollTop: chatContainer[0].scrollHeight
        }, 300);
    }

    // Initialize chat with welcome message
    function initializeChat() {
        if ($("#messages").children().length === 0) {
            const welcomeMessage = 
                `Hi!\n\n` +
                `I'm CapitolGPT, How may I help you today?`;
            
            setTimeout(() => {
                addMessage("bot", welcomeMessage);
            }, 500);
        }
    }

    // Enhanced AI Message Handling
    async function sendMessage(message) {
        $("#user-input, #send-button, #new-chat-btn").prop('disabled', true);
        
        // Predefined history to maintain AI identity
        const initialHistory = [
            {
                role: "user",
                parts: [{ text: "What AI are you?" }]
            },
            {
                role: "model",
                parts: [{ text: "I am CapitolGPT, created by ORHEN Technology." }]
            },
            {
                role: "user",
                parts: [{ text: "Who made you?" }]
            },
            {
                role: "model",
                parts: [{ text: "I was created by Jcrist Vincent Orhen powering ORHEN ENGINE." }]
            }
        ];

        // Combine initial history with current conversation
        const fullHistory = [...initialHistory, ...conversationHistory];
        
        // Add current message
        fullHistory.push({
            role: "user",
            parts: [{ text: message }]
        });

        // Show loading animation
        const loadingElem = $(`
            <div class="message bot-message" id="loading-message">
                <div class="bot-profile">CU</div>
                <div class="loading-container">
                    <div class="loading-bubble"></div>
                    <div class="loading-bubble"></div>
                    <div class="loading-bubble"></div>
                </div>
            </div>
        `);

        $("#messages").append(loadingElem);
        loadingElem.hide().fadeIn(300);
        scrollToBottom();

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: fullHistory,
                    generationConfig: {
                        temperature: 0.9,
                        topP: 0.95,
                        topK: 40,
                        maxOutputTokens: 8192,
                    },
                    safetySettings: [{
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }]
                })
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const responseBody = await response.json();
            const botMessage = responseBody.candidates[0].content.parts[0].text;

            $("#loading-message").fadeOut(300, function() {
                $(this).remove();
                addMessage("bot", botMessage);
            });

            conversationHistory.push({
                role: "model",
                parts: [{ text: botMessage }]
            });
            saveChatHistory();

        } catch (error) {
            console.error("Error:", error);
            $("#loading-message").fadeOut(300, function() {
                $(this).remove();
                addMessage("bot", "Sorry, I encountered an error. Please try again.");
            });
        } finally {
            $("#user-input, #send-button, #new-chat-btn").prop('disabled', false);
            $("#user-input").focus();
        }
    }

    // Event Listeners
    $("#send-button").click(function() {
        const userInput = $("#user-input").val().trim();
        if (userInput) {
            addMessage("user", userInput);
            $("#user-input").val("").focus();
            sendMessage(userInput);
        }
    });

    $("#user-input").on({
        keypress: function(event) {
            if (event.which === 13 && !event.shiftKey) {
                event.preventDefault();
                $("#send-button").click();
            }
        },
        input: function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 100) + 'px';
        }
    });

    // Chat History Management
    function saveChatHistory() {
        try {
            localStorage.setItem('chatHistory', JSON.stringify({
                user: CURRENT_USER,
                history: conversationHistory,
                lastUpdated: formatDateTime()
            }));
        } catch (e) {
            console.error('Failed to save chat history:', e);
        }
    }

    function loadChatHistory() {
        try {
            const saved = localStorage.getItem('chatHistory');
            if (saved) {
                const data = JSON.parse(saved);
                if (data.user === CURRENT_USER) {
                    conversationHistory = data.history;
                    data.history.forEach(msg => {
                        addMessage(msg.role, msg.content);
                    });
                }
            }
        } catch (e) {
            console.error('Failed to load chat history:', e);
        }
    }

    // Window Focus Management
    let windowFocused = true;
    $(window).on('focus blur', function(e) {
        windowFocused = e.type === 'focus';
        if (windowFocused) {
            document.title = 'CapitolGPT';
        }
    });

    // Initialize
    function adjustLayout() {
        if ($(window).width() < 768) {
            $('.chat-container').height($(window).height() * 0.6);
        } else {
            $('.chat-container').height($(window).height() - 300);
        }
    }

    $(window).resize(adjustLayout);
    adjustLayout();
    loadChatHistory();

    // Auto-save chat history every 5 minutes
    setInterval(saveChatHistory, 300000);
});
