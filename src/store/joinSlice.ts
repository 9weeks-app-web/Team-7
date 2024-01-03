import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JoinState {
  userData?: {
    agreeCarrierTerms?: boolean;
    agreeIdentification?: boolean;
    agreePrivacy?: boolean;
    agreeServiceTerms?: boolean;
    agreeTerms?: boolean;
    email?: string;
    password?: string;
    passwordConfirm?: string;
    phoneCertification?: string;
    phoneNumber?: string;
    username?: string;
    nickname?: string;
    onboarding?: string[];
    agreeRecruit?: boolean;
    agreeOpinion?: boolean;
    agreeProject?: boolean;
  };
  joinState?: {
    step1?: boolean;
    step2?: boolean;
    step3?: boolean;
  };
}

const initialState: JoinState = {};

const joinSlice = createSlice({
  name: "join",
  initialState,
  reducers: {
    saveData: (state, action: PayloadAction<JoinState>) => {
      state.userData = { ...state.userData, ...action.payload.userData };
      state.joinState = { ...state.joinState, ...action.payload.joinState };
    },
  },
});

export const { saveData } = joinSlice.actions;
export const selectJoin = (state: { auth: JoinState }) => state.auth;
export default joinSlice.reducer;
