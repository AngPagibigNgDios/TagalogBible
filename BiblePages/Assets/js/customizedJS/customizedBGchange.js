document.addEventListener("DOMContentLoaded", () => {
    const mode = localStorage.getItem('bgMode') || 'image';
    const style = localStorage.getItem('bgStylePreference') || 'repeat';
    const color = localStorage.getItem('bgColor') || '#3b2a1a';    const modeEl = document.getElementById('bgMode');
    const styleEl = document.getElementById('bgStyle');
    const colorEl = document.getElementById('bgColor');    if (modeEl) modeEl.value = mode;
    if (styleEl) styleEl.value = style;
    if (colorEl) colorEl.value = color;
});