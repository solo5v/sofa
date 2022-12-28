import {
  FAQ,
  MANAGE_CLASS_LIST,
  GNRT_ACCORD_MARKUP,
} from "../controller/controller.js";

const GNRT_ACCORDION_UI = () => {
  const parentEl = document.querySelector("#accordion");

  FAQ.map((accordData, idx) => {
    const accordMarkup = GNRT_ACCORD_MARKUP(accordData, idx);
    parentEl.insertAdjacentHTML("beforeend", accordMarkup);
  });
};

const removeOpen = (idx) => {
  const accords = document.querySelectorAll(".accord");
  const { oneForMulti } = MANAGE_CLASS_LIST;

  accords.forEach((accord, idx2) => {
    if (idx != idx2) oneForMulti("remove", "active", accord);
  });
};

const ACCORDION_UI_HANDLER = () => {
  const accordHeaders = document.querySelectorAll(".accord header");

  const headerHandler = (hd, idx) => {
    const handler = (e) => {
      const { oneForMulti } = MANAGE_CLASS_LIST;
      const accord = e.target.closest("article");

      oneForMulti("toggle", "active", accord);
      removeOpen(idx);
    };

    hd.addEventListener("click", handler);
  };

  return accordHeaders.forEach(headerHandler);
};

export { GNRT_ACCORDION_UI, ACCORDION_UI_HANDLER };
