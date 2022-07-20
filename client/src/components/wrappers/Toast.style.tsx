import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const Toast= styled(ToastContainer) `
    top: 5em;
.Toastify__toast-container {
}
.Toastify__toast-container--top-right {
    margin-top: 200px;
}
.Toastify__toast {
  background: ${({ theme }) => theme.colors.navigationBar.secondary || "#82DBD8"};
  color: ${({ theme }) => theme.colors.common.text || "#FFF"};
  margin-bottom: 0.75em;
  min-height: 10px;
}

`