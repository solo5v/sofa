// HELPER-FUNCTIONS
//----------------

const manageClassList = function (method, className, ...elements) {
  // [=|=]

  // const isEqualOne= elements.length == 1? elements[0]: elements;
  return elements.map((el) => {
    switch (method) {
      case "add":
        return el?.classList.add(className);

      case "remove":
        return el?.classList.remove(className);

      case "toggle":
        return el?.classList.toggle(className);

      case "contains":
        return el?.classList.contains(className);

      default:
        return el?.classList.add("");
    }
  });
};

//= =================================

const CLASS_LIST_METHODS = (method, className, ...elements) => {
  try {
    const areElements = elements.length > 1;
    const noElements = elements.length === 0;
    let checkResult;

    if (noElements) throw new Error("ADD YOUR ELEMENT");

    // IF ELEMENT IS INVAILD
    elements.forEach((el, _, array) => {
      const isInValid = array.length == 0 || el == undefined || el == null;

      if (isInValid) throw new Error("Your Element Is INVAILD");
    });

    const switcher = (el) => {
      if (el == undefined || el == null || Array.isArray(el))
        throw new Error("Your Element Is Invalid >>>|switcher|<<<");

      let multiClass = [];
      if (className.includes(",")) {
        multiClass = className.split(",");
      } else {
        multiClass.push(className);
      }

      switch (method) {
        case "add":
          return el?.classList.add(...multiClass);
        case "remove":
          return el?.classList.remove(...multiClass);
        case "toggle":
          return el?.classList.toggle(...multiClass);
        case "contains":
          checkResult = el?.classList.contains(className);
          return checkResult;
        default:
          return "check your method";
      }
    };

    if (areElements) elements.flat().forEach((el) => switcher(el));
    else switcher(elements[0]);

    return checkResult || false;

    //=============
  } catch (error) {
    console.error(error);
  }
};

// CLASS_LIST_METHODS("add", "active", nav, header);

const MANAGE_CLASS_LIST = {
  // TRUE || FALSE
  check(className, el) {
    return CLASS_LIST_METHODS("contains", className, el);
  },

  // the same
  // (condition, [method, class] , [method, class], ...elements || el)
  addOrRemove(condition, classIsTrue, classIsFalse, ...elements) {
    const [truthyMethod, truthyClass] = classIsTrue;
    const [falsyMethod, falsyClass] = classIsFalse;

    return condition
      ? CLASS_LIST_METHODS(truthyMethod, truthyClass, ...elements)
      : CLASS_LIST_METHODS(falsyMethod, falsyClass, ...elements);
  },

  // multiElement diffrent classes and ELEMENT
  // (classMehtod, [className, element], ...[className, element])
  moreThanDiffEL(method, ...temp) {
    return temp.forEach(([className, ...el]) => {
      return CLASS_LIST_METHODS(method, className, ...el);
    });
  },

  moreThanOneAddOrRemove(condition, ...temp) {
    return temp.forEach(([classes, ...els]) => {
      return condition
        ? CLASS_LIST_METHODS("add", classes, ...els)
        : CLASS_LIST_METHODS("remove", classes, ...els);
    });
  },

  // oneMultiEL
  // one class for mulit el
  oneForMulti(method, className, ...elements) {
    return CLASS_LIST_METHODS(method, className, ...elements);
  },
};

//=============================
//=============================
//=============================
//=============================
const SET_USER_INFO = (data) =>
  localStorage.setItem("userInfo", JSON.stringify(data));

const GET_USER_INFO = (key) => JSON.parse(localStorage.getItem(key));

//=====================
const RANDOM_NUMBER = (range, fixedNum = 0) =>
  (Math.random() * range).toFixed(fixedNum);

const RANDOM_ID = () => Math.random().toString().slice(2);
const RANDOM_PRICE = () => RANDOM_NUMBER(4000 + 450, 2);
const RANDOM_DISCOUNT = () => RANDOM_NUMBER(100);
const RANDOM_SHIPMENT_PRICE = () => RANDOM_NUMBER(200);

