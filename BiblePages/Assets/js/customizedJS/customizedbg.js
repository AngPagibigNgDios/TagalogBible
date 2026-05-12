/////////////////////////
//   CUSTOMIZED BG    //
///////////////////////

(function () {
    const html = document.documentElement;

    const defaultColor = '#3b2a1a';

    const bgType =
        localStorage.getItem('bgType') || 'image';

    const bgStyle =
        localStorage.getItem('bgStylePreference') || 'repeat';

    const bgColor =
        localStorage.getItem('bgColor') || defaultColor;

    const customBG =
        localStorage.getItem('customBG');

    // =========================
    // APPLY BACKGROUND
    // =========================

    if (bgType === 'color') {
        html.style.backgroundImage = 'none';
        html.style.backgroundColor = bgColor;
    } else {

        // Let CSS handle default background
        if (customBG) {
            html.style.backgroundImage = `url(${customBG})`;
            html.style.backgroundAttachment = 'fixed';
        }

        if (bgStyle === 'cover') {
            html.style.backgroundRepeat = 'no-repeat';
            html.style.backgroundSize = 'cover';

        } else if (bgStyle === 'contain') {
            html.style.backgroundRepeat = 'no-repeat';
            html.style.backgroundSize = 'contain';
            html.style.backgroundPosition = 'center';

        } else {
            html.style.backgroundRepeat = 'repeat';
            html.style.backgroundSize = 'auto';
        }
    }

    // =========================
    // UI SYNCHRONIZATION
    // =========================

    document.addEventListener('DOMContentLoaded', () => {

        const modeEl = document.getElementById('bgMode');
        const styleEl = document.getElementById('bgStyle');
        const colorEl = document.getElementById('bgColor');

        if (modeEl) modeEl.value = bgType;
        if (styleEl) styleEl.value = bgStyle;
        if (colorEl) colorEl.value = bgColor;

    });

})();