(function () {
    const type = localStorage.getItem('bgType') || 'image';
    const html = document.documentElement;

    const defaultColor = '#3b2a1a';
    html.style.backgroundColor = defaultColor;

    if (type === 'color') {
        html.style.backgroundImage = "none";
        html.style.backgroundColor = localStorage.getItem('bgColor') || defaultColor;
        return;
    }

    const savedBG = localStorage.getItem('customBG');
    const style = localStorage.getItem('bgStylePreference') || 'repeat';

    // 🔥 THIS IS THE IMPORTANT LINE
    const finalBG = savedBG || 'defaultbackground.jpg';

    html.style.backgroundImage = `url(${finalBG})`;
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
})();