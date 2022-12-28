import {
  GET_USER_INFO,
  SET_USER_INFO,
  MANAGE_CLASS_LIST,
  USER_TYPE_OPTIONS_UI,
} from "./controller/controller.js";
const BTNS = {
  profileTooltip: document.querySelector("#userProfile"),
  userProfile: document.querySelector("#userProfileBtn"),
  deleteAccount: document.querySelector("#deleteAccountBtn"),
  logoutAccount: document.querySelector("#logoutAccountBtn"),
};

const PROFILE = {
  tooltipHandler: () => {
    const { profileTooltip } = BTNS;
    return MANAGE_CLASS_LIST.toggle(["active", profileTooltip]);
  },

  logoutHandler: () => {
    const { profileTooltip } = BTNS;
    const { check, moreThanOneAddOrRemove } = MANAGE_CLASS_LIST;
    let user = GET_USER_INFO("userInfo");
    if (!user) return;
    const isActive = check("active", profileTooltip);

    setTimeout(() => {
      user.isLoggedIn = false;
      SET_USER_INFO(user);
      moreThanOneAddOrRemove(isActive, ["active", profileTooltip]);
      USER_TYPE_OPTIONS_UI(user.isLoggedIn);
    }, 2000);
  },

  deleteHandler: () => {
    setTimeout(() => {
      localStorage.clear();
      USER_TYPE_OPTIONS_UI(false);
    }, 2000);
  },
};

const USER_PROFILE_HANDLER = function () {
  const { deleteAccount, logoutAccount, userProfile } = BTNS;
  const { logoutHandler, deleteHandler, tooltipHandler } = PROFILE;

  ///=====================
  userProfile.addEventListener("click", tooltipHandler);
  logoutAccount.addEventListener("click", logoutHandler);
  deleteAccount.addEventListener("click", deleteHandler);
};

export { USER_PROFILE_HANDLER };
