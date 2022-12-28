import {
  MANAGE_CLASS_LIST,
  USER_PROFILE_HANDLER,
  GENERATE_PRODUCTS_UI,
  addToCartHandler,
  ACCORDION_UI_HANDLER,
  GNRT_ACCORDION_UI,
  SIDE_HANDLER_UI,
  REGISTER_FORM_HANDLER,
  REGISTER_MODAL_UI,
  PRODUCTS_QUANTITY,
  Testimonials,
} from "./controller.js";

const HEADER = document.querySelector(".header");
const MAIN_NAV = document.querySelector("#mainNav");
const MENU_BTN = document.querySelector("#menuBtn");
const HERO_SECTION = document.querySelector("#home");

const SEARCH_ENGINE_BTN = document.querySelector("#searchEngineBtn");
const HEADER_SEARCH_ENGINE = document.querySelector(".hd--search__engine");
const BODY = document.body;
const currSectionKYW = document.querySelector(".current-section__keyword");

const rootList = document.querySelector(".nav--root__list");
//=========================

const HEADER_UI_HANDLER = function () {
  const obs = new IntersectionObserver(
    (entries) => {
      const isValid = !entries[0].isIntersecting;

      MANAGE_CLASS_LIST.addOrRemove(
        isValid,
        ["add", "sticky"],
        ["remove", "sticky"],
        BODY
      );
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  return obs.observe(HERO_SECTION);
};

const SEARCH_ENG_UI_HANDLER = function () {
  const btnHandler = () => {
    MANAGE_CLASS_LIST.oneForMulti(
      "toggle",
      "active",
      HEADER_SEARCH_ENGINE,
      MAIN_NAV
    );
  };

  SEARCH_ENGINE_BTN.addEventListener("click", btnHandler);
};
//=========================
// animate the main nav

const animateMainNav = function () {
  const navIsOpen = MANAGE_CLASS_LIST.check("open__nav", HEADER);

  return MANAGE_CLASS_LIST.addOrRemove(
    navIsOpen,
    ["add", "animate"],
    ["remove", "animate"],
    rootList,
    currSectionKYW
  );
};
animateMainNav();
//=========================

//=========================
//  nav-menu behavior
const MENU_UI_HANDLER = function () {
  const btnHandler = () => {
    MANAGE_CLASS_LIST.moreThanDiffEL("toggle", ["active", MENU_BTN]);
    const isActive = MANAGE_CLASS_LIST.check("active", MENU_BTN);

    MANAGE_CLASS_LIST.moreThanOneAddOrRemove(
      isActive,
      ["animate,active", rootList, currSectionKYW],
      ["open__nav", HEADER]
    );
  };
  return MENU_BTN.addEventListener("click", btnHandler);
};

function APP_UI_INIT() {
  HEADER_UI_HANDLER();
  MENU_UI_HANDLER();
  SIDE_HANDLER_UI();
  REGISTER_MODAL_UI();
  GENERATE_PRODUCTS_UI();
  GNRT_ACCORDION_UI();
}

function init() {
  APP_UI_INIT();
  REGISTER_FORM_HANDLER();
  USER_PROFILE_HANDLER();
  SEARCH_ENG_UI_HANDLER();
  ACCORDION_UI_HANDLER();
  addToCartHandler();

  PRODUCTS_QUANTITY();
}

init();
