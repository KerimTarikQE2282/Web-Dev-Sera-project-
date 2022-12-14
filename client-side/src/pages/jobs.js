import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { EmployerHeader } from "../components/EmployerHeader";
import { EmployeeHeader } from "../components/EmployeeHeader";
import { Container } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import JobsLeftSide from "../components/JobsLeftSide";
import JobsRightSide from "../components/JobsRightSide";
import Posts from "../components/posts";
import SearchBar from "../components/searchBar";
import PostedJob from "../components/postedJob";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const Jobs = () => {

  const jobListStyle = {
    // border: '1px solid red',
    borderRadius: "10px",
    backgroundColor: "background.default",
    pr: "5%",
    pt: "5%",
    mr: "3%",
    height: '130vh',
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    // border: '1px solid red',
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.5em",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "none",
      borderRadius: "10px",
    },
  };

  const [searchValue, setSearchValue] = useState("");

  const [jobs, setJobs] = useState([]);
  const [searchedJob, setSearchedJob] = useState([]);

  // const router = useRouter();
  // const {
  //   query: { loginUser, loginRole },
  // } = router;

  // const props = {
  //   loginUser,
  //   loginRole,
  // };
  const loginUser = cookie.get("loginUser")
  const loginRole = cookie.get("loginRole")

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + cookie.get("token"),
      },
    };

    const jobSearch = {
      jobTitle: searchValue,
    };

    axios
      .post("https://localhost:44369/findJob", jobSearch, config)
      .then(function (res) {
        setJobs(res.data);
      })
      .catch(function (res) {
        console.log(res);
      });
    // console.log(jobSearch)
  }, [searchValue]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + cookie.get("token"),
      },
    };
    axios
      .get("https://localhost:44369/jobs/getAllJob", config)
      .then(function (res) {
        // console.log(res)
        setJobs(res.data);
        // console.log(jobs)
      })
      .catch(function (res) {
        console.log(res);
      });
  }, []);



  // console.log(jobs)
  // console.log(searchedJob)
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
          backgroundColor: "background.paper",
        }}
      >
        <Grid container spacing={3} sx={{pb: 10}}>
          {loginRole == "Employer" ? (
            <Grid item lg={12} md={12} sm={12}>
              <EmployerHeader />
            </Grid>
          ) : (
            <Grid item lg={12} md={12} sm={12}>
              <EmployeeHeader />
            </Grid>
          )}

          <Grid
            item
            lg={3}
            sm={3}
            sx={{
              mt: "1.5%",
              backgroundColor: "background.default",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <JobsLeftSide />
          </Grid>
          <Grid item lg={6} sm={8} sx={{}}>
            <Box
              sx={jobListStyle}
            >
              <SearchBar setSearchValue={setSearchValue} />
              {/* <Typography variant="h1" color="black">{searchValue}</Typography> */}
              {jobs &&
                jobs.map((job) => (
                  <PostedJob
                    job={job}
                    key={job.jobId}
                    loginUser={loginUser}
                    loginRole={loginRole}
                  />
                ))}
            </Box>
          </Grid>

          <Grid
            item
            lg={3}
            sm={3}
            sx={{
              mt: "1.5%",
              ml: "0",
              backgroundColor: "background.default",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Box>
              <JobsRightSide />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Jobs;
