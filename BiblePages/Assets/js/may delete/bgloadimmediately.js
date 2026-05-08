(function () {
    const type = localStorage.getItem('bgType') || 'image';
    const html = document.documentElement;

    // ALWAYS set fallback first (prevents white flash)
    html.style.backgroundColor = localStorage.getItem('bgColor') || '#3b2a1a';

    if (type === 'color') {
        html.style.backgroundImage = "none";
        return;
    }

    const savedBG = localStorage.getItem('customBG');
    const style = localStorage.getItem('bgStylePreference') || 'repeat';

    if (savedBG) {
        html.style.backgroundImage = `url(${savedBG})`;
        html.style.backgroundAttachment = "fixed";

        if (style === 'cover') {
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