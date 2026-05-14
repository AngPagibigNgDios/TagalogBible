(function () {
    const html = document.documentElement;
    
    // 1. Get saved values OR set your "Factory Defaults"
    const type = localStorage.getItem('bgType') || 'image'; // Default to image
    const savedBG = localStorage.getItem('customBG') || 'assets/images/default-bg.jpg'; // Path to your default
    const bgColor = localStorage.getItem('bgColor') || '#f6fdff';
    const style = localStorage.getItem('bgStylePreference') || 'repeat';    // 2. Apply Background Color (Fallback)
    html.style.backgroundColor = bgColor;    // 3. Handle Logic
    if (type === 'color') {
        html.style.backgroundImage = "none";
    } else {
        // If type is 'image', apply the saved custom image OR the default image
        html.style.backgroundImage = `url('${savedBG}')`;
        html.style.backgroundAttachment = "fixed";        if (style === 'cover') {
            html.style.backgroundRepeat = "no-repeat";
            html.style.backgroundSize = "cover";
        } else if (style === 'contain') {
            html.style.backgroundRepeat = "no-repeat";
            html.style.backgroundSize = "contain";
            html.style.backgroundPosition = "center";
        } else {
            html.style.backgroundRepeat = "repeat";
            html.style.backgroundSize = "auto";
        }
    }
})();