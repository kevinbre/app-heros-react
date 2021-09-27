import axios from "axios";
import { API_URL } from "./settings";

export async function loginService(email, password) {
  try {
    const response = await axios({
      url: `${API_URL}`,
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    });
    return response;
  } catch (error) {
    return error.message;
  }
}
