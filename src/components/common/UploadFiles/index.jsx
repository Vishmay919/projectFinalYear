import { Box, styled, Button, Stack } from "@mui/material";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UploadBox = styled(Button)({
  margin: " 1rem 0",
  height: "10rem",
  width: "100%",
  border: " 2px dashed #3859F7",
  textTransform: "capitalize",
});
const UploadFile = ({ children }) => {
  return (
    <UploadBox component="label">
      <Stack sx={{ alignItems: "center" }}>
        <CloudUploadIcon sx={{ fontSize: "4rem" }} />
        {children}
      </Stack>
      <input hidden accept="image/*" multiple type="file" />
    </UploadBox>
  );
};

export default UploadFile;
