:root {
  --primary-crimson: #DC143C;
  --secondary-crimson: #B01030;
  --gradient-start: #DC143C;
  --gradient-end: #8B0000;
  --shadow-color: rgba(220, 20, 60, 0.2);
  --text-light: #ffffff;
  --text-dark: #333333;
  --bg-light: #f8f9fa;
}

/* Base Styles */
body {
  font-family: 'Poppins', sans-serif;
  overflow: hidden; /* Changed from overflow-x: hidden; */
  background: var(--bg-light);
}

/* Intro Screen */
#intro-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, var(--gradient-start), var(--gradient-end));
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.intro-logo {
  animation: logoSpin 2s ease-out forwards;
  filter: drop-shadow(0 0 15px rgba(255,255,255,0.3));
}

.intro-title {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.8s ease forwards 1s;
}

.intro-subtitle {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.8s ease forwards 1.5s;
}

/* Header Container */
.header-container {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px var(--shadow-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* DateTime and User Info */
.header-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--text-light);
}

.current-time {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  font-family: monospace;
}

.current-time i {
  font-size: 0.8rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.user-info i {
  font-size: 0.8rem;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* New Chat Button */
.new-chat-button {
  background: var(--text-light);
  color: var(--primary-crimson);
  border: 2px solid var(--primary-crimson);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  cursor: pointer;
}

.new-chat-button:hover {
  background: var(--primary-crimson);
  color: var(--text-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px var(--shadow-color);
}

.new-chat-button.clicked {
  transform: scale(0.95);
}

/* Logo Styles */
.logo-wrapper {
  background: var(--text-light);
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header-logo {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
}

.header-logo:hover {
  transform: rotate(360deg);
}

.title-wrapper {
  position: relative;
}

.header-title {
  color: var(--text-light);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.header-decoration {
  height: 3px;
  width: 50%;
  background: var(--text-light);
  margin-top: 5px;
  border-radius: 2px;
  animation: decorationWidth 0.8s ease-out forwards;
}

/* Chat Container */
.chat-wrapper {
  max-width: 1000px;
  margin: 0 auto 70px auto; /* Add bottom margin for footer */
  background: var(--text-light);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 250px);
  position: relative;
}

.chat-container {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  padding-bottom: 80px; /* Space for input container */
  scroll-behavior: smooth;
}

.messages-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

/* Message Styles */
.message {
  display: flex;
  align-items: flex-start;
  margin: 1rem 0;
  opacity: 0;
  transform: translateY(10px);
  animation: messageAppear 0.3s ease forwards;
  max-width: 80%;
  will-change: opacity, transform;
  backface-visibility: hidden;
}

.user-message {
  margin-left: auto;
  flex-direction: row-reverse;
}

.message-content {
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin: 0 0.5rem;
}

.user-message .message-content {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: var(--text-light);
}

.bot-message .message-content {
  background: var(--bg-light);
  color: var(--text-dark);
}

/* Profile Icons */
.user-profile,
.bot-profile {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
}

.user-profile {
  background: var(--primary-crimson);
  color: var(--text-light);
}

.bot-profile {
  background: var(--bg-light);
  color: var(--primary-crimson);
}

/* Message Timestamp */
.message-timestamp {
  font-size: 0.75rem;
  opacity: 0.7;
  margin-top: 4px;
  text-align: right;
  white-space: nowrap;
  font-family: monospace;
}

/* Loading Animation */
.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.thinking-animation {
  display: flex;
  gap: 6px;
}

.thinking-dot {
  width: 10px;
  height: 10px;
  background: var(--primary-crimson);
  border-radius: 50%;
  animation: bubblePulse 1.4s infinite ease-in-out both;
}

.thinking-dot:nth-child(1) { animation-delay: -0.32s; }
.thinking-dot:nth-child(2) { animation-delay: -0.16s; }

/* Enhanced Loading Animation */
.loading-animation {
  width: 40px;
  height: 40px;
  border: 3px solid var(--bg-light);
  border-top: 3px solid var(--primary-crimson);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Input Area */
.input-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: var(--bg-light);
  border-top: 1px solid #eee;
  display: flex;
  gap: 1rem;
  z-index: 10;
}

.message-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #eee;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-size: 1rem;
  resize: none;
  min-height: 45px;
  max-height: 100px;
}

.message-input:focus {
  outline: none;
  border-color: var(--primary-crimson);
  box-shadow: 0 0 5px var(--shadow-color);
}

.message-input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.send-button {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: var(--text-light);
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.send-button:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 10px var(--shadow-color);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.send-button i {
  transition: all 0.3s ease;
}

.send-button.generating {
  background: var(--secondary-crimson);
}

.send-button.generating:hover {
  background: var(--primary-crimson);
}

/* Footer */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(5px);
  padding: 0.5rem;
  text-align: center;
  border-top: 1px solid #eee;
  font-size: 0.75rem;
  color: #666;
  z-index: 1000; /* Ensure footer is above other elements */
  height: 50px; /* Adjust height to avoid overlapping */
}

/* Modal Styles */
.modal-content {
  border-radius: 15px;
  border: none;
}

.modal-header {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: var(--text-light);
  border-radius: 15px 15px 0 0;
}

.modal-title {
  font-weight: 600;
}

.modal-header .close {
  color: var(--text-light);
  opacity: 0.8;
}

/* Enhanced Modal Styles */
.modal-content {
    border: none;
    transform: scale(0.95);
    transition: transform 0.3s ease;
}

.modal.show .modal-content {
    transform: scale(1);
}

.modal-header {
    border-bottom: none;
    padding: 1.5rem;
}

.modal-header .close {
    opacity: 1;
    text-shadow: none;
    transition: transform 0.2s ease;
}

.modal-header .close:hover {
    transform: rotate(90deg);
}

.modal-title {
    font-size: 1.25rem;
}

.modal-body {
    padding: 1.5rem;
}

.modal-footer {
    border-top: none;
    padding: 1.5rem;
}

.modal-backdrop.show {
    opacity: 0.7;
}

@keyframes modalFadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal.show .modal-dialog {
    animation: modalFadeIn 0.3s ease forwards;
}

/* Responsive Modal Adjustments */
@media (max-width: 640px) {
    .modal-dialog {
        margin: 1rem;
    }
    
    .modal-body {
        padding: 1rem;
    }
    
    .modal-header,
    .modal-footer {
        padding: 1rem;
    }
}

/* Connection Status Indicators */
#offline-indicator {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}

#offline-indicator.visible {
  transform: translateY(0);
}

/* Enhanced Dropdown Styles */
.menu-button {
    width: 40px;
    height: 40px;
    backdrop-filter: blur(8px);
}

.menu-button:hover {
    transform: rotate(90deg);
}

.menu-button i {
    transition: all 0.3s ease;
}

.dropdown-menu {
    margin-top: 0.5rem;
    min-width: 200px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    border: none;
}

.dropdown-menu.show {
    animation: dropdownFadeIn 0.3s ease forwards;
}

.dropdown-item {
    transition: all 0.2s ease;
}

.dropdown-item:hover i {
    transform: translateX(2px);
}

@keyframes dropdownFadeIn {
    from {
        opacity: 0;
        transform: scale(0.95) translateY(-10px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

/* Animations */
@keyframes logoSpin {
  0% { transform: scale(0) rotate(-180deg); opacity: 0; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 0.7; }
  100% { transform: scale(1) rotate(360deg); opacity: 1; }
}

@keyframes slideUpFade {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes messageAppear {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes decorationWidth {
  from { width: 0; }
  to { width: 50%; }
}

@keyframes bubblePulse {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-title {
      font-size: 1.2rem;
  }
  
  .current-time {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
  }
  
  .message-timestamp {
      font-size: 0.7rem;
  }
  
  .current-time,
  .user-info {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
  }
  
  .new-chat-button {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
  }
  
  .message {
      max-width: 90%;
  }
  
  .chat-wrapper {
      height: calc(100vh - 330px); /* Adjusted to account for footer height and spacing */
      margin-bottom: 70px;
  }
  
  .header-actions {
      gap: 0.75rem;
  }

  .input-container {
    bottom: 70px;
  }
}

@media (max-width: 480px) {
  .header-content {
      flex-direction: column;
      align-items: flex-start;
  }
  
  .current-time {
      display: none;
  }
  
  .header-actions {
      flex-direction: column;
      gap: 0.5rem;
  }
  
  .message {
      max-width: 95%;
  }
  
  .message-input {
      font-size: 0.9rem;
  }
  
  .chat-wrapper {
      height: calc(100vh - 330px); /* Adjusted to account for footer height and spacing */
      margin-bottom: 80px;
  }

  .input-container {
    bottom: 80px;
    padding: 0.75rem;
  }
}

/* Enhanced Text Formatting */
.formatted-text {
  line-height: 1.6;
  word-wrap: break-word;
}

.formatted-text p {
  margin: 0.5em 0;
}

.formatted-text strong {
  font-weight: 600;
}

.formatted-text ul {
  margin: 0.5em 0;
  padding-left: 1.5em;
}

.formatted-text li {
  margin: 0.25em 0;
  position: relative;
}

.bot-message .formatted-text ul {
  list-style-type: none;
}

.bot-message .formatted-text li::before {
  content: "•";
  color: var(--primary-crimson);
  font-weight: bold;
  position: absolute;
  left: -1em;
}

.user-message .formatted-text li::before {
  color: white;
}

.user-message .formatted-text strong {
  color: #ffffff;
  font-weight: 700;
}

.bot-message .formatted-text strong {
  color: var(--primary-crimson);
  font-weight: 600;
}

/* Enhanced Mobile and Tablet Responsiveness */
/* Tablets and small laptops */
@media (max-width: 1024px) {
  .chat-wrapper {
    margin-bottom: 80px;
  }
  
  .input-container {
    padding: 0.8rem;
  }
}

/* Mobile Landscape */
@media (max-width: 896px) and (orientation: landscape) {
  .header-container {
    padding: 0.5rem;
  }
  
  .chat-wrapper {
    height: calc(100vh - 200px);
    margin-bottom: 60px;
  }
  
  .footer {
    padding: 0.25rem;
    height: 40px;
  }
  
  .input-container {
    padding: 0.5rem;
  }
}

/* Mobile Portrait */
@media (max-width: 480px) {
  .container {
    padding: 0.5rem !important;
  }
  
  .header-container {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem;
  }
  
  .header-actions {
    width: 100%;
    justify-content: space-between;
  }
  
  .current-time {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
  }
  
  .new-chat-button {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  .chat-wrapper {
    border-radius: 10px;
    margin-top: 0.5rem;
  }
  
  .message {
    max-width: 95%;
    margin: 0.5rem 0;
  }
  
  .message-content {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
  
  .message-input {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
    min-height: 40px;
  }
  
  .send-button {
    width: 40px;
    height: 40px;
  }
}

/* Small Mobile Devices */
@media (max-width: 360px) {
  .header-title {
    font-size: 1rem;
  }
  
  .current-time {
    display: none;
  }
  
  .message-content {
    padding: 0.6rem;
    font-size: 0.85rem;
  }
  
  .user-profile,
  .bot-profile {
    width: 30px;
    height: 30px;
    font-size: 0.7rem;
  }
  
  .footer {
    font-size: 0.65rem;
    height: 45px;
  }
}

/* Device-specific fixes */
/* iPhone with notch */
@supports (padding-top: env(safe-area-inset-top)) {
  .chat-wrapper {
    padding-bottom: env(safe-area-inset-bottom);
  }
  
  .input-container {
    padding-bottom: calc(1rem + env(safe-area-inset-bottom));
  }
  
  .footer {
    padding-bottom: env(safe-area-inset-bottom);
  }
}

/* Foldable devices */
@media (max-width: 320px) {
  .header-container {
    padding: 0.5rem;
  }
  
  .chat-wrapper {
    margin-bottom: 70px;
  }
  
  .message {
    max-width: 100%;
  }
}

/* High DPI Mobile Screens */
@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 480px) {
  .message-content {
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }
  
  .chat-wrapper {
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
}
