import { createSlice } from "@reduxjs/toolkit";
import Utils from "../utils/utils";

export const reducer = createSlice({
  name: "appReducer",
  initialState: {
    user: null,
    isLogged: false,
    loader: false,
    toast: [
      {
        id: Utils.generateId(),
        message: 'success message',
        duration: 1500,
        type: 'success'
      },
      {
        id: Utils.generateId(),
        message: 'error message',
        duration: 2500,
        type: 'error'
      },
      {
        id: Utils.generateId(),
        message: 'info message',
        duration: 3500,
        type: 'info'
      },
      {
        id: Utils.generateId(),
        message: 'warning message',
        duration: 4500,
        type: 'warning'
      },
      {
        id: Utils.generateId(),
        message: 'message',
        duration: 5000,
        type: 'msg'
      },
    ],
  },

  reducers: {
    setLogged: (state) => {
      state.isLogged = true;
    },
    setToast: (state, { payload }) => {
      state.toast = [...state.toast, { ...payload, id: Utils.generateId() }]
    },
    removeToast: (state, { payload }) => {
      let _toasts = state.toast;
      if (payload) {
        let _index = _toasts.findIndex(x => x.id === payload)
        _toasts.splice(_index, 1);
      } else {
        state.toast = _toasts.slice(1);
      }
    },
  },
});

export const {
  setLogged,
  setToast,
  removeToast
} = reducer.actions;

export default reducer.reducer;