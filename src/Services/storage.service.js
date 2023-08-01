import moment from "moment";
const AUTH_KEY = "at-auth";

export const StorageService = {
  setAuthKey: (value, expiryDate) => {
    if (value === undefined) localStorage.removeItem(AUTH_KEY);
    else {
      const expiry = moment().add(expiryDate, "ms");
      localStorage.setItem(AUTH_KEY, JSON.stringify({ value, expiry }));
    }
    return true;
  },
  getAuthKey: () => {
    const valueRaw = localStorage.getItem(AUTH_KEY);
    if (!valueRaw) return undefined;
    return JSON.parse(valueRaw);
  },
};
