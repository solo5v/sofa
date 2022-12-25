import { manageClassList, SET_USER_INFO, GET_USER_INFO } from "./helpers.js";
import { STATE } from "./controller/data.js";
import { REGISTER_MODAL, REGISTER_TYPE_UI } from "./UI/RegisterModal.js";

const USER_LOCG = GET_USER_INFO("userInfo")?.isLoggedIn;
const USER = STATE.user;

// FORM-EL
const REGISTER_FORM = document.querySelector("#registerForm");
const USER_INPUTS = {
  username: document.querySelector("#username"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
  checkbox: document.querySelector("#checkbox"),
};

// USER-TYPE-UI
const USER_TYPE_OPTIONS_UI = (isLoggedIn) => {
  const MAIN_NAV = document.querySelector(".hd--main__nav");
  const USER_LOGIN_BTNS = document.querySelector(".login__btn ");
  const USER_LOGIN_OPTIONS = document.querySelector("#userLoginOptions");

  if (isLoggedIn) {
    manageClassList("add", "cnt", MAIN_NAV);
    manageClassList("add", "hidden", USER_LOGIN_BTNS);
    manageClassList("add", "active", USER_LOGIN_OPTIONS);
    manageClassList("remove", "hidden", USER_LOGIN_OPTIONS);
  }
};

/* HANDLER-FORM-FUNCTIONLITY*/
const signupHandler = function ({ username, email, password, checkbox }) {
  // THE PARAM IS THE USER INPUTS

  const isValid =
    username.value && email.value && password.value && checkbox.checked;

  if (isValid) {
    USER.email = email.value.trim();
    USER.name = username.value.trim();
    USER.password = password.value.trim();

    setTimeout(() => {
      username.value = "";
      USER.userIsValid = true;
      SET_USER_INFO(USER);
      REGISTER_TYPE_UI("login");
    }, 3000);
  } else alert("Complete Your Form 😀");
};

const loginHandler = function ({ email, password }) {
  // THE PARAM IS THE USER INPUTS

  const user = GET_USER_INFO("userInfo");

  const isValid =
    user && user.userIsValid && email.value !== "" && password.value !== "";
  email.value === user.email && password.value === user.password;

  //====================

  if (isValid) {
    setTimeout(() => {
      email.value = "";
      password.value = "";
      user.isLoggedIn = USER.isLoggedIn = true;

      SET_USER_INFO(user);
      USER_TYPE_OPTIONS_UI(USER.isLoggedIn);
    }, 3000);
    REGISTER_MODAL.close();
  } else {
    alert("please check you information");
  }
};

const formSubmitionHandler = function (e) {
  e.preventDefault();

  switch (STATE.registerMode) {
    case "signup":
      return signupHandler(USER_INPUTS);

    case "login":
      return loginHandler(USER_INPUTS);
  }
};

if (USER_LOCG) {
  USER_TYPE_OPTIONS_UI(USER_LOCG);
}
REGISTER_FORM.addEventListener("submit", formSubmitionHandler);
