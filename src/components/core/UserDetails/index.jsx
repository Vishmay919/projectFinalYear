import { useEffect, useState } from "react";
import { firestore, storage } from "../../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import BtnButton from "@/components/common/BtnButton/BtnButton";
import UploadFile from "@/components/common/UploadFiles";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
const UserDetail = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [adharNo, setAdharNo] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [id, setId] = useState("1");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userRef = doc(firestore, `users/id-${id}`);
    // const imageRef = ref(storage, `UserImages/profilePic-${id}`);
    // const aadharRef = ref(storage, `UserAadhar/aadhar-${id}`);

    try {

      // await uploadBytes(aadharRef, documents);
      // await uploadBytes(imageRef, image);

      // let imgUrl = await getDownloadURL(
      //   ref(storage, `UserImages/profilePic-${id}`)
      // );

      // let aadharUrl = await getDownloadURL(
      //   ref(storage, `UserAadhar/aadhar-${id}`)
      // );

      const user = {
        name,
        age,
        phone,
        adharNo,
        profileImage
      };

      await setDoc(userRef, user, { merge: true });
      alert("Successfully set the user data");
    } catch (error) {
      alert(`Error: ${error}`);
    }

    setName("");
    setAge("");
    setAdharNo("");
    setPhone("");
    setProfileImage([]);

  };

  return (
    <Box>
      <Container sx={{ marginTop: "8rem" }}>
      <form onSubmit={handleSubmit}>
        <h3>User Details</h3>
        <Grid
          container
          sx={{ marginTop: "2rem", width: "100%" }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              sx={{ m: 1,ml:0, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={age}
              onChange={(e)=>setAge(e.target.value)}
              sx={{ m: 1,ml:0, width: "100%" }}
            />

            <UploadFile>Upload Aadhar Card </UploadFile>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              sx={{ m: 1,ml:0, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Aadhar Card Number"
              variant="outlined"
              sx={{ m: 1,ml:0, width: "100%" }}
              value={adharNo}
              onChange={(e)=>setAdharNo(e.target.value)}
            />
            <UploadFile>Upload your Photo</UploadFile>
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" color={"primary"}>Submit</Button>
      </form>
      </Container>
    </Box>

  );
};

export default UserDetail;
