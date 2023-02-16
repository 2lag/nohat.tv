// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable inspection of the page
document.addEventListener('keydown', event => {
    // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+Shift+U
    if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C' || event.key === 'U')) {
        event.preventDefault();
    }
    // Block Ctrl+U, Ctrl+A
    if (event.ctrlKey && (event.key === 'U' || event.key === 'A')) {
        event.preventDefault();
    }
    // Block F12
    if (event.key === 'F12') {
        event.preventDefault();
    }
});