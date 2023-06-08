import { createSlice } from "@reduxjs/toolkit";
import Utils from "../utils/utils";

// {
//   id: Utils.generateId(),
//   message: 'success message',
//   duration: 1500,
//   type: ['success','warning','error','info','message'],
// }

export const reducer = createSlice({
  name: "appReducer",
  initialState: {
    user: null,
    isLogged: false,
    loader: false,
    toast: [],
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