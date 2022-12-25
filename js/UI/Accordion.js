import { FAQ } from "../controller/data.js";
import { manageClassList } from "../helpers.js";

// // 1. DISPLAY-DATA

const generateAccordMarkup = function (data, idx) {
  const { question, description, points } = data;
  const markup = `
  <article class="accord" data-accord="${idx + 1}" >
                  <header>
                    <div>
                      <span>
                        <ion-icon name="infinite-outline" class="icon"></ion-icon>
                      </span>
                      <h6>${question}</h6>
                    </div>

                    <span>
                      <ion-icon name="caret-down-outline" class="icon"></ion-icon>
                    </span>
                  </header>

                  <div class="accord__body">
                    <p>${description}</p>

                    <ul>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      </li>
                      <li>
                        Quasi accusamus corporis totam tempora suscipit ab
                        obcaecati.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      </li>
                      <li>
                        Quasi accusamus corporis totam tempora suscipit ab
                        obcaecati.
                      </li>
                    </ul>
                  </div>
                </article>`;

  return markup;
};

const displayAccord = function () {
  const parentEl = document.querySelector("#accordion");

  FAQ.map((accordData, idx) => {
    const accordMarkup = generateAccordMarkup(accordData, idx);
    parentEl.insertAdjacentHTML("beforeend", accordMarkup);
  });
};

displayAccord();

// 2. ACCORD-BEHAVIOR-btnHandler

const accordHeaders = document.querySelectorAll(".accord header");

accordHeaders.forEach((hd, idx) => {
  hd.addEventListener("click", (e) => {
    const accord = e.target.closest("article");

    manageClassList("toggle", "active", accord);

    removeOpen(idx);
  });
});

function removeOpen(idx) {
  const accords = document.querySelectorAll(".accord");

  accords.forEach((acc, idx2) => {
    if (idx != idx2) {
      acc.classList.remove("active");
    }
  });
}
