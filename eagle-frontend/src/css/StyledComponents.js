import { makeStyles, withStyles } from '@mui/styles';

export const commonStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    border: {
        border: `1px solid ${theme.palette?.MenuBarColor.main}`,
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
    },
    gridCenter: {
        display: 'grid',
        justifyContent: 'center',
    },
    gridStart: {
        display: 'grid',
        justifyContent: 'flex-start',
    },
    gridEnd: {
        display: 'grid',
        justifyContent: 'flex-end',
    },
    boxShadow: {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    borderRadius: {
        borderRadius: '10px !important',
    },
}));

export const mainPageStyles = makeStyles((theme) => ({
    backgroundImg: {
        maxWidth: '100%',
        maxHeight: '100vh',
        overflow: 'hidden',
        position: 'relative'
    },
    imageStyles: {
        flex: '1',
        height: '100%',
        width: '100%',
        display: 'block'
    },
    headerTextStyles: {
        position: 'absolute',
        top: '40%', // Adjust as needed to position the text vertically
        left: '50%', // Adjust as needed to position the text horizontally
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: `${theme.palette?.MenuBarColor.main}`, // Text color
        fontSize: '2rem', // Adjust font size as needed
        fontWeight: 'bold', // Adjust font weight as needed
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Optional text shadow
    },
    spaceStyle:{
        width:'50px',
        display:'inline-block'
    },
    mainPageLoginBtnStyles:{
        backgroundColor:`${theme.palette?.btnColor}`
    },
    loginModelStyles:{
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    mandatorySign:{
        color:`${theme.palette?.error.main}`
    }
}));

