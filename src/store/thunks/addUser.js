import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("user/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });
  return response.data;

  //DEV ONLY!!!
  const pause = (duration) => {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  };
});

export { addUser };
