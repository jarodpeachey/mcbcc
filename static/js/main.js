(function () {
  const notBuild = typeof window !== "undefined";

  if (notBuild && window.location.pathname.includes('leaderboard')) {
    addScript("/js/leaderboard.js");
  }

  function addScript(url) {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
})();
