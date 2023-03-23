import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import BtnButton from "@/components/common/BtnButton/BtnButton";

export default function MetaMaskLogin() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
  });

  const connectWallet = async (e) => {
    e.preventDefault();
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        //Metamask installed
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      //Metamask uninstalled
      console.log("Please install MetaMask");
    }
  };
  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      //Metamask uninstalled
      console.log("Please install MetaMask");
    }
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <BtnButton color={"primary"} fn={connectWallet}>
        {walletAddress && walletAddress.length > 0
          ? `Connected: ${walletAddress.substring(
              0,
              6
            )}...${walletAddress.substring(38)}`
          : "Login"}
      </BtnButton>
      {/* <Button onClick={(e) => connectWallet(e)}>
        {walletAddress && walletAddress.length > 0
          ? `Connected: ${walletAddress.substring(
              0,
              6
            )}...${walletAddress.substring(38)}`
          : "Login"}
      </Button> */}
      {/* <Button color="inherit" onClick={connectWallet}></Button> */}
    </Box>
  );
}
