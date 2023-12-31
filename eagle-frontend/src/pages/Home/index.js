import React, { useState } from 'react';
import backgroundImg from '../../images/backgroundimg1.jpg';
import { mainPageStyles } from '../../css/StyledComponents';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';
import { GRAPHQL_URL } from '../../GlobalConfigurations';
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();

    const [openLgnModel, setOpenLgnModel] = useState(false);
    const [openSignupModel, setOpenSignupModel] = useState(false);
    const handleLgnOpen = () => setOpenLgnModel(true);
    const handleLgnClose = () => setOpenLgnModel(false);
    const handleSignupOpen = () => setOpenSignupModel(true);
    const handleSignupClose = () => setOpenSignupModel(false);

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState("STUDENT");

    const handleEmail = (event) => {
        const { value } = event.target;
        setEmail(value);
    }
    const handlePassword = (event) => {
        const { value } = event.target;
        setPassword(value);
    }

    const clearLoginFields = () => {
        setEmail('');
        setPassword('');
        handleLgnClose();
    }

    const handleRole = (event)=>{
        const {value} = event.target;
        setRole(value);
    }

    const handleUserName = (event)=>{
        const {value} = event.target;
        setUserName(value);
    }

    const clearSignUp = () =>{
        setEmail("");
        setPassword("");
        setUserName("");
        setRole("");
        handleSignupClose(true);
    }

    const loginUser = () => {
        console.log(email + " " + password);
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
                    email: email,
                    password: password
                }
            })
            .then(res => {
                console.log(res)

                // alert(res.data.data.login?.responseMessage);
                if(res.data.data.login?.responseStatus){
                    localStorage.setItem("userObj",JSON.stringify(res.data.data.login.userLoginModel));
                    localStorage.setItem("token",res.data.data.login?.token);
                    navigate('/dashboard'); // Navigate to another route
                }else{
                    alert(res.data.data.login?.responseMessage);
                }

            })
            .catch(err => {
                console.log(err)
                alert(err);
            })
    }

    const createUser = () =>{

        const user = {"userName":userName,"email":email,"password":password,"role":role}
        console.log(user);
        axios
        .post(GRAPHQL_URL, {
            query: `
        mutation createUser($userObj:UserModel){
            createUser(user:$userObj){
                                responseMessage
                                responseStatus
                                
                            
                        
                     }
                }`,
            variables: {
                userObj:user
            }
        })
        .then(res => {
            console.log(res)

            alert(res.data.data.createUser?.responseMessage);

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
                    <Button className={classes.mainPageLoginBtnStyles} variant="contained" onClick={handleSignupOpen}>Create an account</Button>

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
                        <DialogActions style={{ alignItems: 'left' }}>
                            <Button onClick={loginUser}>Login</Button>
                            <Button onClick={clearLoginFields}>Cancel</Button>
                        </DialogActions>
                    </Dialog>

                    <Dialog open={openSignupModel} onClose={handleSignupClose}>
                        <DialogTitle>Create account</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Create a user account from here!!!
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="username"
                                label="User name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleUserName}
                                value={userName}
                                required
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email"
                                type="email"
                                fullWidth
                                variant="standard"
                                onChange={handleEmail}
                                value={email}
                                required
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="password"
                                label="Password"
                                type="password"
                                fullWidth
                                variant="standard"
                                onChange={handlePassword}
                                value={password}
                                required
                            />
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label" required>User Type</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="STUDENT"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="STUDENT" control={<Radio />} label="STUDENT" onChange={handleRole}/>
                                    <FormControlLabel value="TUTOR" control={<Radio />} label="TUTOR" onChange={handleRole}/>
                                </RadioGroup>
                            </FormControl>
                            
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={clearSignUp}>Cancel</Button>
                            <Button onClick={createUser}>Save</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </div>

    )
}

export default Home;