import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import menuReducer from "./features/menu/menuSlice";
import addReducer from "./features/add/addSlice";
import editReducer from "./features/edit/editSlice";
import deleteReducer from "./features/delete/deleteSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    add: addReducer,
    edit: editReducer,
    delete: deleteReducer,
  },
});
