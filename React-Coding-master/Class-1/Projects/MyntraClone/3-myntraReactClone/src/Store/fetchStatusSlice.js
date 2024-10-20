import { createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'items',
  initialState:{
  fetchDone:false, //'FALSE --> PENDING AND 'TRUE'---> DONE
  currentlyFetching:  false,
},
  reducers: {
    markFetchDone: (state) => {
      return state.fetchDone=true;
    },
    markFecthingStarted: (state) => {
      return state.currentlyFetching=true;
  },
  markFecthingFinished: (state) => {
    return state.currentlyFetching=false;
},
}
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;

