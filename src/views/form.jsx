import { Typography, TextField, Divider } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CssBaseline, Link } from "@mui/material";
import Navbar from "./sections/NavBar";
import Banner from "./sections/Banner";

const Form = () => {

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
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            carPurchaseDate: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            title: Yup.string().email('Invalid email address').required('Required'),
            fullName: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
            dob: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
            postCode: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
            fullAddress: Yup.string().email('Invalid email address').required('Required'),
            email: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
            number: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
            whenLicense: Yup.string().email('Invalid email address').required('Required'),
            accidentClaims: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
            penaltyPoints: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
            policyStartDate: Yup.string().email('Invalid email address').required('Required'),
            noClaimsBonus: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
            prevInsurancePrice: Yup.string().email('Invalid email address').required('Required'),

            fullNameAdd: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
            dobAdd: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
            whenLicenseAdd: Yup.string().email('Invalid email address').required('Required'),
            accidentClaimsAdd: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
            penaltyPointsAdd: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
            noClaimsBonusAdd: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
          
      
            blackBox: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
          
        }) ,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
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
            <Banner />
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

        
        <form onSubmit={formik.handleSubmit}>
         <Box>
      
        <TextField id="regNumber" label="Reg. Number" variant="outlined"  
         name="regNumber"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.regNumber}
         sx= {{marginBottom: 1, 
               marginTop: 1}}/>
       {formik.touched.regNumber && formik.errors.regNumber ? (
         <div>{formik.errors.regNumber}</div>
       ) : null}

        </Box>
     <Divider/>
     <Box>
       <TextField id="carPurchaseDate" label="Car Purchase Date " variant="outlined"  
         name="carPurchaseDate"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.carPurchaseDate}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.carPurchaseDate && formik.errors.carPurchaseDate ? (
         <div>{formik.errors.carPurchaseDate}</div>
       ) : null}

</Box>
<Divider/>
<Box>

       <TextField id="title" label="Title " variant="outlined"  
         name="title"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
         sx= {{marginBottom: 2, 
            marginTop: 1}}
         />
       {formik.touched.title && formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}
 
 </Box>
 <Box>
 
      
       <TextField id="fullName" label="Full Name " variant="outlined"  
         name="fullName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.fullName}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.fullName && formik.errors.fullName ? (
         <div>{formik.errors.fullName}</div>
       ) : null}

</Box>
<Box> 
       <TextField id="dob" label="Date of Birth" variant="outlined"  
         name="dob"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.dob}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.dob && formik.errors.dob ? (
         <div>{formik.errors.dob}</div>
       ) : null}

</Box>

<Box>

       <TextField id="postCode" label="Post Code " variant="outlined"  
         name="postCode"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.postCode}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.postCode && formik.errors.postCode ? (
         <div>{formik.errors.postCode}</div>
       ) : null}
</Box>

<Box> 
       <TextField id="fullAddress" label="Full Address " variant="outlined"  
         name="fullAddress"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.fullAddress}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.fullAddress && formik.errors.fullAddress ? (
         <div>{formik.errors.fullAddress}</div>
       ) : null}

</Box>
<Box>

       <TextField id="email" label="Email " variant="outlined"  
         name="email"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 
 </Box>
 <Box>
 <TextField id="number" label="Tel. Number " variant="outlined"  
         name="number"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.number}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.number && formik.errors.number ? (
         <div>{formik.errors.number}</div>
       ) : null}
 
 </Box>
 <Box>


 <TextField id="whenLicense" label="License Start Date " variant="outlined"  
         name="whenLicense"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.whenLicense}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.whenLicense && formik.errors.whenLicense ? (
         <div>{formik.errors.whenLicense}</div>
       ) : null}

</Box>
<Box>

<TextField id="accidentClaims" label="Accident Claims " variant="outlined"  
         name="number"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.accidentClaims}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.accidentClaims && formik.errors.accidentClaims ? (
         <div>{formik.errors.accidentClaims}</div>
       ) : null}
 
 </Box>
 <Box>


 <TextField id="penaltyPoints" label="Penalty Points " variant="outlined"  
         name="penaltyPoints"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.penaltyPoints}
         sx= {{marginBottom: 2, 
            marginTop: 1}}/>
       {formik.touched.penaltyPoints && formik.errors.penaltyPoints ? (
         <div>{formik.errors.penaltyPoints}</div>
       ) : null}
  </Box>
  <Box>

 <TextField id="policyStartDate" label="Policy  Start Date" variant="outlined"  
         name="policyStartDAte"
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

 
       <button type="submit">Submit</button>
     </form>

     </Box>
     </Container>
     </React.Fragment>
     </CssBaseline>
    )
}

export default Form;