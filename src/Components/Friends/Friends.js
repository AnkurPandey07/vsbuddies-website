import "./Friends.css"
import SideBar from "./SideBar/SideBar"
import AllUsers from "./AllUsers/AllUsers"
import React,{useState,useEffect} from "react"
import FriendList from "./FriendList/FriendList.jsx";
import FriendRequest from "./FriendRequest/FriendReqest";
import firebase from "firebase/compat";
import {AppBar,Avatar,Toolbar,Button} from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { PersonAdd } from "@mui/icons-material";
import ChatIcon from '@mui/icons-material/Chat';
import { useAuthState } from "react-firebase-hooks/auth";

function Friends() {

    const [curOption,setCurOption] = useState(0);
    const firestore = firebase.firestore();
    const auth = firebase.auth();
	const [avatarSrc, setAvatarSrc] = useState("")
    const [user,loading,err] = useAuthState(auth);

    useEffect(()=>{
        
        if(user){
            //get user icon from firestore db
            const avatarSrcRef = firestore.collection("Users").doc(user.email).collection("Details").doc("Details");
            avatarSrcRef.get().then(async(doc)=>{
                const temp = await doc.data()
                setAvatarSrc(temp)
            })
        }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

    let bgcolor = "#fff"
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// For dark mode chagne the material ui appbar
		bgcolor="#181a1b"
	}
	const color = bgcolor === "#fff"?"#1976d2":"white"

    function handleSignOut() {
        auth.signOut();
    }

    function handleClick(num) {
        console.log(num);
        setCurOption(num);
    }

    if(!loading){
        if(user){
            return (
                <>
                <AppBar position="static" className="dashboard-navbar" elevation={3} sx={{
                    bgcolor: bgcolor,
                    color: color
                    }}>
                    <Toolbar>
                        <div className="dashboard-nav-left">
                            <Avatar src={avatarSrc.icon} />
                            {avatarSrc.name}
                        </div>
                        <Link to={`/profile/${user.email}`}>
                                <Button className="dashboard-nav-btn" variant="outlined" >
                                    <AccountCircleIcon color="primary"/>
                                </Button>
                        </Link>
                        <Link to={"/connect"}>
                            <Button className="dashboard-nav-btn" variant="outlined" >
                                <PersonAdd color="primary"/>
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button className="dashboard-nav-btn" variant="outlined" >
                                <ChatIcon color="primary"/>
                            </Button>
                        </Link>
                        <Button className="dashboard-nav-btn" onClick={handleSignOut} variant="outlined">
                            Sign Out
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className="Friends">
                    <SideBar onClick ={handleClick} />
                    {curOption === 0 && <AllUsers uid = {user.email} option="Connect with other Devs" />}
                    {curOption === 1 && <FriendRequest uid ={user.email} option="Pending Friend Requests" />}
                    {curOption === 2 && <FriendList uid = {user.email} option="Friends" />}
                </div>
                </>
            )
        } else {
            window.location.replace("http://localhost:3000")
            return
        }
    } else {
        return(
            <h3>
                loading....
            </h3>
        )
    }
}

export default Friends
