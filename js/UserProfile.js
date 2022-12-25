import { manageClassList, GET_USER_INFO, SET_USER_INFO } from "./helpers.js";
import { STATE } from "./controller/data.js";

const USER_PROFILE_BTN = document.querySelector("#userProfileBtn");
const USER_PROFILE_TOOLTIP = document.querySelector("#userProfile");

const USER_LOGIN_OPTIONS = document.querySelector("#userLoginOptions");

const USER_LOGIN_BTNS = document.querySelector(".login__btn ");

const USER_PROFILE_HANDLER = function () {
  const deleteAccountBtn = document.querySelector("#deleteAccountBtn");
  const logoutAccountBtn = document.querySelector("#logoutAccountBtn");

  const tooltipHandler = () =>
    manageClassList("toggle", "active", USER_PROFILE_TOOLTIP);

  const logoutHandler = () => {
    const USER = GET_USER_INFO("userInfo");
    if (USER) {
      USER.isLoggedIn = false;
      SET_USER_INFO(USER);

      if (USER.isLoggedIn === false) {
        manageClassList("remove", "active", USER_PROFILE_TOOLTIP);
        manageClassList("remove", "hidden", USER_LOGIN_BTNS);
        manageClassList("remove", "active", USER_LOGIN_OPTIONS);
        manageClassList("add", "hidden", USER_LOGIN_OPTIONS);
      }
    }
  };

  const deleteAccountHandler = () => {
    localStorage.clear();

    manageClassList("remove", "hidden", USER_LOGIN_BTNS);
    manageClassList("remove", "active", USER_LOGIN_OPTIONS);
    manageClassList("add", "hidden", USER_LOGIN_OPTIONS);
  };

  ///=====================
  USER_PROFILE_BTN.addEventListener("click", tooltipHandler);
  logoutAccountBtn.addEventListener("click", logoutHandler);
  deleteAccountBtn.addEventListener("click", deleteAccountHandler);
};

USER_PROFILE_HANDLER();
