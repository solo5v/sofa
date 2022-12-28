import {
  GNRT_MAIN_PRC_MARKUP,
  manageClassList,
  DEMO_GNRT,
  GET_USER_INFO,
  SET_USER_INFO,
  PRODUCTS,
  REGISTER_MODAL,
} from "../controller/controller.js";

// DISPLAY-PRODUCTS

const productsUIbehavior = function () {
  const PRODUCTS_CARD = document.querySelectorAll("#products figure");

  PRODUCTS_CARD.forEach((prc) => {
    const cardObs = new ResizeObserver(([entries]) => {
      const prcWidth = Math.trunc(entries.contentRect.width);

      prcWidth < 280
        ? manageClassList("add", "card__sm", prc)
        : manageClassList("remove", "card__sm", prc);
    });
    cardObs.observe(prc);

    const clickProdctHandler = (bev) => {
      return bev == "click"
        ? manageClassList("toggle", "active", prc)
        : manageClassList("add", "animate", prc);
    };

    ["mouseover", "click"].forEach((ev) =>
      prc.addEventListener(ev, () => clickProdctHandler(ev))
    );
  });
};

const GENERATE_PRODUCTS_UI = function () {
  const PRODUCTS_PARENT_EL = document.getElementById("products");
  const PRODUCTS_COLLECTION = [];

  const sliceProdcutsRow = function () {
    for (let i = 0; i < PRODUCTS.length; i += 3)
      PRODUCTS_COLLECTION.push(PRODUCTS.slice(i, i + 3));
  };
  sliceProdcutsRow();

  // GENERATE-PRODUCT-CARD
  const generateProduct = (prc) => GNRT_MAIN_PRC_MARKUP(prc);

  // GENERATE-PRODUCT-CARD INSDIE ROWS
  const gnrtProductRows = (rows) =>
    `<div class="prc--cards__rows">${rows.map(generateProduct).join("")}</div>`;

  const markup = PRODUCTS_COLLECTION.map(gnrtProductRows).join("");
  PRODUCTS_PARENT_EL.insertAdjacentHTML("beforeend", markup);

  //==
  productsUIbehavior();
};

//________________________

//================
const addToCartHandler = function () {
  const BTNS = document.querySelectorAll(".add--to__cart");

  const btnHandler = (e) => {
    const USER = GET_USER_INFO("userInfo");
    const USER_PRODUCTS = USER?.userProducts;
    const TARGET_PRODUCT = e.target.closest("figure").dataset.product;

    if (USER && USER.isLoggedIn) {
      const productToBasket = PRODUCTS.filter(
        (prc) => prc.id === TARGET_PRODUCT
      )[0];

      USER_PRODUCTS.push(productToBasket);

      DEMO_GNRT(productToBasket, USER_PRODUCTS);

      SET_USER_INFO(USER);
    } else {
      //show modal
      REGISTER_MODAL.show();
    }
  };

  BTNS.forEach((btn) => btn.addEventListener("click", btnHandler));
};

export { GENERATE_PRODUCTS_UI, addToCartHandler };
