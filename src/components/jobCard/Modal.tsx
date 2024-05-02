import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "200px",
  maxWidth: "400px",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "16px"
};

export default function AboutUsModal({
  open,
  setOpen,
  aboutUs,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  aboutUs: string;
}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx = {{display: "flex" , gap: "70%"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            About Us
          </Typography>
            <Close onClick = {()=> handleClose()}/>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {aboutUs}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
