import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Head from "next/head";
import ChatSideBar from "../components/ChatSideBar";
import ChatArea from "../components/ChatArea";
import * as signalR from "@microsoft/signalr";
import { useRouter } from "next/router";
import { EmployerHeader } from "../components/EmployerHeader";
import { EmployeeHeader } from "../components/EmployeeHeader";
import axios from 'axios'
import cookie from 'js-cookie'

const Messages = () => {

  const [usersToChat, setUsersToChat] = useState([])
  const [selectedUser, setSelectedUser] = useState('');

  const router = useRouter();
  const {
    query: { postUser},
  } = router;

  const props = {
    postUser,
  };

  const loginUser = cookie.get("loginUser")
  const loginRole = cookie.get("loginRole")


  const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:44369/ChatHub")
    .build();

    connection.start();
    
    const [messages, setMessages] = useState();
    connection.on("RecieveMessage", function(response){
      setMessages(response);
    });


    // connection.onclose((error) =>{
    //   connection.start()
    //   console.log(error)
    // })
    connection.serverTimeoutInMilliseconds = 300000;
    connection.keepAliveIntervalInMilliseconds = 300000;
    useEffect(()=>{
      const config ={
        headers: {
          Authorization: "Bearer " + cookie.get("token"),
        }
      }

      axios.get("https://localhost:44369/GetAllChats",config)
      .then(function(res){
        setMessages(res.data)
        console.log(res.data)
      })
      .catch(function(res){
        console.log(res)
      })

      axios.get("https://localhost:44369/usersToChat",config)
        .then(function(res){
          setUsersToChat(res.data)
        })
        .catch(function(res){
          console.log(res)
        })
    },[])
  

    useEffect(()=>{

      const config ={
        headers: {
          Authorization: "Bearer " + cookie.get("token"),
        }
      }

      const selectUserToChat = {
        toUserId : selectedUser.toString() == '' ? props.postUser : selectedUser.toString(),
        userId : loginUser
      }
      // console.log(selectUserToChat)

      axios.post("https://localhost:44369/GetAllChats",selectUserToChat,config)
      .then(function(res){
        setMessages(res.data)
      })
      .catch(function(res){
        console.log(res)
      })
      props.postUser = selectedUser
      
    },[selectedUser,postUser])
    const toUserId = selectedUser == '' ? props.postUser : selectedUser;
  
  return (
    <>
      <Head>
        <title>Messages | Sera Job Po</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
        <Grid container>
        {
            loginRole == "Employer" ? (
              <Grid item lg={12} md={12} sm={12}>
            <EmployerHeader/>
          </Grid>
            ) : (
              <Grid item lg={12} md={12} sm={12}>
            <EmployeeHeader/>
          </Grid>
            )
          }
          <Grid container spacing={4} sx={{p:3}}>
            <Grid item lg={4} md={12} sm={12}>
              <ChatSideBar usersToChat={usersToChat} setSelectedUser={setSelectedUser}></ChatSideBar>
            </Grid>
            <Grid item lg={8} md={12} sm={12}>              
              <ChatArea messages={messages} connection={connection} loginUser={loginUser} postUser={toUserId} ></ChatArea>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Messages;
