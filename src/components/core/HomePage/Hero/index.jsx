import React from "react";
import Image from "next/image";
import { Container, Grid, Box, styled, Stack } from "@mui/material";
import mypic from "@/images/images/headerpicture.png";
import BtnButton from "@/components/common/BtnButton/BtnButton";

const Hero = () => {
  return (
    <Container sx={{ marginTop: "8rem" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          xs={6}
          sx={{
            paddingRight: 4,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Modern NFT Real Estate</h1>
            <div>
              <p>
                We provide a complete service for the sale, purchase of real
                estate.
              </p>
              <BtnButton color={"primary"}>Explore</BtnButton>
              <BtnButton color={"secondary"}>Contact us</BtnButton>
            </div>
          </div>
        </Grid>
        <Grid xs={6}>
          <div sx={{ marginLeft: "auto" }}>
            <Image src={mypic} alt="Logo" width="500" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
