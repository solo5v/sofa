import {
  manageClassList,
  GET_USER_INFO,
  SET_USER_INFO,
  GNRT_CART_PRC_MARKUP,
} from "./helpers.js";

const GENERATE_BASKET_PRODCUTS = function () {
  const USER_PRODUCTS = GET_USER_INFO("userInfo")?.userProducts || [];
  const BASKET_BODY = document.querySelector("#cartSideProducts");
  const basketIsValid = USER_PRODUCTS.length > 0;
  const badge = document.querySelector("#badge");

  badge.textContent = USER_PRODUCTS.length;

  if (basketIsValid) {
    // USER_PRODCUTS.push(product);
    const markup = USER_PRODUCTS.map((prc) => GNRT_CART_PRC_MARKUP(prc)).join(
      ""
    );
    BASKET_BODY.insertAdjacentHTML("beforeend", markup);
    manageClassList("remove", "cart__empty", cartSide);
  }
};

const DEMO_GNRT = (product, cartLength) => {
  const BASKET_BODY = document.querySelector("#cartSideProducts");

  const badge = document.querySelector("#badge");

  const markup = GNRT_CART_PRC_MARKUP(product);
  badge.textContent = cartLength.length;

  manageClassList("remove", "cart__empty", cartSide);
  BASKET_BODY.insertAdjacentHTML("beforeend", markup);
};

const SIDE_HANDLER_UI = function () {
  const SIDE = document.querySelector("#cartSide");

  const GOTO_CART_BTN = document.querySelector("#goToCartBtn");
  const CLOSE_CART_BTN = document.querySelector("#closeCartBtn");

  const openHandler = () => manageClassList("add", "active", SIDE);
  const closeHandler = () => manageClassList("remove", "active", SIDE);

  GOTO_CART_BTN.addEventListener("click", openHandler);
  CLOSE_CART_BTN.addEventListener("click", closeHandler);

  GENERATE_BASKET_PRODCUTS();
};

class ProductQuantity {
  #productId;
  #quantity;

  #discount = 0;
  #subTotal = 0;
  #shipment = 0;
  #total = 0;

  targetFigureEl;
  inputEl;
  minValue;
  maxValue;
  inputValue;

  incrementBtn;
  decrementBtn;
  constructor(product) {
    this.incrementBtn = document.querySelectorAll("#incrementQuantityOfPrc");
    this.decrementBtn = document.querySelectorAll("#decrementQuantityOfPrc");
    this.subTotalPrice = document.querySelector("#subTotalPrice");
    this.shipmentPrice = document.querySelector("#shipmentPrice");
    this.discountPrice = document.querySelector("#discountPrice");
    this.total = document.querySelector("#total");
    this.minValue = "";
    this.maxValue = "";
    this.inputValue = "";
    this.error = 0;
    this.product = product;

    this.getTotal();
    this.increment();
    this.decrement();
  }

  getTotal() {
    const PRODUCTS = GET_USER_INFO("userInfo")?.userProducts;

    const discounts = [];
    const shipments = [];
    const subtotals = [];

    if (!PRODUCTS) return;

    PRODUCTS.map(({ total }) => {
      discounts.push(+total.discount);
      shipments.push(+total.shipment);
      subtotals.push(+total.price);
    });

    this.#discount = discounts.reduce((prev, curr) => prev + curr);
    this.#shipment = shipments.reduce((prev, curr) => prev + curr);
    this.#subTotal = subtotals.reduce((prev, curr) => prev + curr);
    this.#total =
      subtotals.reduce((prev, curr) => prev + curr) -
      (this.#shipment + this.#discount);

    this.discountPrice.textContent = this.#discount;
    this.shipmentPrice.textContent = this.#shipment;
    this.total.textContent = this.#total.toFixed(2);
    this.subTotalPrice.textContent = this.#subTotal.toFixed(2);
  }

  getItemElements(figure) {
    this.inputEl = figure?.querySelector("input");
    this.inputValue = this.inputEl?.getAttribute("value");
    this.minValue = this.inputEl?.getAttribute("min");
    this.maxValue = this.inputEl?.getAttribute("max");
  }

  getProductById(id) {
    const USER = GET_USER_INFO("userInfo");

    let product = USER?.userProducts.filter((prc) => prc.id === id)[0];

    if (product.length >= 1) product.quantity = this.#quantity;

    SET_USER_INFO(USER);
  }

  deleteProdcut(id) {
    const USER = GET_USER_INFO("userInfo");
    const pro = USER.userProducts.filter((prc) => prc.id != id);
    USER.userProducts = pro;
    SET_USER_INFO(USER);
  }

  increment() {
    const HANDLER = () => {
      const isValid =
        this.inputValue &&
        this.inputValue > this.minValue &&
        this.inputValue < this.maxValue;

      if (isValid) {
        let newQuantity = ++this.inputValue;
        this.inputEl.setAttribute("value", newQuantity);

        this.#quantity = this.inputValue;
      }
    };

    return this.incrementBtn?.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const item = e.target.closest("figure");
        const itemId = (this.#productId = item.dataset.product);
        this.targetFigureEl = item;

        this.getItemElements(this.targetFigureEl);
        HANDLER();
        this.getProductById(itemId);
      })
    );
  }

  decrement() {
    const HANDLER = () => {
      const BASKET_BODY = document.querySelector("#cartSideProducts");

      const isValid = this.inputValue && this.inputValue > this.minValue;

      if (isValid) {
        let newQuantity = --this.inputValue;

        if (newQuantity < 1) {
          ++this.error;
          if (this.error == 1) {
            Toast("alert", "You Will Delete This Product — check it out!");

            return;
          } else if (this.error == 2) {
            this.deleteProdcut(this.#productId);

            const basket = GET_USER_INFO("userInfo")?.userProducts;
            const markup = basket
              .map((prc) => GNRT_CART_PRC_MARKUP(prc))
              .join("");
            // console.log(basket);
            BASKET_BODY.innerHTML = markup;
          } // deleteProdcut

          return;
        } else {
          this.inputEl.setAttribute("value", newQuantity);

          this.#quantity = this.inputValue;
        }
      }
    };

    return this.decrementBtn?.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const item = e.target.closest("figure");
        const itemId = (this.#productId = item.dataset.product);
        this.targetFigureEl = item;

        this.getItemElements(this.targetFigureEl);
        HANDLER();
        this.getProductById(itemId);
      })
    );
  }
}
// new ProductQuantity();

export { SIDE_HANDLER_UI, GENERATE_BASKET_PRODCUTS, DEMO_GNRT };
