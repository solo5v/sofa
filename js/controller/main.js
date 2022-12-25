import "./data.js";
import { GENERATE_PRODUCTS_UI, addToCartHandler } from "../UI/Products.js";
import "../UI/Accordion.js";
import "../UI/RegisterModal.js";
import "../Register.js";
import {
  GENERATE_BASKET_PRODCUTS,
  SIDE_HANDLER_UI,
  DEMO_GNRT,
} from "../Basket.js";
import "../UserProfile.js";
import "../UI/Testimonials.js";

import {
  GET_USER_INFO,
  GNRT_CART_PRC_MARKUP,
  manageClassList,
  SET_USER_INFO,
  MANAGE_CLASS_LIST,
} from "../helpers.js";

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
  GENERATE_PRODUCTS_UI();
}

function init() {
  APP_UI_INIT();
  SEARCH_ENG_UI_HANDLER();
  addToCartHandler();
}

init();

// export { manageClassList, HEADER };
