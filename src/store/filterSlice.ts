import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  minExperience: number| undefined;
  companyName: string;
  location:string;
  remoteOnsite: string[];
  techStack: string[];
  role: string;
  minBasePay: number;
}

const initialState: FilterState = {
  minExperience: undefined,
  companyName: "",
  location: "",
  remoteOnsite: [],
  techStack: [],
  role: "",
  minBasePay: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateMinExperience(state, action: PayloadAction<number>) {
      state.minExperience = action.payload;      
    },
    updateCompanyName(state, action: PayloadAction<string>) {
      state.companyName = action.payload;
    },
    updateLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    updateIsRemote(state, action: PayloadAction<string[]>) {
      state.remoteOnsite = action.payload;
    },
    updateTechStack(state, action: PayloadAction<string[]>) {
      state.techStack = action.payload;
    },
    updateRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
    updateMinBasePay(state, action: PayloadAction<number>) {
      state.minBasePay = action.payload;
    },
  },
});

export const {
  updateMinExperience,
  updateCompanyName,
  updateLocation,
  updateIsRemote,
  updateTechStack,
  updateRole,
  updateMinBasePay,
} = filterSlice.actions;

export default filterSlice.reducer;
