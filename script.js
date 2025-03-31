// Script created by Frenki

document.addEventListener('DOMContentLoaded', function() {
    // --- Element References - Frenki ---
    const codeElement = document.getElementById('json-content');
    const loadingElement = document.getElementById('loading');
    const notificationElement = document.getElementById('copy-notification');
    const reloadIcon = document.getElementById('reload-icon');
    const copyrightYear = document.getElementById('copyright-year');
    const cardElement = document.getElementById('resume-card');
    // Chatbot elements removed by Frenki

    // --- State Variables - Frenki ---
    let originalJsonData = null;
    let isTypingComplete = false;
    let typeitInstance = null;

    // --- Initialization - Frenki ---
    setCopyrightYear();
    initializeStaticListeners();
    loadAndDisplayData();

    // --- Event Listener Setup Functions - Frenki ---

    function initializeStaticListeners() {
        // Static listeners setup by Frenki
        if (reloadIcon) reloadIcon.addEventListener('click', handleReload);
        // Chatbot listeners removed by Frenki
    }

    function activateJsonCopyListeners() {
        // Activate copy listeners inside JSON content - Frenki
        const jsonCopyIcons = codeElement.querySelectorAll('.copy-icon');
        setupCopyListeners(jsonCopyIcons);
    }

    // Footer copy activation removed by Frenki

    // Helper to setup listeners - Frenki
    function setupCopyListeners(icons) {
        icons.forEach(icon => {
            const clonedIcon = icon.cloneNode(true);
            if (icon.parentNode) {
                 icon.parentNode.replaceChild(clonedIcon, icon);
                 clonedIcon.addEventListener('click', handleCopyClick);
            }
        });
    }


    // --- Core Functions - Frenki ---

    function setCopyrightYear() {
        // Set copyright year - Frenki
        const currentYear = new Date().getFullYear();
        if(copyrightYear) copyrightYear.textContent = currentYear;
    }

    function handleReload() {
        // Handle reload request - Frenki
        console.log("Reload requested by Frenki.");
        isTypingComplete = false;
        if (typeitInstance) { typeitInstance.destroy(false); typeitInstance = null; }
        loadingElement.style.display = 'flex';
        codeElement.innerHTML = ''; codeElement.style.opacity = '0';
        cardElement.style.opacity = '0'; cardElement.style.transform = 'scale(0.98) translateY(10px)';
        void cardElement.offsetWidth; cardElement.style.animation = 'none';
        setTimeout(() => { cardElement.style.animation = ''; }, 10);
        loadAndDisplayData();
    }

    async function loadAndDisplayData() {
        // Load and display JSON data - Frenki
        loadingElement.style.display = 'flex';
        codeElement.style.opacity = '0'; // Ensure hidden initially
        codeElement.innerHTML = '';

        try {
            const response = await fetch('resume.json?t=' + Date.now());
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            originalJsonData = await response.json();
            const formattedHtml = enhancedSyntaxHighlight(originalJsonData);
            loadingElement.style.display = 'none';
            codeElement.innerHTML = formattedHtml; // Set content before TypeIt
            codeElement.style.opacity = '1'; // Make visible

            if (typeitInstance) { typeitInstance.destroy(false); typeitInstance = null; }

            // Re-initialize TypeIt - Frenki
            typeitInstance = new TypeIt(codeElement, {
                speed: 5, // << SPEED INCREASED FURTHER by Frenki (Smaller number = faster)
                lifeLike: true, // Keep it somewhat natural - Frenki
                cursorChar: '<span class="ti-cursor">|</span>',
                waitUntilVisible: false,
                startDelay: 50, // Very short delay - Frenki
                breakLines: false,
                afterComplete: async (instance) => {
                    const cursorElement = instance.elements.cursor;
                    if (cursorElement) { cursorElement.style.animation = 'none'; cursorElement.style.opacity = '1'; }
                    isTypingComplete = true;
                    activateJsonCopyListeners(); // Activate listeners after effect - Frenki
                    console.log("TypeIt complete, JSON listeners activated by Frenki.");
                },
                onError: (error) => {
                     console.error("TypeIt Initialization/Typing Error:", error);
                     isTypingComplete = true; // Still allow copy - Frenki
                     activateJsonCopyListeners();
                 }
            })
              .delete(null, { instant: true })
              .type(null, { instant: false }) // Type existing content - Frenki
              .go();

        } catch (error) {
            // Handle fetch or JSON parsing errors - Frenki
            console.error('Failed to load or display JSON data:', error);
            loadingElement.innerHTML = `<span style="text-align: center;">Error: Failed to load data.<br>(${error.message})</span>`;
            codeElement.style.opacity = '0';
            loadingElement.style.display = 'flex';
        }
    }

    // --- Syntax Highlighting & Copy - Frenki ---
     function enhancedSyntaxHighlight(jsonObj) {
         // Syntax highlighting logic by Frenki
         let jsonString = JSON.stringify(jsonObj, null, 2);
         jsonString = jsonString.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
         jsonString = jsonString.replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:');
         jsonString = jsonString.replace(/\b(true|false)\b/g, '<span class="json-boolean">$1</span>');

         // Handle Account URLs & Email SPECIFICALLY - Frenki
         const accounts = jsonObj?.data?.accounts || {};
         for (const key in accounts) {
             const url = accounts[key];
             if (url && typeof url === 'string') {
                const plainUrlString = `"${url}"`;
                const escapedQuotedUrlString = plainUrlString.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                const regex = new RegExp(`(:\\s*)(${escapedQuotedUrlString})`, 'g');
                const linkTitle = key.charAt(0).toUpperCase() + key.slice(1);
                const replacement = `$1<a href="${url}" target="_blank" rel="noopener noreferrer" class="json-link">${plainUrlString}</a> <i class="far fa-copy copy-icon" data-copy-value="${url}" title="Copy ${linkTitle} URL"></i>`;
                jsonString = jsonString.replace(regex, replacement);
            }
         }
         const email = jsonObj?.data?.email;
         if (email && typeof email === 'string') {
             const plainEmailString = `"${email}"`;
             const escapedQuotedEmailString = plainEmailString.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
             const emailRegex = new RegExp(`(:\\s*)(${escapedQuotedEmailString})`, 'g');
             const emailReplacement = `$1<a href="mailto:${email}" class="json-link">${plainEmailString}</a> <i class="far fa-copy copy-icon" data-copy-value="${email}" title="Copy Email"></i>`;
             jsonString = jsonString.replace(emailRegex, emailReplacement);
         }

         // Highlight any REMAINING strings - Frenki
         jsonString = jsonString.replace(/:\s*("((?:\\.|[^"\\])*)")(?![^<]*>|[^>]*<\/a>)/g, (match, quotedValue) => {
            if (match.includes('<a href')) return match;
            return `: <span class="json-string">${quotedValue}</span>`;
         });

         // Highlight Punctuation - Frenki
         jsonString = jsonString.replace(/(?:<[^>]*>)|({|}|\[|\]|,|:)/g, (match, punc) => { if (punc) { return `<span class="json-punctuation">${punc}</span>`; } return match; });

         // Handle Newlines - Frenki
         jsonString = jsonString.replace(/\\n/g, '<br>');

         return jsonString; // Return formatted HTML string - Frenki
     }


    function handleCopyClick(event) {
        // Handle copy clicks - Frenki
        console.log('Copy icon clicked by Frenki');
        event.stopPropagation();
        const icon = event.currentTarget;
        const valueToCopy = icon.getAttribute('data-copy-value');
        const notificationText = 'Copied!';
        if (valueToCopy) {
            navigator.clipboard.writeText(valueToCopy).then(() => {
                 notificationElement.textContent = notificationText; notificationElement.classList.add('show');
                 icon.classList.remove('fa-copy'); icon.classList.add('fa-check'); icon.style.color = '#81c784';
                 setTimeout(() => {
                     notificationElement.classList.remove('show'); icon.classList.remove('fa-check'); icon.classList.add('fa-copy'); icon.style.color = '';
                 }, 1500);
            }).catch(err => {
                 console.error('Failed to copy:', err); notificationElement.textContent = 'Copy Failed'; notificationElement.style.backgroundColor = '#e53935'; notificationElement.classList.add('show');
                 setTimeout(() => { notificationElement.classList.remove('show'); notificationElement.style.backgroundColor = ''; }, 2000);
            });
        } else {
             console.warn('No data-copy-value found on clicked icon by Frenki.');
        }
    }

    // --- Chatbot Functionality Removed by Frenki ---
    // function toggleChatModal() { /* ... */ }
    // function addChatMessage() { /* ... */ }
    // async function handleSendMessage() { /* ... */ }
    // async function simulateGeminiResponse() { /* ... */ }

}); // End DOMContentLoaded - Frenki Project

// Final script check by Frenki