import {toast} from 'react-toastify'

const  SuccessMessage = (message) => {
  return toast.success(message || "Operation Successful", {
    position: "top-right"})
  }

  
  const WarningMessage = (message) => {
    return toast.warning(message || "something went wrong",{
      position: "top-right"})
    }
  
  const ErrorMessage = (message) => {
    return toast.warning(message || "something went wrong",{
      position: "top-right"})
    }

    export {SuccessMessage ,WarningMessage , ErrorMessage }