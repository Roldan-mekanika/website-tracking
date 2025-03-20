<div id="scroll-tracker-container"></div>
<script>
(function() {
  // Créer un indicateur visuel directement ici
  var indicator = document.createElement("div");
  indicator.style.position = "fixed";
  indicator.style.bottom = "10px";
  indicator.style.right = "10px";
  indicator.style.padding = "5px";
  indicator.style.background = "red";
  indicator.style.color = "white";
  indicator.style.zIndex = "9999";
  indicator.innerHTML = "Test de script interne";
  document.body.appendChild(indicator);
  
  // Maintenant essayons de charger le script externe
  var js = document.createElement("script");
  js.id = "ScrollTrackerScript";
  js.src = "https://cdn.jsdelivr.net/gh/Roldan-mekanika/website-tracking@5b12ea97bfa9af2b2ff1d9418ec66fd202fb619e/scroll-tracker.js";
  js.onload = function() {
    indicator.innerHTML = "Script externe chargé!";
    indicator.style.background = "green";
  };
  js.onerror = function() {
    indicator.innerHTML = "Erreur de chargement du script";
    indicator.style.background = "darkred";
  };
  document.getElementsByTagName("head")[0].appendChild(js);
})();
</script>
