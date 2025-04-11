import { createSlice } from "@reduxjs/toolkit";

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birth_year: number;
};

type UserStateType = {
  loading: boolean;
  users: UserType[];
};

const initialState: UserStateType = {
  loading: false,
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state) => {
      console.log();
    },
  },
});
