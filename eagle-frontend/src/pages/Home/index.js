import React,{useState} from 'react';
import backgroundImg from '../../images/backgroundimg1.jpg';
import { mainPageStyles } from '../../css/StyledComponents';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import {GRAPHQL_URL} from '../../GlobalConfigurations';
import axios from "axios";

const Home = () => {

    const [openLgnModel, setOpenLgnModel] = useState(false);
    const [openSignupModel, setOpenSignupModel] = useState(false);
    const handleLgnOpen = () => setOpenLgnModel(true);
    const handleLgnClose = () => setOpenLgnModel(false);
    const handleSignupOpen = ()=>setOpenSignupModel(true);
    const handleSignupClose = ()=>setOpenSignupModel(false);

    const [email,setEmail] = useState('');
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState('');

    const handleEmail = (event)=>{
        const {value} = event.target;
        setEmail(value);
    }
    const handlePassword = (event)=>{
        const {value} = event.target;
        setPassword(value);
    }

    const clearLoginFields = ()=>{
        setEmail('');
        setPassword('');
        handleLgnClose();
    }

    const loginUser = ()=>{
        console.log(email+" "+password);
        axios
            .post(GRAPHQL_URL, {
            query: `
            mutation login($email:String,$password:String){
                login(email:$email,password:$password){
                           
                                
                                    token
                                    userLoginModel{
                                        id
                                        role
                                        userName
                                        email
                                        activeStatus
                                    }
                                    responseMessage
                                    responseStatus
                                    
                                
                            
                         }
                    }`,
                    variables: {
                        email:email,
                        password:password
                    }
                })
            .then(res => {
                console.log(res)
               
                    alert(res.data.data.login?.responseMessage);
                
            })
            .catch(err => {
                console.log(err)
                alert(err);
            })
    }

    const classes = mainPageStyles();

    return (
        <div>
            <div className={classes.backgroundImg}>
                <img src={backgroundImg} className={classes.imageStyles}></img>
                <div
                    className={classes.headerTextStyles}
                >
                    <h1>Online Learning Platform</h1>

                    <Button className={classes.mainPageLoginBtnStyles} variant="contained" onClick={handleLgnOpen}>Login</Button>
                    <span className={classes.spaceStyle}></span>
                    <Button className={classes.mainPageLoginBtnStyles} variant="contained"onClick={handleSignupOpen}>Create an account</Button>

                    <Dialog open={openLgnModel} onClose={handleLgnClose}>
                        <DialogTitle>Login</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Enter email and password to login
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="standard"
                                onChange={handleEmail}
                                value={email}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="password"
                                label="Password"
                                type="password"
                                variant="standard"
                                onChange={handlePassword}
                                value={password}
                            />
                        </DialogContent>
                        <DialogActions style={{alignItems:'left'}}>
                            <Button onClick={loginUser}>Login</Button>
                            <Button onClick={clearLoginFields}>Cancel</Button>
                        </DialogActions>
                    </Dialog>

                    <Dialog open={openSignupModel} onClose={handleSignupClose}>
                        <DialogTitle>Subscribe</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To subscribe to this website, please enter your email address here. We
                                will send updates occasionally.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleSignupClose}>Cancel</Button>
                            <Button onClick={handleSignupClose}>Subscribe</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </div>

    )
}

export default Home;