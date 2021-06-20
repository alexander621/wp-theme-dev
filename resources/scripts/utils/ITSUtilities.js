/**
 * Indie Tech Solutions
 *
 * Utilities Lib
 *
 */

import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * Most used gsap animtaions
 */
export class ITSAnimations {
  /**
   * On mouse hover
   *
   * @param {*} element
   * @param {*} animationType
   * @param {*} ease
   */
  static stickyElement(triggerStart, triggerEnd, className, targets,end) {
    ScrollTrigger.create({
      trigger: triggerStart,
      start: "top",
      end: end,
      endTrigger: triggerEnd,
      toggleClass: {
        className: className,
        targets: targets,
      },
    });
  }
  static onHover(element) {
    const tl = gsap.timeline({
      paused: true
    });

    /**
     * Handle events
     *
     * @param {*} element
     * @param {*} tl
     */
    function playOnMouseover(element, tl) {
      element.addEventListener("mouseenter", () => tl.play());
      element.addEventListener("mouseleave", () => tl.reverse());
    }

    return {
      zoom() {
        const anim = {
          scale: 1.05,
          duration: 0.4,
          ease: "none"
        };

        tl.to(element, anim, 0);
        playOnMouseover(element, tl);
      }
    };
  }

  /**
   * Scroll reveal when visible on viewport
   */
  scrollReveal() {}

  /**
   * Parallax effect
   */
  parallax() {}
}

/**
 * Usefull Helpers
 */
export class ITSHelpers {
  /**
   * This prevents the page from scrolling down to where it was previously.
   */
  static backToTopOnReload() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }

  /**
   * force all external to open in new tab
   */

  static forceExternalLinks() {
    for (var links = document.links, i = 0, a; (a = links[i]); i++) {
      if (a.host !== location.host) {
        a.target = "_blank";
      }
    }
  }

  /**
   * Workaround to prevent broken wp plugins
   *
   * @param {*} container
   */
  static vueFixWpPlugins(container) {
    // look for scripts inside vue elements
    const scripts = container.querySelectorAll("script");
    // just for gravity iform
    const iframes = container.querySelectorAll("iframe[name*='gform_ajax_']");

    for (const script of scripts) {
      document.body.appendChild(script);
    }

    for (const iframe of iframes) {
      document.body.appendChild(iframe);
    }
  }
}
