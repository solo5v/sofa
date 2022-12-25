import { STATE } from "../controller/data.js";
import { manageClassList } from "../helpers.js";

const MODAL = document.querySelector("#registerModal");
const MODAL_BTNS = {
  register: document.querySelector("#registerBtn"),
  login: document.querySelector("#loginRgsBtn"),
  signup: document.querySelector("#signRgsBtn"),
  closeModal: document.querySelector("#closeModalBtn"),
};

// ==========================
// MODAL-OBJ

const REGISTER_MODAL = {
  // ELEMNETS
  modal: MODAL,
  header: document.querySelector(".header"),
  menuBtn: document.querySelector("#menuBtn"),
  closeBtn: document.querySelector("#closeModalBtn"),

  // METHOD
  show() {
    const navIsOpen = manageClassList(
      "contains",
      "open__nav",
      REGISTER_MODAL.header
    );

    manageClassList("remove", "hidden", REGISTER_MODAL.modal);
    // the hidden class kill the animation
    setTimeout(() => {
      manageClassList("add", "active", REGISTER_MODAL.modal);
      REGISTER_MODAL.modal.showModal();
    }, 0.1);

    // CLOSE THE NAV IF THE MODAL NEED TO DISPLAY
    if (navIsOpen) {
      manageClassList("remove", "active", REGISTER_MODAL.menuBtn);
      manageClassList("remove", "open__nav", REGISTER_MODAL.header);
    }
  },

  close() {
    const modal = REGISTER_MODAL.modal;

    const handler = () => {
      REGISTER_MODAL.modal.close();
      manageClassList("add", "hidden", modal);
      manageClassList("remove", "active", modal);
    };

    // TRUE || FALSE
    const keyIsEscape = (e) =>
      e.key == "Escape" && manageClassList("contains", "active", modal);

    // Escape-Btn-Hadnler
    window.addEventListener("keydown", (e) => keyIsEscape(e) && handler());

    // Close-Btn-Handler
    REGISTER_MODAL.closeBtn.addEventListener("click", handler);
  },
};

// REGISTER_MODAL.close(); // DEFAULT-UI;
MODAL_BTNS.register.addEventListener("click", REGISTER_MODAL.show);

// ==========================
// REGISTER_TYPE

const REGISTER_TYPE_UI = function (mode) {
  const ASITDE_LOGIN = document.querySelector(".rgs--aside__login");
  const ASITDE_SIGINUP = document.querySelector(".rgs--aside__signup");
  switch (mode) {
    case "signup":
      STATE.registerMode = "signup";
      manageClassList("remove", "active", ASITDE_LOGIN);
      manageClassList("add", "active", ASITDE_SIGINUP);
      manageClassList("remove", "login__type", MODAL);
      manageClassList("add", "signup__type", MODAL);
      break;

    case "login":
      STATE.registerMode = "login";
      manageClassList("add", "active", ASITDE_LOGIN);
      manageClassList("remove", "active", ASITDE_SIGINUP);
      manageClassList("add", "login__type", MODAL);
      manageClassList("remove", "signup__type", MODAL);

      break;
  }
};

// DEFAULT UI
REGISTER_TYPE_UI("signup");

MODAL_BTNS.signup.addEventListener("click", () => REGISTER_TYPE_UI("signup"));
MODAL_BTNS.login.addEventListener("click", () => REGISTER_TYPE_UI("login"));

export { REGISTER_MODAL, REGISTER_TYPE_UI };
