import { AuthenticationService } from ".";
import jwtDecode from "jwt-decode";

export const getUserId = () => {
  const currentUserToken = AuthenticationService.getCurrentUser();
  const decodedToken = jwtDecode(currentUserToken);
  return decodedToken.id;
};
