import axios from "axios";
import jwtDecode from "jwt-decode";
import { StorageService } from "../../../Services/index";

export const AuthService = {
  login: async (credentials) => {
    const result = await axios.post("auth/signin", credentials);
    if (result.status === 200) {
      const token = await result.data.accessToken;
      const decodeToken = jwtDecode(token);
      console.log(`Role: ${decodeToken.role}`);
      StorageService.setAuthKey(token, decodeToken.exp);
      return decodeToken;
    }
    return false;
  },
};
