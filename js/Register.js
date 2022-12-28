import {
  STATE,
  TOAST,
  REGISTER_MODAL,
  REGISTER_TYPE_UI,
  SET_USER_INFO,
  GET_USER_INFO,
  MANAGE_CLASS_LIST,
} from "./controller/controller.js";

const USER_TYPE_OPTIONS_UI = (isLoggedIn) => {
  const MAIN_NAV = document.querySelector(".hd--main__nav");
  const USER_LOGIN_BTNS = document.querySelector(".login__btn ");
  const USER_LOGIN_OPTIONS = document.querySelector("#userLoginOptions");
  const { moreThanOneAddOrRemove } = MANAGE_CLASS_LIST;

  moreThanOneAddOrRemove(
    isLoggedIn,
    ["cnt", MAIN_NAV],
    ["hidden", USER_LOGIN_BTNS],
    ["active", USER_LOGIN_OPTIONS]
  );
};

const signupHandler = function (inputs, user) {
  // THE PARAM IS THE USER INPUTS
  // user is from state NOT localSTG
  const { username, email, password, checkbox } = inputs;

  const isValid =
    username.value && email.value && password.value && checkbox.checked;

  if (isValid) {
    user.email = email.value.trim();
    user.name = username.value.trim();
    user.password = password.value.trim();

    setTimeout(() => {
      username.value = "";
      user.userIsValid = true;
      user.registerMode = "login";

      SET_USER_INFO(user);
      REGISTER_TYPE_UI("login");
    }, 3000);
    //
  } else TOAST("warraing", "Complete Your Form!! 😀");
};

const loginHandler = function (inputs, user) {
  // THE PARAM IS THE USER INPUTS
  const { email, password } = inputs;

  if (user == null || user == undefined) {
    TOAST(
      "alert",
      "Your email is not found,  First Time? Let's Create An Account!"
    );
    throw new Error("Check User");
  }

  const isValid =
    user &&
    user.userIsValid &&
    user.registerMode === "login" &&
    email.value !== "" &&
    password.value !== "" &&
    email.value === user.email &&
    password.value === user.password;

  //====================
  if (isValid) {
    setTimeout(() => {
      email.value = "";
      password.value = "";
      user.isLoggedIn = user.isLoggedIn = true;

      SET_USER_INFO(user);
      USER_TYPE_OPTIONS_UI(user.isLoggedIn);
      REGISTER_MODAL.close();
    }, 3000);

    //
  } else TOAST("warraing", "Please Check Your Information ...!! 😀");
};

const REGISTER_FORM_HANDLER = () => {
  const REGISTER_FORM = document.querySelector("#registerForm");
  const USER_INPUTS = {
    username: document.querySelector("#username"),
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
    checkbox: document.querySelector("#checkbox"),
  };
  const isLoggedIn = GET_USER_INFO("userInfo")?.isLoggedIn;

  const formSubmitionHandler = function (e) {
    try {
      e.preventDefault();
      const user = GET_USER_INFO("userInfo");
      const USER = STATE.user;

      switch (STATE.registerMode) {
        case "signup":
          return signupHandler(USER_INPUTS, USER);

        case "login":
          return loginHandler(USER_INPUTS, user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoggedIn) USER_TYPE_OPTIONS_UI(isLoggedIn);
  return REGISTER_FORM.addEventListener("submit", formSubmitionHandler);
};

export { REGISTER_FORM_HANDLER, USER_TYPE_OPTIONS_UI };
