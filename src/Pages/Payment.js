import React from "react";
import PaymentForm from "../Components/PaymentForm";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { RiMoneyPoundCircleFill } from "react-icons/ri";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Payment = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <button
          className="flex items-center gap-[.3rem] bg-[#F6F6F6] font-[600] p-[.5rem] rounded-[10px]"
          onClick={handleClickOpen}
        >
          <span className="text-[1.3rem]">
            <RiMoneyPoundCircleFill />
          </span>
          Update Payment Method
        </button>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <PaymentForm handleClose={handleClose} />
      </BootstrapDialog>
    </div>
  );
};

export default Payment;
