import { useEffect } from "react";

export default function useScrollFade(ref) {
  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const update = () => {
      const y = Math.max(1, 1 + (window.scrollY || window.pageYOffset) / 250);
      const channel = Math.round(255 / y);
      element.style.color = `rgb(${channel}, ${channel}, ${channel})`;
    };

    update();
    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);
  }, [ref]);
}
