class DiglotButtons extends HTMLElement {
  connectedCallback () {
    // 1. Set the HTML structure
      this.innerHTML = `


              `;
  }
}

customElements.define ('diglot-button', DiglotButtons);


 function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }