import { mainInstance } from "./apiInstances";

export const apiGetUserList = () => mainInstance.get("users");
