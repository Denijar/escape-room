import { Login } from "../../common/domain-types";
import _logins from "../data/login.data.json";

const logins: { [key: string]: Login } = _logins;

export default (username: string, password: string): boolean => {
  const login: Login = logins[username];
  return !!(login && login.password === password);
};
