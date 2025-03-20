document.addEventListener('DOMContentLoaded', function() {
    var scrolled = false;
    var currentUrl = window.location.href;
    
    if (currentUrl.includes('action=scroll75')) return;
    
    window.addEventListener('scroll', function() {
        if (scrolled) return;
        
        var totalHeight = document.body.scrollHeight - window.innerHeight;
        var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
        var scrollPercentage = (currentPosition / totalHeight) * 100;
        
        if (scrollPercentage >= 75) {
            scrolled = true;
            var newUrl = currentUrl;
            newUrl += currentUrl.includes('?') ? '&action=scroll75' : '?action=scroll75';
            window.history.replaceState({}, document.title, newUrl);
        }
    });
});
