import { STATE, MANAGE_CLASS_LIST } from "../controller/controller.js";

const MODAL = {
  modal: document.querySelector("#registerModal"),
  header: document.querySelector(".header"),
  menuBtn: document.querySelector("#menuBtn"),
  loginBtn: document.querySelector("#loginRgsBtn"),
  signupBtn: document.querySelector("#signRgsBtn"),
  asideLogin: document.querySelector(".rgs--aside__login"),
  asideSignup: document.querySelector(".rgs--aside__signup"),
  registerBtn: document.querySelector("#registerBtn"),
  closeModalBtn: document.querySelector("#closeModalBtn"),
};

const REGISTER_MODAL = {
  // METHOD
  show() {
    const { header, modal } = MODAL;
    const navIsOpen = MANAGE_CLASS_LIST.check("open__nav", header);

    MANAGE_CLASS_LIST.oneForMulti("remove", "hidden", modal);
    setTimeout(() => {
      // the hidden class kill the animation
      MANAGE_CLASS_LIST.oneForMulti("add", "active", modal);

      modal.showModal();
    }, 0.1);

    // CLOSE THE NAV IF THE MODAL NEED TO DISPLAY
    MANAGE_CLASS_LIST.moreThanOneAddOrRemove(
      navIsOpen,
      ["active", modal],
      ["open__nav", header]
    );
  },

  close() {
    const { modal } = MODAL;
    const { oneForMulti, diffrMethodAndClass } = MANAGE_CLASS_LIST;

    oneForMulti("remove", "active", modal);
    setTimeout(() => {
      // the hidden class kill the animation
      modal.close();
      oneForMulti("add", "hidden", modal);

      // KILL THE ENIMATE
      // diffrMethodAndClass(modal, ["add", "hidden"], ["remove", "active"]);
    }, 0.2);
  },
};

const REGISTER_TYPE_UI = function (mode) {
  const { asideLogin, asideSignup, modal } = MODAL;
  const { allDiffr, diffrMethodAndClass } = MANAGE_CLASS_LIST;

  switch (mode) {
    case "signup":
      STATE.registerMode = "signup";

      allDiffr(
        ["remove", "active", asideLogin],
        ["add", "active", asideSignup]
      );
      diffrMethodAndClass(
        modal,
        ["remove", "login__type"],
        ["add", "signup__type"]
      );
      break;

    case "login":
      STATE.registerMode = "login";
      allDiffr(
        ["add", "active", asideLogin],
        ["remove", "active", asideSignup]
      );

      diffrMethodAndClass(
        modal,
        ["add", "login__type"],
        ["remove", "signup__type"]
      );
      break;
  }
};

const REGISTER_MODAL_UI = () => {
  const { registerBtn, closeModalBtn, signupBtn, loginBtn, modal } = MODAL;
  const { show, close } = REGISTER_MODAL;
  const { check } = MANAGE_CLASS_LIST;

  // DEFAULT UI
  close();
  REGISTER_TYPE_UI("signup");

  // Escape BTN
  const keyIsValid = (e) => {
    return e.key == "Escape" && check("active", modal);
  };

  //==============
  //__HANDLER
  registerBtn.addEventListener("click", show);
  closeModalBtn.addEventListener("click", close);
  window.addEventListener("keydown", (e) => keyIsValid(e) && close());
  loginBtn.addEventListener("click", () => REGISTER_TYPE_UI("login"));
  signupBtn.addEventListener("click", () => REGISTER_TYPE_UI("signup"));
};

export { REGISTER_MODAL, REGISTER_TYPE_UI, REGISTER_MODAL_UI };
