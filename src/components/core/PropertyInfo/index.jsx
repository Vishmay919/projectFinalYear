import { useState } from "react";
import BtnButton from "@/components/common/BtnButton/BtnButton";
import UploadFile from "@/components/common/UploadFiles";
import { Box, Button, Container, Grid, TextField } from "@mui/material";

import { doc, setDoc } from "firebase/firestore";
import { firestore, storage } from "../../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";



const PropertyInfo = () => {
  const [propertyImages, setPropertyImages] = useState([]);
  const [propertyDocs, setPropertyDocs] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("1");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userRef = doc(firestore, `properties/id-${id}`);
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

      const property = {
        name,
        email,
        phone,
        address,
        area,
        price,
        propertyImages,
        propertyDocs,
      };

      await setDoc(userRef, property, { merge: true });
      alert("Successfully set the property data");
    } catch (error) {
      alert(`Error: ${error}`);
    }

    setName("");
    setEmail("");
    setAddress("");
    setArea("");
    setPrice("");
    setPhone("");
    setPropertyImages([]);
    setPropertyDocs([]);
  };

  return (
    <Container sx={{ marginTop: "8rem" }}>
      <h3>Property Details</h3>
      <form onSubmit={handleSubmit }>
      <Grid
        container
        sx={{ marginTop: "2rem", width: "100%" }}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            sx={{ m: 1,ml:0, width: "100%" }}
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Property Address"
            variant="outlined"
            sx={{ m: 1,ml:0, width: "100%" }}
            type="text"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />
          {/* <TextField
            id="outlined-basic"
            label="Number of Bedroom"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
                        value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Number of Kitchen"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
                        value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Property  type"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
                        value={name}
            onChange={(e)=>setName(e.target.value)}
          /> */}
          <TextField
            hidden
            id="outlined-basic"
            label="Property  price"
            type="number"
            variant="outlined"
            sx={{ m: 1,ml:0, width: "100%" }}
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />

          <UploadFile >Upload Previous Sale Deed </UploadFile>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            sx={{ m: 1,ml:0, width: "100%" }}
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ m: 1,ml:0, width: "100%" }}
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          {/* <TextField
            id="outlined-basic"
            label="Pin Code"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          /> */}
          <TextField
            id="outlined-basic"
            label="Property  Area (sq. ft)"
            variant="outlined"
            type="number"
            value={area}
            onChange={(e)=>setArea(e.target.value)}
            sx={{ m: 1,ml:0, width: "100%" }}
          />
          {/* <TextField
            id="outlined-basic"
            label="Number of Bathroom"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          /> */}
          {/* <TextField
            id="outlined-basic"
            label="Property  Name"
            variant="outlined"
            sx={{ m: 1, width: "100%" }}
          /> */}
          <UploadFile>Upload Property Images </UploadFile>
        </Grid>
      </Grid>
      <Button variant="contained" type="submit">Submit</Button>
      </form>
      {/* <BtnButton color={"primary"}>Submit</BtnButton> */}
    </Container>
  );
};

export default PropertyInfo;