// GENERATE_RANDOM_DESCRIPTION -> FOR PRODUCTS
const RANDOM_LOREM_IPSUM = () => {
  const lorem = [
    "Fugiat veniam veniam do aute aliqua consequat eiusmod. Ullamco non qui consectetur laboris id veniam et anim laboris eu elit enim ut.",
    "Qui magna amet amet ea mollit consectetur commodo reprehenderit mollit Lorem aliqua voluptate. Ipsum culpa mollit ipsum voluptate fugiat incididunt aute.",
    "Aliquip nostrud irure ullamco ea laborum do eu ex amet nulla reprehenderit. Nostrud cupidatat ea id mollit do aliquip aute irure enim esse et proident.",
    "Duis aliquip nostrud consequat aliqua reprehenderit et aute deserunt. Laboris duis ea magna id ut adipisicing commodo adipisicing dolor elit mollit eu in irure.",
    "Consequat nisi elit pariatur non culpa qui ut. Elit in dolor pariatur cillum eiusmod fugiat duis velit elit deserunt qui ad.",
    "Ipsum Lorem non magna laboris deserunt. Laborum quis irure ex irure cupidatat ut aliquip et aliquip dolor nisi sit quis nisi.",
    "Anim anim ad amet ex exercitation do minim officia irure adipisicing eu minim ea. Ex mollit anim duis anim mollit pariatur laborum sint id deserunt.",
    "Laborum mollit velit proident ut qui nostrud irure do in laborum sint in ea. Sunt non enim et do pariatur.",
    "Et irure enim nostrud amet anim adipisicing veniam non. Eu ullamco irure esse id labore proident occaecat nulla nostrud.",
    "In non labore Lorem officia pariatur aute pariatur et ex. Adipisicing dolore quis ad commodo nisi cillum irure sint adipisicing anim ad nulla.",
    "Anim pariatur incididunt Lorem Lorem commodo fugiat cupidatat. Nulla eiusmod magna officia minim laboris magna quis excepteur ullamco non magna magna ad voluptate.",
  ];
  const idx = Math.trunc(Math.random() * lorem.length); //

  const result = lorem[idx];
  return result;
};

// GENERATE_PRODUCT_CARD_MARKUP ->
const GNRT_MAIN_PRC_MARKUP = (data) => {
  const { id, category, title, total, description, image } = data;

  return `
        <figure class ="cta--${category}__color" data-product="${id}">
          <div class="prc--card__heading">
            <img src="${image}" alt="" />
            <div class="actions">
              <button class="active">product</button>
              <button class="">details</button>
            </div>
          </div>

          <figcaption>
            <div class="prc--card__body">
              <div class="heading">
                <h5>${title}</h4>
                <small>
                  <span><ion-icon name="ellipse" class="icon"></ion-icon></span>
                  <span id="category">${category}</span>
                </small>
              </div>

              <p>
              ${description}
              </p>
            </div>
            <div class="prc--card__footer">
              <strong class="price">${total.price}</strong>

              <button class="main__btn btn add--to__cart">add to cart</button>
            </div>
          </figcaption>
        </figure>
`;
};

const GNRT_CART_PRC_MARKUP = (data) => {
  const { id, category, title, total, image } = data;

  return `
    <figure class="cart--aside__prc" data-product="${id}">
      <img src="${image}" alt="" />

      <figcaption>
        <h6>${title}</h6>
        <strong>$${total.price}</strong>
      </figcaption>

      <div class="cart--prc__quantity">

      
        <button id="incrementQuantityOfPrc">
          <ion-icon class="icon" name="chevron-up-outline"></ion-icon>
        </button>
        <input class="prc--quantity__input" type="number" min="0" max="6" value="1"/>
        <button id="decrementQuantityOfPrc">
          <ion-icon class="icon" name="chevron-down-outline"></ion-icon>
        </button>
        </div>

      <div></div>
    </figure>
  `;
};

//

export {
  manageClassList,
  SET_USER_INFO,
  GET_USER_INFO,
  RANDOM_PRICE,
  RANDOM_ID,
  RANDOM_LOREM_IPSUM,
  GNRT_MAIN_PRC_MARKUP,
  GNRT_CART_PRC_MARKUP,
  RANDOM_SHIPMENT_PRICE,
  RANDOM_DISCOUNT,
  CLASS_LIST_METHODS,
  MANAGE_CLASS_LIST,
};
