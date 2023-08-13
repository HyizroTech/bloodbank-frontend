import { AuthenticationService } from "../../../Services";
import jwtDecode from "jwt-decode";

export const getDonorId = () => {
  const currentUserToken = AuthenticationService.getCurrentUser();
  const decodedToken = jwtDecode(currentUserToken);
  return decodedToken.id;
};
