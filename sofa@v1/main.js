const products = [
  {
    id: "p1",
    descri: "The Worker Bee",
    img: "./img/chair-1.jpg",
    price: "525",
    details: {
      d1: "Work",
      d2: "Comfortable for 8h",
      d3: "Vegan leather",
      d4: "Weighs 22 kg",
    },
  },

  {
    id: "p2",

    descri: "The Chair 4/2",
    img: "./img/chair-2.jpg",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },

  {
    id: "p3",

    descri: "The Chair 4/2",
    img: "./img/chair-3.jpg",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },

  {
    id: "p5",

    descri: "The Chair 4/2",
    img: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },

  {
    id: "p6",

    descri: "The Chair 4/2",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },

  {
    id: "p7",

    descri: "The Chair 4/2",
    img: "https://images.unsplash.com/photo-1590411255052-ea52fd44c531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },
  {
    id: "p8",

    descri: "The Chair 4/2",
    img: "https://images.unsplash.com/photo-1629078692974-a778fc29497b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },
  {
    id: "p9",

    descri: "The Chair 4/2",
    img: "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },
  {
    id: "p10",

    descri: "The Chair 4/2",
    img: "https://images.unsplash.com/photo-1519961655809-34fa156820ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },
  {
    id: "p11",

    descri: "The Chair 4/2",
    img: "https://images.unsplash.com/photo-1634497885778-152eb6fd543d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },
  {
    id: "p12",

    descri: "The Chair 4/2",
    img: "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },
  {
    id: "p13",

    descri: "The Chair 4/2",
    img: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHNvZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },
  {
    id: "p14",

    descri: "The Chair 4/2",
    img: "https://images.unsplash.com/photo-1601905389683-fe1f1d0c3276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxzb2ZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },
  {
    id: "p15",

    descri: "The Chair 4/2",
    img: "https://plus.unsplash.com/premium_photo-1661598963345-566d7088927e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },
  {
    id: "p16",

    descri: "The Chair 4/2",
    img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    price: "1450",
    details: {
      d1: "Leisure and relaxing",
      d2: "Comfortable all day!",
      d3: "Organic cotton",
      d4: "Weighs 80 kg",
    },
  },
];
//----------------------------------


====================================
const productsCard = document.querySelector("#productsCard");

let cart = [];

const displayProduct = function () {
  products.map(({ descri, img, price, details: { d1, d2, d3, d4 }, id }) => {
    const markup = `  <figure class="product "  id="${id}">
    <img
      class="product-img"
      src="${img}"
      alt="choose your chair to save yourlife better than"
    />

    <div class="product-details-box">
      <h3 class="heading-tertiary">${descri}</h3>

      <ul class="product-details">
        <li>
          <ion-icon
            name="star-outline"
            class="product-icon icon"
          ></ion-icon>
          ${d1}
        </li>
        <li>
          <ion-icon
            name="time-outline"
            class="product-icon icon"
          ></ion-icon>
         ${d2}
        </li>
        <li>
          <ion-icon
            name="earth-outline"
            class="product-icon icon"
          ></ion-icon>

       ${d3}
        </li>
        <li>
          <ion-icon
            name="cube-outline"
            class="product-icon icon"
          ></ion-icon>
        ${d4}
        </li>
      </ul>

      <div class="price-box">
        <strong>${price}€</strong>

        <button class="normal-btn" id="addToCartBtn" onclick="addToCartBtnHandler(${id})">add to cart</button>
        <ion-icon
          name="heart-outline"
          class="product-icon icon"
        ></ion-icon>
      </div>
    </div>
                      </figure>`;

    productsCard.insertAdjacentHTML("beforeend", markup);
  });
};
displayProduct();

const shoppingCartProduct = JSON.parse(localStorage.getItem("products"));

// --------------
const shoppingCart = document.querySelector(".shopping__cart");
const cartBtn = document.querySelector("#goToCartBtn");
const closeBtn = document.querySelector(".close__btn");
const cartProductContainer = document.querySelector("#cartProducts");

const displayShoppingCartHandler = function () {
  return shoppingCartProduct?.forEach(({ descri, img, price, id }, idx) => {
    const shoppingCartMarkup = `
          <figure class="cart__product">

          <div class="shopping__product--details">
            <img src="${img}" alt="" class="shopping__product--img" />

            <ul>
              <li><h5 class="shopping__product--title">${descri}</h5></li>
              <li>Product Code: ${id}</li>
              <li>Price: ${price}</li>
            </ul>
          </div>

            <button class="" onclick="removeFromCartHandler(${id}, ${idx})">remove</button>
          </figure>
`;

    cartProductContainer.insertAdjacentHTML("beforeend", shoppingCartMarkup);
  });
};

displayShoppingCartHandler();

cartBtn.addEventListener("click", () => {
  shoppingCart.classList.add("cart__active");
});

closeBtn.addEventListener("click", () => {
  shoppingCart.classList.remove("cart__active");
});

// -----------------
const removeCartIcon = function () {
  const icon = document.querySelector(".shopping-cart__icon");
  if (shoppingCartProduct?.length > 0) {
    icon.style.display = "none";
  }
};
removeCartIcon();
//_-------------

// -------------
const addToCartBtnHandler = function (e) {
  // e.target.closest("figure")
  const productId = e.id;
  console.log(productId);

  products.forEach((pro, idx, arr) => {
    // to get the specific clicked on product and added on cart
    if (arr.findIndex(() => pro.id === productId) === 0) {
      cart.push(pro);
      const data = JSON.stringify(cart);
      localStorage.setItem("products", data);
    }
  });
};

// console.log(localStorage)
// --------------

const removeFromCartHandler = function (product, idx) {
  cartProductContainer.innerHTML = "";

  let products;
  for (let i = 0; i < shoppingCartProduct?.length; i++) {
    if (shoppingCartProduct[i].id === product.id) {
      shoppingCartProduct?.splice(idx, 1);
      products = shoppingCartProduct;

      localStorage.products = JSON.stringify(products);
    }
  }

  console.log(JSON.parse(localStorage.getItem("products")));

  return products?.forEach(({ descri, img, price, id }, idx) => {
    const markup = `
            <figure class="cart__product">

            <div class="shopping__product--details">
              <img src="${img}" alt="" class="shopping__product--img" />

              <ul>
                <li><h5 class="shopping__product--title">${descri}</h5></li>
                <li>Product Code: ${id}</li>
                <li>Price: ${price}</li>
              </ul>
            </div>

              <button class="normal-btn" onclick="removeFromCartHandler(${id}, ${idx})">remove</button>
            </figure>
  `;

    cartProductContainer.insertAdjacentHTML("beforeend", markup);
  });
};

// -------------------
//----------------------------------
// hide-other product

const product = document.querySelectorAll(".product");
console.log(product);

if ([...productsCard.children].length > 3) {
  productsCard.insertAdjacentHTML(
    "beforeend",
    `<div class="other__product">${product.map((el) => el)}</div>`
  );
}
/*----------slider-------------*/
const slider = document.querySelectorAll(".slide");
const dots = document.querySelector(".dots");
const imgBox = document.querySelector(".testimonials-img");
const txtBox = document.querySelector(".testimonials-txt-box");

const btnRight = document.querySelector(".slide__btn");

let currentSlide = 0;
const maxSlide = slider.length;
const dotsLength = maxSlide - 1;

for (let i = 0; i < slider.length; i++) {
  dots.insertAdjacentHTML("beforeend", `<div></div>`);
}

const slideDisaple = function () {
  slider.forEach((slide) => {
    slide.classList.remove("active");
  });
};

slider[0].classList.add("active");

btnRight.addEventListener("click", () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
    slideDisaple();
  } else {
    currentSlide++;
    slideDisaple();
  }

  slider[currentSlide].classList.add("active");
});

// -----------------------
// ACCORDION-HANDELR;
const accordsItems = document.querySelectorAll(".accord-item");
const accordHeading = document.querySelectorAll(".accordion-heading");
const accordBody = document.querySelectorAll(".accordion-txt-box");

accordsItems.forEach((accordItem) => {
  accordItem.addEventListener("click", (e) => {
    const target = e.target.closest(".accord-item");

    target.classList.toggle("active");

    if (target.classList.contains("active")) {
      target.children[1].classList.remove("hidden");
    } else {
      target.children[1].classList.add("hidden");
    }
  });
});

// ====================================
// ====================================
// ====================================
// ====================================
// ====================================

// const productsCard = document.getElementById("productsCard"); // parent of card

// const product = products
//   .map((product, idx) => {
//     return `  <figure class ="product product_${idx + 2}">
//         <img class ="product-img"
//               src  =${product.img}
//               alt  ="choose your chair to save yourlife better than"
//         />

//         <div class="product-details-box">
//           <h3 class="heading-tertiary">${product.descri}</h3>

//           <ul class="product-details">
//                   <li>
//                     <ion-icon name="star-outline" class="product-icon icon"></ion-icon>
//                     ${product.details.d1}
//                     </li>
//                   <li>
//                     <ion-icon name="time-outline" class="product-icon icon"></ion-icon>
//                     ${product.details.d2}
//                   </li>
//                   <li>
//                     <ion-icon name="earth-outline" class ="product-icon icon"></ion-icon>

//                     ${product.details.d3}
//                   </li>
//                   <li>
//                     <ion-icon name="cube-outline" class ="product-icon icon"></ion-icon>
//                     ${product.details.d4}
//                   </li>
//                 </ul>

//           <div class="price-box">
//               <strong>${product.price}€</strong>
//               <a href="#" class="normal-btn">add to cart</a>
//               <ion-icon name="heart-outline" class ="product-icon icon"></ion-icon>
//           </div>
//       </div>
//   <figure/>
//     `;
//   })
//   .forEach((el, idx) => (productsCard.innerHTML += el));
// // productsCard.insertAdjacentElement('beforeend', el)

// // otherProducts

// const productCard = document.querySelectorAll(".product"); // get product

// const wrapOtherPorducts = function () {
//   let start = 3;
//   for (let i = start; i < productCard.length; i++) {
//     productCard[i].classList.add("hidden");
//   }
// };
// wrapOtherPorducts();

// const otherLinkBtn = document.querySelector("#otherProductLink");

// otherLinkBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("clicked");
//   productCard.forEach((el) => {
//     console.log(el);
//     return el.classList.contains("hidden") ? el.classList.add("active") : "";
//   });
// });

// const slides = document.querySelectorAll(".slide");

// const btnLeft = document.querySelector(".slider__btn--left");
// const btnRight = document.querySelector(".slider__btn--right");

// let currentSlide = 0;
// let maxSlide = slides.length;

// const movingSlide = function (slide) {
//   // index of slide

//   slides.forEach((s, idx) => {
//     return (s.style.transform = `translateX(${100 * (idx - slide)}%) `);
//   });
// };

// movingSlide(0);

// // NEXT SLIDE
// const nextSlide = function () {
//   if (currentSlide === maxSlide - 1) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }

//   movingSlide(currentSlide);
// };

// const previousSlide = function () {
//   if (currentSlide === 0) {
//     currentSlide = maxSlide - 1;
//   } else {
//     currentSlide++;
//     currentSlide > maxSlide - 1 ? (currentSlide = 0) : "";
//   }
//   movingSlide(currentSlide);
// };

// btnRight.addEventListener("click", nextSlide);
// btnLeft.addEventListener("click", previousSlide);

// // use the keydown on slider

// document.addEventListener("keydown", (e) => {
//   e.key === "ArrowRight" && nextSlide();
//   e.key === "ArrowLeft" && previousSlide();
// });

// // playing by Dots
// const dotContainer = document.querySelector(".dots");

// const createDots = function () {
//   slides.forEach((_, i) => {
//     dotContainer.insertAdjacentHTML(
//       "beforeend",
//       `<button class="dots__dot" data-slide="${i}"></button>`
//     );
//   });
// };
// createDots();

// slider.forEach((s, idx, arr) => {
//   const nextSlide = () => {
//     currentSlide++;
//     arr[currentSlide].classList.toggle("active");
//   };
// });

// const movingSlide = function (slide) {
//   slider.forEach((s, idx) => {
//     // const target = `translateY(${100 * (idx - slide)}%)`;
//     // return (s.style.transform = target);

//     s.style.transform = `scale(${slide})`;
//   });
// };

// movingSlide(1);

// const nextSlide = function () {
//   if (currentSlide === maxSlide - 1) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }
//   movingSlide(currentSlide);
// };

// const prevSlide = function () {
//   if (currentSlide === 0) {
//     currentSlide = slider.length - 1;
//   } else {
//     currentSlide--;
//   }
//   return movingSlide(currentSlide);
// };

// // btnLeft.addEventListener("click", prevSlide);
// console.log(, currentSlide);

// slider.forEach((slide) => {
//   if (slide.classList.contains("active")) {
//     imgBox.style.transform = "scale(1)";
//     txtBox.style.transform = "scale(1)";
//   }
// });

// const num = [{ id: "p1" }, { id: "p3" }, { id: "p3" }];

// console.log(num[2]);
// console.log(num[2]);
// // console.log(num.indexOf(num));
