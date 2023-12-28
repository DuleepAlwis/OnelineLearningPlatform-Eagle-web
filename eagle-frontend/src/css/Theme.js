import { createTheme } from '@mui/material/styles';

const commonColors = {
  primaryMain: '#0B51B7',
  primaryLight: '#63a4ff',
  primaryDark: '#004ba0',
  secondaryMain: '#f50057',
  secondaryLight: '#ff5983',
  secondaryDark: '#bb002f',
  textPrimary: '#212121',
  textSecondary: '#757575',
  backgroundDefault: '#f5f5f5',
  backgroundPaper: '#fff',
  customColorMain: '#7D8CB6',
  WhiteColor: '#fff',
  ErroMain: '#f44336',
  Errolight: '#e57373',
  ErroDark: '#d32f2f',
  WarningMain: '#ff9800',
  WarningLight: '#ffb74d',
  WarningDark: '#f57c00',
  InfoMain: '#2196f3',
  InfoLight: '#64b5f6',
  InfoDark: '#1976d2',
  SuccessMain: '#4caf50',
  SuccessLight: '#81c784',
  SuccessDark: '#388e3c',
  GrayColor: '#686868',
  BlackColor: '#000000',
  PopupLight: '#1138F7',
  PopupDark: '#DC3545',
  BlueColor: '#1256B9',
  IconColor: '#00008B',
  ListItemTextColorMain: '#303E67',
  ListItemTextCaseF: '#5a5c61',
  SearchBarMain: '#20b2aa',
  Transparent: 'transparent',
  RedColor: 'red',
  HoverColorMain: '#3066B4',
  ForgetPasswordDark: '#7A7A7A',
  ForgetPasswordPrimary: '#3F3F3F',
  DrawerColorMain: '#F8F9FB',
  TextDisabled: '#bdbdbd',
  TextHint: '#9e9e9e',
  HotelDetailsPrimary: '#FA5252',
  containedBackground: '#808080',
  IconBackground:'#F5F5F9',
  RoseColor:'#F33A6A',
};

