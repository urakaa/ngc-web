import { toast as reactToastify } from "react-toastify";

export const invalidPassword =
  "8-с дээш урттай ба дор хаяж 1 жижиг үсэг, 1 том үсэг, 1 тоо оруулна уу.";

export const defaultPageSize = 10;

const toastAttr = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
};

export const toast = (text) => reactToastify.error(text, toastAttr);

export const successToast = (text) => reactToastify.success(text, toastAttr);

export const NonDashboardRoutes = [
  "/auth",
  "/auth/forgot",
  "/auth/change",
  "/auth/reset-password",
  "/_error",
  "/500",
];

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function lowercase(string) {
  return string.toLowerCase();
}

export function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/ (.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/ /g, "");
}
