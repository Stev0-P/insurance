import { Typography, TextField, Divider, Button, } from "@mui/material";
import { Box, Container} from "@mui/system";
import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CssBaseline, } from "@mui/material";
import Navbar from "./sections/NavBar";
import heroBackgroundImage from "../images/baner.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Form = () => {
  const navigate = useNavigate();
  const submit = () => {
    
   const fetchApi = async () => {
      try {
        await axios.post("13.42.30.104:5000/formAPI/", {
          regNumber: formik.values.regNumber,
          carPurchaseDate: formik.values.carPurchaseDate,
          title: formik.values.title,
          fullName: formik.values.fullName,
          dob: formik.values.dob,
          fullAddress: formik.values.fullAddress,
          postCode: formik.values.postCode,
          email: formik.values.email,
          number: formik.values.number,
          whenLicense: formik.values.whenLicense,
          accidentClaims: formik.values.accidentClaims,
          penaltyPoints: formik.values.penaltyPoints,
          policyStartDate: formik.values.policyStartDate,
          noClaimsBonus: formik.values.noClaimsBonus,
          prevInsurancePrice: formik.values.prevInsurancePrice,

          //add Drivers
          fullNameAdd: formik.values.fullNameAdd,
          dobAdd: formik.values.dobAdd,
          whenLicenseAdd: formik.values.whenLicenseAdd,
          accidentClaimsAdd: formik.values.accidentClaimsAdd,
          penaltyPointsAdd: formik.values.penaltyPointsAdd,
          noClaimsBonusAdd: formik.values.noClaimsBonusAdd,

          blackBox: formik.values.noClaimsBonusAdd,
          
          
        });
      } catch (err) {
        console.log(err);
        
      }
    };
    fetchApi();
    navigate("/completed");
    
  
  };

    const formik = useFormik({
        initialValues: {
          
          regNumber: '',
          carPurchaseDate: '',

          title: '',
          fullName: '',
          dob: '',
          fullAddress: '',
          postCode: '',
          email: '',
          number: '',
          whenLicense: '',
          accidentClaims: '',
          penaltyPoints: '',
          policyStartDate: '',
          noClaimsBonus: '',
          prevInsurancePrice: '',

          //add Drivers
          fullNameAdd: '',
          dobAdd: '',
          whenLicenseAdd: '',
          accidentClaimsAdd: '',
          penaltyPointsAdd: '',
          noClaimsBonusAdd: '',

          blackBox: '',

        },
        validationSchema: Yup.object({
            regNumber: Yup.string()
            .max(8, 'Must be 8 characters or less')
            .required('Required'),
            carPurchaseDate: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            title:  Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            fullName: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
            dob: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
            postCode: Yup.string()
             .max(6, 'Must be 6 characters or less')
             .required('Required'),
            fullAddress: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            number: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
            whenLicense: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            accidentClaims: Yup.string()
             .max(200, 'Explain if you have any accidents, or just say None if there is none')
             .required('Required'),
            penaltyPoints: Yup.string()
             .max(20, 'Let us know how many or just type in None if you dont have any')
             .required('Required'),
            policyStartDate: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            noClaimsBonus: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
            prevInsurancePrice: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),

            //additional driver------------------------

            fullNameAdd: Yup.string()
             .max(15, 'Must be 15 characters or less'),
            dobAdd: Yup.string()
             .max(20, 'Must be 20 characters or less'),
            whenLicenseAdd: Yup.string()
            .max(20, 'Must be 20 characters or less'),
            accidentClaimsAdd: Yup.string()
             .max(15, 'Must be 15 characters or less'),
            penaltyPointsAdd: Yup.string()
             .max(20, 'Must be 20 characters or less'),
            noClaimsBonusAdd: Yup.string()
             .max(20, 'Must be 20 characters or less') ,
          
      
            blackBox: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
          
        }) ,
        onSubmit: values => {
         // alert(JSON.stringify(values, null, 2));
        },
      });


    

    return (
<CssBaseline>
<React.Fragment> 
<Container
          disableGutters
          maxWidth="false"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}>
            <Navbar />
            <Box
      sx={{
        p: 1,
        position: "relative",
        backgroundImage: `url("${heroBackgroundImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 64%",
        backgroundSize: "cover",
       
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none"}}
        src={heroBackgroundImage}
        alt="increase priority"
      />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <Box mt={10} mb={5}  sx={{ maxWidth: 752, margin: 5 }}>
            
          <Typography variant="h2" color="initial" mb={5} textAlign="center"  sx={{outline: "white", margin: 3,  zIndex: 4}}>
           M9 Insurance
          </Typography>
    

          <Typography
            variant="body1"
            color="white"
            align="center"
            sx={{ textAlign: "center" }}
          >
            We guarantee to provide you with the lowest quote available! 
          </Typography>

          <Box
            mt={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            <Button variant="outlined" size="large" color="warning"  onClick={() => window.location = 'mailto:m9insurance@outlook.com'}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
           <Box>
            <Typography variant="h3" sx={{display: "flex", margin: 2, font: "bold"}}>
                Fill In the Form To Receive the Quote!
            </Typography>
           </Box>
           <Box sx={{height: "5vh", maxWidth: "80%", backgroundColor: "orange", borderTopRightRadius: "2vh"}}></Box>
        <Box
        
        sx={{
            flexDirection: "column",
             textAlign: "center",
             margin: 5,
             

        }}>

        
        <form onSubmit={() => formik.handleSubmit}>
         <Box>
      
        <TextField id="regNumber" label="Reg. Number" variant="outlined"  
         name="regNumber"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.regNumber}
         sx= {{marginBottom: 2, 
               marginTop: 2}}/>
       {formik.touched.regNumber && formik.errors.regNumber ? (
         <div>{formik.errors.regNumber}</div>
       ) : null}

        </Box>
        <Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
       
        <Divider sx={{width: {lg: '40%', md: '60%', sm: '100%'}, }}/>
        </Box>
     <Box>
     
       <TextField id="carPurchaseDate" label="Car Purchase Date " variant="outlined"  
         name="carPurchaseDate"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.carPurchaseDate}
         sx= {{marginBottom: 2, 
            marginTop: 2}}/>
       {formik.touched.carPurchaseDate && formik.errors.carPurchaseDate ? (
         <div>{formik.errors.carPurchaseDate}</div>
       ) : null}

</Box>
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box>


       <TextField id="title" label="Title " variant="outlined"  
         name="title"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
         sx= {{marginBottom: 2, 
            marginTop: 2}}
         />
       {formik.touched.title && formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}


 
 </Box>
 <Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
 <Box>
 
      
       <TextField id="fullName" label="Full Name " variant="outlined"  
         name="fullName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.fullName}
         sx= {{marginBottom: 2, 
            marginTop: 2}}/>
       {formik.touched.fullName && formik.errors.fullName ? (
         <div>{formik.errors.fullName}</div>
       ) : null}

</Box>
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box> 
       <TextField id="dob" label="Date of Birth" variant="outlined"  
         name="dob"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.dob}
         sx= {{marginBottom: 2, 
            marginTop: 2}}/>
       {formik.touched.dob && formik.errors.dob ? (
         <div>{formik.errors.dob}</div>
       ) : null}

</Box>
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box>

       <TextField id="postCode" label="Post Code " variant="outlined"  
         name="postCode"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.postCode}
         sx= {{marginBottom: 2, 
            marginTop: 2}}/>
       {formik.touched.postCode && formik.errors.postCode ? (
         <div>{formik.errors.postCode}</div>
       ) : null}
</Box>
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box> 
       <TextField id="fullAddress" label="Full Address " variant="outlined"  
         name="fullAddress"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.fullAddress}
         sx= {{marginBottom: 2, 
            marginTop: 2}}/>
       {formik.touched.fullAddress && formik.errors.fullAddress ? (
         <div>{formik.errors.fullAddress}</div>
       ) : null}

</Box>
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box>

       <TextField id="email" label="Email " variant="outlined"  
         name="email"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
         sx= {{marginBottom: 2, 
            marginTop: 2}}/>
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 
 </Box>
 <Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
 <Box>
 <TextField id="number" label="Tel. Number " variant="outlined"  
         name="number"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.number}
         sx= {{marginBottom: 2, 
            marginTop: 2}}/>
       {formik.touched.number && formik.errors.number ? (
         <div>{formik.errors.number}</div>
       ) : null}
 
 </Box>
 <Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
 <Box>


 <TextField id="whenLicense" label="License Start Date " variant="outlined"  
         name="whenLicense"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.whenLicense}
         sx= {{marginBottom: 2, 
            marginTop: 2}}/>
       {formik.touched.whenLicense && formik.errors.whenLicense ? (
         <div>{formik.errors.whenLicense}</div>
       ) : null}

</Box>
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box>

<TextField id="accidentClaims" label="Accident Claims " variant="outlined"  
         name="accidentClaims"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.accidentClaims}
         sx= {{marginBottom: 2, 
            marginTop: 2}}/>
       {formik.touched.accidentClaims && formik.errors.accidentClaims ? (
         <div>{formik.errors.accidentClaims}</div>
       ) : null}
 
 </Box>
 <Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
 <Box>


 <TextField id="penaltyPoints" label="Penalty Points " variant="outlined"  
         name="penaltyPoints"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.penaltyPoints}
         sx= {{marginBottom: 2, 
            marginTop: 2}}/>
       {formik.touched.penaltyPoints && formik.errors.penaltyPoints ? (
         <div>{formik.errors.penaltyPoints}</div>
       ) : null}
  </Box>
  <Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
  <Box>

 <TextField id="policyStartDate" label="Policy  Start Date" variant="outlined"  
         name="policyStartDate"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.policyStartDate}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.policyStartDate && formik.errors.policyStartDate ? (
         <div>{formik.errors.policyStartDate}</div>
       ) : null}
 
 </Box>
 <Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
 <Box>
 <TextField id="noCLaimsBonus" label="No Claims Bonus " variant="outlined"  
         name="noClaimsBonus"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.noClaimsBonus}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.noClaimsBonus && formik.errors.noClaimsBonus ? (
         <div>{formik.errors.number}</div>
       ) : null}
 </Box>
 <Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
 <Box>
 <TextField id="prevInsurancePrice" label="Previous Insurance Price " variant="outlined"  
         name="prevInsurancePrice"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.prevInsurancePrice}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.prevInsurancePrice && formik.errors.prevInsurancePrice ? (
         <div>{formik.errors.prevInsurancePrice}</div>
       ) : null}
</Box>
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box>
        
 <TextField id="fullNameAdd" label="Additional Driver Full Name " variant="outlined"  
         name="fullNameAdd"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.fullNameAdd}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.fullNameAdd && formik.errors.fllNameAdd ? (
         <div>{formik.errors.fullNameAdd}</div>
       ) : null}

</Box>
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box>
               
 <TextField id="dobAdd" label="Additional Driver Date Of Birth" variant="outlined"  
         name="dobAdd"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.dobAdd}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.dobAdd && formik.errors.dobAdd ? (
         <div>{formik.errors.dobAdd}</div>
       ) : null}
</Box> 
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box>
                      
 <TextField id="whenLicenseAdd" label="Additional Driver License Start DAte " variant="outlined"  
         name="whenLicenseAdd"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.whenLicenseAdd}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.whenLicenseAdd && formik.errors.whenLicenseAdd ? (
         <div>{formik.errors.whenLicenseAdd}</div>
       ) : null}
 
 </Box>
 <Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
 <Box>
 <TextField id="accidentClaimsAdd" label="Additional Driver Accident Claims " variant="outlined"  
         name="accidentClaimsAdd"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.accidentClaimsAdd}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.accidentClaimsAdd && formik.errors.accidentClaimsAdd ? (
         <div>{formik.errors.accidentClaimsAdd}</div>
       ) : null}
</Box>
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box>
<TextField id="penaltyPointsAdd" label="Additional Driver Penalty Points " variant="outlined"  
         name="penaltyPointsAdd"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.penaltyPointsAdd}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.penaltyPointsAdd && formik.errors.penaltyPointsAdd ? (
         <div>{formik.errors.penaltyPointsAdd}</div>
       ) : null}
</Box>
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box>


<TextField id="noClaimsBonusAdd" label="Additional Driver NCB " variant="outlined"  
         name="noClaimsBonusAdd"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.noClaimsBonusAdd}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.noClaimsBonusAdd && formik.errors.noClaimsBonusAdd ? (
         <div>{formik.errors.noClaimsBonusAdd}</div>
       ) : null}
</Box>
<Box
            sx={{
              display: {lg: "flex", md: "flex", sm: "block"},
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        <Divider sx={{width: {lg: '40%', md: '60%'},}}/>
    </Box>
<Box>
<TextField id="blackBox" label="Black Box " variant="outlined"  
         name="blackBox"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.blackBox}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.blackBox && formik.errors.blackBox? (
         <div>{formik.errors.blackBox}</div>
       ) : null}
 </Box>

 
       <Button variant="contained" size="large" color="warning" type="submit" onClick={()=> {submit()}}>Submit</Button>
     </form>

     </Box>
     </Container>
     </React.Fragment>
     </CssBaseline>
    )
}

export default Form;