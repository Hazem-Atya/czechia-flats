import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { GetFlats } from "Constants";
import type { RootState } from "Store";
import { FlatState } from "Types";
import { api } from "api";
import {RECORDS_PER_PAGE} from "Constants"
const initialState: FlatState = {
  page: 1,
  loading: false,
  error: false,
  data: [],
  totalPages: 10,
};


export const flatSlice = createSlice({
  name: "flats",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setFlats: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.data = payload.flats;
      state.page = Math.ceil((payload.pagination.skip)/RECORDS_PER_PAGE)+1;
      state.totalPages = (Math.ceil(payload.pagination.total_records/RECORDS_PER_PAGE));
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setLoading, setFlats, setError } = flatSlice.actions;

export const flatsSelector = (state: RootState) => state.flats;
export const getFlats = (state: RootState) => state.flats.data;
export const getLoading = (state: RootState) => state.flats.loading;
export const getError = (state: RootState) => state.flats.error;

export default flatSlice.reducer;

// fetch flats per page
export function fetchFlatsPerPage(skip: number, limit: number) {
  return async (dispatch: Dispatch) => {
    api
      .get(GetFlats, { params: { skip, limit } })
      .then((response) => {
       // console.log(response);
        const data  = response.data;
        dispatch(setFlats(data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}
