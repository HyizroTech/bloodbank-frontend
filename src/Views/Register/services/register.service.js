import axios from "axios";

export const RegisterService = {
  registerDonor: async (credentials) => {
    const result = await axios.post("auth/register/donor", credentials);
    if (result.status === 200) {
      return true;
    } else {
      return false;
    }
  },

  registerBloodBank: async (credentials) => {
    const result = await axios.post("auth/register/BloodBank", credentials);
    if (result.status === 200) {
      return true;
    } else {
      return false;
    }
  },
};
