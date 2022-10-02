import Head from "next/head";
import Image from "next/image";
import {Box, Grid, Button, Typography} from '@mui/material'
import { EmployeeHeader } from "../../components/EmployeeHeader";
import {useRouter} from 'next/router'
const Employee = () => {

  const router = useRouter()
  const {
    query: {loginUser,loginRole}
  }  = router

  const props = {
    loginUser,loginRole
  }

    const styles = {
        paperContainer: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/employee-hero-image.jpg")`,
            // backgroundImage: `url('/employee-hero-image.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }
    };

    const buttonStyle = {
        backgroundColor: 'headerBg.main',
        color: 'primary.main',
        borderRadius: '5px',
        height: '11%',
        "&:hover": {
          border: 1,
          borderColor: "headerBg.main",
          color: 'gray',
          backgroundColor: 'transparent'
        },
      };


    const imageStyle = {
        width: '80%',
        height: '100%',
        borderRadius: "10px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    }
  return (
    <>
      <Head>
        <title>Jobs | Sera Job Portal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
        component="main"
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "background.default",
        }}
      >
        
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item lg={12} md={12} sm={12}>
            <EmployeeHeader/>
          </Grid>
          
        </Grid>

        <Grid container sx={{ height: "90vh", width: "100%", pt: 5 }}>
          <Grid item lg={6} md={6} sm={12}>
            <Box
              width="90%"
              height="80%"
              sx={{
                m: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography color="black" variant="h2">
                Welcome Aboard Employee
              </Typography>
              {/* <Typography
                sx={{ color: "primary.main", mt: 2, textAlign: "left" }}
                variant="h5"
              >
                Finding Job is Easier Ever
              </Typography> */}
              <Typography variant="subtitle2" color="black" sx={{ mt: 2, textAlign: 'center' }}>
                lorem Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.{" "}
              </Typography>
              <Box
                sx={{
                  width: "%",
                  display: "flex",
                  justifyContent: "center",

                  mt: 4,
                }}
              >
                <Button variant="contained" href="/jobs">
                  See Posted Jobs
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Box sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius: '20%'}}>
              <Image
                src="/employee.svg"
                layout="responsive"
                width="400"
                height="300"
              ></Image>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Employee;