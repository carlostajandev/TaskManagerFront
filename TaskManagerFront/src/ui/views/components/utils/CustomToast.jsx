
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CustomToast = ({ message, type }) => {
  toast.success(message, {
    type: type,
  });
};
