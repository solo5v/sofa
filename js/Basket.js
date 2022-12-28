import {
  manageClassList,
  GET_USER_INFO,
  SET_USER_INFO,
  GNRT_CART_PRC_MARKUP as productCartMarkup,
  MANAGE_CLASS_LIST,
  TOAST,
  GNRT_CART_PRC_MARKUP,
} from "./controller/controller.js";

const SIDE = {
  badge: document.querySelector("#badge"),
  side: document.querySelector("#cartSide"),
  gotoBtn: document.querySelector("#goToCartBtn"),
  closeBtn: document.querySelector("#closeCartBtn"),
  sideBody: document.querySelector("#cartSideProducts"),
  userProducts: GET_USER_INFO("userInfo")?.userProducts,
};

const GENERATE_BASKET_PRODCUTS = function () {
  const { userProducts, badge, sideBody, side } = SIDE;
  const { remove, add } = MANAGE_CLASS_LIST;
  const basketIsValid = userProducts.length > 0;

  badge.textContent = userProducts.length;

  if (basketIsValid) {
    remove(["cart__empty", side]);
    const markup = userProducts.map((prc) => productCartMarkup(prc)).join("");

    sideBody.insertAdjacentHTML("beforeend", markup);
  } else {
    add(["cart__empty", side]);
  }
};

const DEMO_GNRT = (product, cartLength) => {
  const BASKET_BODY = document.querySelector("#cartSideProducts");

  const badge = document.querySelector("#badge");

  const markup = productCartMarkup(product);
  badge.textContent = cartLength.length;

  manageClassList("remove", "cart__empty", cartSide);
  BASKET_BODY.insertAdjacentHTML("beforeend", markup);
};

const SIDE_HANDLER_UI = function () {
  const { side, gotoBtn, closeBtn } = SIDE;
  const { add, remove } = MANAGE_CLASS_LIST;

  GENERATE_BASKET_PRODCUTS();

  gotoBtn.addEventListener("click", () => add(["active", side]));
  closeBtn.addEventListener("click", () => remove(["active", side]));
};

// incrementBtn;
// decrementBtn;

class ProductQuantity {
  // Note that class fields run before the constructor finishes
  //=======================

  //==================
  total = document.querySelector("#total");
  subTotalPrice = document.querySelector("#subTotalPrice");
  shipmentPrice = document.querySelector("#shipmentPrice");
  discountPrice = document.querySelector("#discountPrice");
  incrementBtns = document.querySelectorAll(".increment--product__quantity");
  decrementBtns = document.querySelectorAll(".decrement--product__quantity");
  removeBtns = document.querySelectorAll(".remove--cart-product__btn");

  constructor(product) {
    this.alert = -1;
    this.quantity = 0;
    this.increment();
    this.decrement();
    this.removeProduct();
    // this.getTotal();
  }
  updateUi() {
    const userProducts = GET_USER_INFO("userInfo")?.userProducts;

    const markup = userProducts
      .map((product) => GNRT_CART_PRC_MARKUP(product))
      .join("");

    SIDE.sideBody.innerHTML = markup;
  }

  action(e, actionType) {
    const item = e.target.closest("figure");
    const inputEl = item.querySelector("input");
    const itemId = item.dataset.product;

    const isValidDecrement =
      actionType === "decrement" && inputEl && inputEl.value > 1;
    //============
    const isValidIncrement =
      actionType === "increment" &&
      inputEl &&
      inputEl.value > 0 &&
      inputEl.value < 6;

    if (isValidIncrement) {
      let newValue = ++inputEl.value;
      inputEl.setAttribute("value", newValue);

      //
    }

    if (isValidDecrement) {
      let newValue = --inputEl.value;
      inputEl.setAttribute("value", newValue);
    }

    if (actionType === "remove") {
      return itemId;
    }
  }

  removeProduct() {
    const handler = (e) => {
      const user = GET_USER_INFO("userInfo");
      const itemId = this.action(e, "remove");
      const newBasket = user?.userProducts.filter((prc) => prc.id != itemId);
      user.userProducts = newBasket;
      SET_USER_INFO(user);
      this.updateUi();
    };

    return this.removeBtns?.forEach((btn) =>
      btn.addEventListener("click", handler)
    );
  }

  increment() {
    const handler = (e) => {
      this.action(e, "increment");
    };

    return this.incrementBtns?.forEach((btn) =>
      btn.addEventListener("click", handler)
    );
  }

  decrement() {
    const handler = (e) => {
      this.action(e, "decrement");
    };

    return this.decrementBtns?.forEach((btn) =>
      btn.addEventListener("click", handler)
    );
  }
}

