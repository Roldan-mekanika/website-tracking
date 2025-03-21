document.addEventListener('DOMContentLoaded', function() {
    // Créer un indicateur visuel
    var indicator = document.createElement("div");
    indicator.style.position = "fixed";
    indicator.style.bottom = "10px";
    indicator.style.right = "10px";
    indicator.style.padding = "5px";
    indicator.style.background = "black";
    indicator.style.color = "white";
    indicator.style.zIndex = "9999";
    indicator.innerHTML = "Suivi: 0%";
    document.body.appendChild(indicator);
    
    var scrolled = false;
    var currentUrl = window.location.href;
    
    if (currentUrl.includes('action=scroll75')) {
        indicator.innerHTML = "Déjà à 75%";
        return;
    }
    
    window.addEventListener('scroll', function() {
        if (scrolled) return;
        
        var totalHeight = document.body.scrollHeight - window.innerHeight;
        var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
        var scrollPercentage = (currentPosition / totalHeight) * 100;
        
        // Mettre à jour l'indicateur
        indicator.innerHTML = "Suivi: " + Math.round(scrollPercentage) + "%";
        
        if (scrollPercentage >= 75) {
            scrolled = true;
            indicator.style.background = "green";
            indicator.innerHTML = "75% atteint!";
            
            var newUrl = currentUrl;
            newUrl += currentUrl.includes('?') ? '&action=scroll75' : '?action=scroll75';
            window.history.replaceState({}, document.title, newUrl);
        }
    });
});
