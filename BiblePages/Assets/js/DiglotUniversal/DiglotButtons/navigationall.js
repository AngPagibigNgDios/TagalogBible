class DiglotNavigation extends HTMLElement {
   connectedCallback() {

      this.innerHTML = `

         <div id="btnPrev">Previous</div>
         <div id="btnToggle">Disable Arrow Keys</div>
         <div id="btnNext">Next</div>

         <div class="back-to-top">
            <img class="scrollup" src="scrollup.svg">
         </div>

      `;

      // =========================
      // ELEMENTS INSIDE COMPONENT
      // =========================

      const btnPrev = this.querySelector('#btnPrev');
      const btnNext = this.querySelector('#btnNext');
      const btnToggle = this.querySelector('#btnToggle');
      const backToTop = this.querySelector('.back-to-top');

      // =========================
      // SCROLL TO TOP
      // =========================

      backToTop.onclick = function () {
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      };

      // =========================
      // SETTINGS
      // =========================

      const STORAGE_KEY = 'arrowNavEnabled';

      let arrowNavEnabled = localStorage.getItem(STORAGE_KEY);

      arrowNavEnabled =
         arrowNavEnabled === null
            ? true
            : (arrowNavEnabled === 'true');

      // =========================
      // LINKS
      // =========================

      const prevLink = document.getElementById('LinkToPrev');
      const nextLink = document.getElementById('LinkToNext');

      // =========================
      // BUTTON LABEL
      // =========================

      btnToggle.textContent =
         arrowNavEnabled
            ? 'Disable Arrow Keys'
            : 'Enable Arrow Keys';

      // =========================
      // BUTTON EVENTS
      // =========================

      btnPrev.onclick = function () {
         if (prevLink?.href) {
            window.location.href = prevLink.href;
         }
      };

      btnNext.onclick = function () {
         if (nextLink?.href) {
            window.location.href = nextLink.href;
         }
      };

      btnToggle.onclick = function () {

         arrowNavEnabled = !arrowNavEnabled;

         localStorage.setItem(
            STORAGE_KEY,
            arrowNavEnabled
         );

         btnToggle.textContent =
            arrowNavEnabled
               ? 'Disable Arrow Keys'
               : 'Enable Arrow Keys';
      };

      // =========================
      // SWIPE NAVIGATION
      // =========================

      let touchstartX = 0;
      let touchendX = 0;

      const minSwipeDistance = 70;

      document.addEventListener(
         'touchstart',
         e => {
            touchstartX =
               e.changedTouches[0].screenX;
         },
         { passive: true }
      );

      document.addEventListener(
         'touchend',
         e => {
            touchendX =
               e.changedTouches[0].screenX;

            handleGesture();
         },
         { passive: true }
      );

      function handleGesture() {

         const distance =
            touchendX - touchstartX;

         if (distance > minSwipeDistance) {

            if (prevLink?.href) {
               window.location.href =
                  prevLink.href;
            }
         }

         if (distance < -minSwipeDistance) {

            if (nextLink?.href) {
               window.location.href =
                  nextLink.href;
            }
         }
      }

      // =========================
      // KEYBOARD NAVIGATION
      // =========================

      document.addEventListener(
         'keydown',
         function (e) {

            if (!arrowNavEnabled) return;

            if (
               e.ctrlKey ||
               e.shiftKey ||
               e.altKey ||
               e.metaKey
            ) return;

            const active =
               document.activeElement;

            if (
               active &&
               (
                  active.tagName === 'INPUT' ||
                  active.tagName === 'TEXTAREA'
               )
            ) return;

            if (e.key === 'ArrowLeft') {

               if (prevLink?.href) {
                  window.location.href =
                     prevLink.href;
               }
            }

            if (e.key === 'ArrowRight') {

               if (nextLink?.href) {
                  window.location.href =
                     nextLink.href;
               }
            }
         }
      );
   }
}

customElements.define(
   'diglot-navigation',
   DiglotNavigation
);