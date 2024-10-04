// Show the loading screen for 2 seconds and then display the timeline
window.onload = function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const timelineContainer = document.getElementById('timelineContainer');

    setTimeout(function() {
        loadingScreen.style.opacity = '0'; // Fade out loading screen
        setTimeout(function() {
            loadingScreen.style.display = 'none'; // Hide loading screen after fade
            timelineContainer.style.display = 'block'; // Show timeline
            timelineContainer.style.opacity = '1'; // Fade in timeline
        }, 500); // Match the duration of the fade out
    }, 2000); // Show loading screen for 2 seconds
};
