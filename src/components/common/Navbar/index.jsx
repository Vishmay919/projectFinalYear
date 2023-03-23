import { AppBar, Container, styled, Box, Button, Stack } from "@mui/material";
import React from "react";
import mypic from "@/images/Logo/Vector.png";
import Image from "next/image";
import WebButton from "../BtnButton/WebButton";
import BtnButton from "../BtnButton/BtnButton";
import MetaMaskLogin from "@/components/core/MetaMaskLogin";
const Nav = styled(Box)({
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  display: "flex",
  background: "#fff",
  padding: "20px 0",
});
const NavItem = styled(Button)({
  fontSize: "15px",
  marginRight: "2px",
  textTransform: "capitalize",
  color: "inherit",
});

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Nav>
          <Container>
            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Stack
                direction={"row"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={mypic} alt="Logo" width="50" />
                <NavItem sx={{ marginLeft: 2 }}>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
              </Stack>
              {/* <BtnButton color={"primary"}>Login</BtnButton> */}
              <MetaMaskLogin></MetaMaskLogin>
              {/* <Button
                color="inherit"
                sx={{
                  background: "#3859F7",
                  color: "white",
                  borderRadius: "2rem",
                  fontSize: "15px",
                  textTransform: "capitalize",
                  padding: "0 2rem ",
                }}
              >
                Login
              </Button> */}
            </Stack>
          </Container>
        </Nav>
      </AppBar>
    </>
  );
};

export default Navbar;