// getItemElements(figure) {
//
// }

// HANDLER();
// this.getItemElements(this.targetFigureEl);
// this.targetFigureEl = item;
// this.getProductById(itemId);

// this.figure;
// this.inputEl = figure?.querySelector("input");
// this.minValue = this.inputEl?.getAttribute("min");
// this.maxValue = this.inputEl?.getAttribute("max");
// this.inputValue = this.inputEl?.getAttribute("value");

// getProductById(id) {
//   const USER = GET_USER_INFO("userInfo");

//   let product = USER?.userProducts.filter((prc) => prc.id === id)[0];

//   if (product.length >= 1) product.quantity = this.#quantity;

//   SET_USER_INFO(USER);
// }

// deleteProdcut(id) {
//   const USER = GET_USER_INFO("userInfo");
//   const pro = USER.userProducts.filter((prc) => prc.id != id);
//   USER.userProducts = pro;
//   SET_USER_INFO(USER);
// }

// decrement() {
//   const HANDLER = () => {
//     const BASKET_BODY = document.querySelector("#cartSideProducts");

//     const isValid = this.inputValue && this.inputValue > this.minValue;

//     if (isValid) {
//       let newQuantity = --this.inputValue;

//       if (newQuantity < 1) {
//         ++this.error;
//         if (this.error == 1) {
//           Toast("alert", "You Will Delete This Product — check it out!");

//           return;
//         } else if (this.error == 2) {
//           this.deleteProdcut(this.#productId);

//           const basket = GET_USER_INFO("userInfo")?.userProducts;
//           const markup = basket
//             .map((prc) => GNRT_CART_PRC_MARKUP(prc))
//             .join("");
//           // console.log(basket);
//           BASKET_BODY.innerHTML = markup;
//         } // deleteProdcut

//         return;
//       } else {
//         this.inputEl.setAttribute("value", newQuantity);

//         this.#quantity = this.inputValue;
//       }
//     }
//   };

//   return this.decrementBtn?.forEach((btn) =>
//     btn.addEventListener("click", (e) => {
//       const item = e.target.closest("figure");
//       const itemId = (this.#productId = item.dataset.product);
//       this.targetFigureEl = item;

//       this.getItemElements(this.targetFigureEl);
//       HANDLER();
//       this.getProductById(itemId);
//     })
//   );
// }

// getTotal() {
//   const PRODUCTS = GET_USER_INFO("userInfo")?.userProducts;

//   const discounts = [];
//   const shipments = [];
//   const subtotals = [];

//   if (!PRODUCTS) return;

//   PRODUCTS.map(({ total }) => {
//     discounts.push(+total.discount);
//     shipments.push(+total.shipment);
//     subtotals.push(+total.price);
//   });

//   this.#discount = discounts.reduce((prev, curr) => prev + curr);
//   this.#shipment = shipments.reduce((prev, curr) => prev + curr);
//   this.#subTotal = subtotals.reduce((prev, curr) => prev + curr);
//   this.#total =
//     subtotals.reduce((prev, curr) => prev + curr) -
//     (this.#shipment + this.#discount);

//   this.discountPrice.textContent = this.#discount;
//   this.shipmentPrice.textContent = this.#shipment;
//   this.total.textContent = this.#total.toFixed(2);
//   this.subTotalPrice.textContent = this.#subTotal.toFixed(2);
// }

// const HANDLER = () => {
//   // const isValid =
//   //   this.inputValue &&
//   //   this.inputValue > this.minValue &&
//   //   this.inputValue < this.maxValue;
//   // if (isValid) {
//   //   let newQuantity = ++this.inputValue;
//   //   this.inputEl.setAttribute("value", newQuantity);
//   //   this.#quantity = this.inputValue;
// };

// new ProductQuantity();
// #productId;
// #quantity;

// #discount = 0;
// #subTotal = 0;
// #shipment = 0;
// #total = 0;
// targetFigureEl;
// inputEl;
// minValue;
// maxValue;
// inputValue;

// this.minValue = "";
// this.maxValue = "";
// this.inputValue = "";
// this.error = 0;
// this.product = product;

// this.minValue = "";
// this.maxValue = "";
// this.inputValue = "";
// this.error = 0;
// this.product = product;
// // this.getTotal();
// this.increment();
// // this.decrement();

const PRODUCTS_QUANTITY = () => new ProductQuantity();

export {
  SIDE_HANDLER_UI,
  GENERATE_BASKET_PRODCUTS,
  DEMO_GNRT,
  PRODUCTS_QUANTITY,
};
