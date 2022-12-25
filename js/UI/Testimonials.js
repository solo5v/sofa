import { manageClassList } from "../helpers.js";
import { TESTIMOILAS } from "../controller/data.js";

const SLIDER = document.querySelector(".testimonials__section .slider");
const DOTS_MOVEMENTS = document.querySelector(".slider--dots__movement ul");

const markup = TESTIMOILAS.map(({ description, id, title, image, author }) => {
  return `<figure class="tsmon" id="${id}">
  <div class="tsmon__img">
    <img
      src="${image}"
      alt="About Testimonials Of Sofa"
    />
  </div>

  <figcaption>
    <h5>"${title}"</h5>

    <blockquote class="tsmon__quote nr__paragraph">
      ${description}
    </blockquote>

    <strong class="tsmon__author">
      — ${author}
    </strong>
  </figcaption>
</figure>
`;
}).join("");
SLIDER.insertAdjacentHTML("afterbegin", markup);

// DOTS_MOVEMENTS.add

//=====================

const SLIDER_BTN = document.querySelector("#testimonialsBtn");
const TSMON_CARD = document.querySelectorAll(".slider .tsmon");
const itemsToMove = document.querySelectorAll(
  ".testimonials__section .slider figure"
);

itemsToMove.forEach((item) => {
  const markup = `<li></li>`;

  DOTS_MOVEMENTS.insertAdjacentHTML("beforeend", markup);
});

let sliderItems = TSMON_CARD.length - 1;
let move = 0;
manageClassList("add", "active", TSMON_CARD[move], DOTS_MOVEMENTS.children[0]);

const sliderHandler = function () {
  manageClassList("remove", "active", TSMON_CARD[move]);

  if (move < sliderItems) {
    manageClassList("add", "active", TSMON_CARD[++move]);
  } else {
    move = 0;
    manageClassList("add", "active", TSMON_CARD[move]);
  }

  itemsToMove.forEach((item, idx) => {
    const isActive = item.classList.contains("active");
    const btns = [...DOTS_MOVEMENTS.children];

    return isActive
      ? manageClassList("add", "active", btns[idx])
      : manageClassList("remove", "active", btns[idx]);
  });
};

SLIDER_BTN.addEventListener("click", sliderHandler);
