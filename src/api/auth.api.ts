import { ICredentialLogin } from "@/interface";
import apiClient from "@/lib/apiClient";

export function userLogin(payload: ICredentialLogin) {
  return apiClient("/auth/login", { method: "POST", body: payload });
}