const Theme = createTheme({
  palette: {
    primary: {
      main: commonColors.primaryMain,
      light: commonColors.primaryLight,
      dark: commonColors.primaryDark,
      contrastText: commonColors.WhiteColor,
    },
    secondary: {
      main: commonColors.secondaryMain,
      light: commonColors.secondaryLight,
      dark: commonColors.secondaryDark,
      contrastText: commonColors.WhiteColor,
    },
    // Add more custom colors or modify existing ones as needed
    error: {
      main: commonColors.ErroMain,
      light: commonColors.Errolight,
      dark: commonColors.ErroDark,
      contrastText: commonColors.WhiteColor,
    },
    warning: {
      main: commonColors.WarningMain,
      light: commonColors.WarningLight,
      dark: commonColors.WarningDark,
      contrastText: commonColors.WhiteColor,
    },
    info: {
      main: commonColors.InfoMain,
      light: commonColors.InfoLight,
      dark: commonColors.InfoDark,
      contrastText: commonColors.WhiteColor,
    },
    success: {
      main: commonColors.SuccessMain,
      light: commonColors.SuccessLight,
      dark: commonColors.SuccessDark,
      contrastText: commonColors.WhiteColor,
    },
    customColor: {
      main: commonColors.customColorMain,
    },
    NavBarColor: {
      main: commonColors.WhiteColor,
      primary: commonColors.customColorMain,
    },
    UserName: {
      main: commonColors.GrayColor,
    },
    arrowIcon: {
      main: commonColors.WhiteColor,
    },
    valueLabel: {
      main: commonColors.BlackColor,
    },
    popUp: {
      main: commonColors.WhiteColor,
      light: commonColors.PopupLight,
      dark: commonColors.PopupDark,
    },
    IconButtonColor:{
      main:commonColors.IconBackground
    },
    MenuBarColor: {
      main: commonColors.BlueColor,
      iconColor: commonColors.IconColor,
    },
    ListItemTextColor: {
      main: commonColors.ListItemTextColorMain,
      caseT: commonColors.primaryMain,
      caseF: commonColors.ListItemTextCaseF,
    },
    SearchBarColor: {
      main: commonColors.SearchBarMain,
      bg: commonColors.WhiteColor,
      borderColor: commonColors.Transparent,
    },
    passwordText: {
      main: commonColors.RedColor,
    },
    passwordStrngthText: {
      main: commonColors.BlackColor,
    },
    HoverColor: {
      main: commonColors.HoverColorMain,
    },
    ForgetPasswordText: {
      main: commonColors.primaryMain,
      secondary: commonColors.primaryMain,
      primary: commonColors.ForgetPasswordPrimary,
      dark: commonColors.ForgetPasswordDark,
    },
    DrawerColor: {
      main: commonColors.DrawerColorMain,
    },
    text: {
      primary: commonColors.textPrimary,
      secondary: commonColors.textSecondary,
      disabled: commonColors.TextDisabled,
      hint: commonColors.TextHint,
      // Customize the text color for various contexts
    },
    background: {
      default: commonColors.backgroundDefault,
      paper: commonColors.WhiteColor,
      // Customize the background colors for different components
    },
    customSearchBox: {
      primary: commonColors.ListItemTextColorMain,
      secondary: commonColors.WhiteColor,
    },
    userGroupStyles: {
      main: commonColors.BlueColor,
    },
    hotelDetailsStyles: {
      main: commonColors.customColorMain,
      primary: commonColors.HotelDetailsPrimary,
      secondary: commonColors.BlueColor,
      TextColor:commonColors.WhiteColor
    },
    btnColor:{
      main:commonColors.RoseColor,
    }
    // You can also customize more properties such as action, divider, etc.
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 12,
    // Customize the typography options
    h1: {
      fontFamily: 'Roboto, sans-serif', // Custom font-family for h1
      fontSize: 36, // Custom font-size for h1
      fontWeight: 'bold', // Custom font-weight for h1
      // Customize heading styles
    },
    h2: {
      // Customize heading styles
    },
    // Add more heading styles (h3, h4, h5, h6) and other typography options
    fontWeightRegular: 400, // Default font weight for regular text
    fontWeightMedium: 500, // Default font weight for medium text (e.g., Button text)
    fontWeightBold: 600, // Default font weight for bold text (e.g., Typography with variant="h1")
  },
  shape: {
    borderRadius: 5,
    // Customize the default border radius for components
  },
  spacing: [0, 4, 8, 12, 16, 20, 24, 28, 32],
  // Customize the default spacing unit
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },

    // Add more breakpoints as needed
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
    modal: 1300,
    // Customize z-index values for different components
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
  // Customize box shadows for components
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Customize easing functions for transitions
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // Customize duration times for transitions
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: commonColors.primaryMain,
          color: commonColors.WhiteColor,
          borderRadius: 5,
          padding: '10px 20px',
          fontWeight: 600,
          height: 34,
          '&:hover': {
            backgroundColor: commonColors.HoverColorMain,
          },
        },
        contained: {
          '&.Mui-disabled': {
            color: commonColors.WhiteColor,
            backgroundColor: commonColors.containedBackground,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: commonColors.primaryMain,
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: commonColors.GrayColor,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: commonColors.GrayColor,
            },
            '&:hover fieldset': {
              borderColor: commonColors.GrayColor,
            },
            '&.Mui-focused fieldset': {
              borderColor: commonColors.GrayColor,
            },
            // paddingRight: '20px', // Add the desired right padding
          },
          '& .MuiInputBase-root': {
            minHeight: '34px',
          },
          '& .MuiOutlinedInput-input': {
            padding: '8.5px 14px',
          },
          '& .css-1plc2mf-MuiFormControl-root-MuiTextField-root .MuiOutlinedInput-root':
            {
              padding: '0px',
            },
          borderRadius: 5,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&[data-shrink="true"]': {
            top: 0,
            fontSize: '15px',
            paddingRight: '20px', // Add the desired right padding for data-shrink="true"
          },
          top: -2,
          shrink: true,
          color: commonColors.ListItemTextColorMain, // Set the desired label text color
          fontSize: '16px', // Set the desired label font size
          display: 'flex', // Use flex layout for center alignment and image positioning
          alignItems: 'center', // Center align the content vertically
          justifyContent: 'center', // Center align the content horizontally
          // Add more custom styles as needed
        },
      },
    },
  },
  // Add more properties as needed
});

export default Theme;
