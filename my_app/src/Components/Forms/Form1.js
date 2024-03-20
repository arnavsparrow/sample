import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Card,
  Dialog,
  Drawer,
  Grid,
  IconButton,
  Input,
  Menu,
  Snackbar,
  Stepper,
  Tab,
  Tabs,
  Tooltip,
  Typography, MenuItem,Step, StepLabel
} from '@mui/material';

const FormExample = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const handleNextStep = () => {
    setActiveStep(prevStep => prevStep + 1);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Typography variant="h6">Form Example</Typography>
      </AppBar>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Card>
            <Grid container spacing={2} justify="center" alignItems="center" style={{ padding: '20px' }}>
              <Grid item xs={12}>
                <Input placeholder="Username" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Input placeholder="Password" type="password" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={() => setOpenSnackbar(true)}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        This is a dialog.
      </Dialog>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Typography variant="body1">Snackbar message</Typography>
      </Snackbar>
      <Menu open={openMenu} onClose={() => setOpenMenu(false)}>
        <MenuItem onClick={() => setOpenMenu(false)}>Item 1</MenuItem>
        <MenuItem onClick={() => setOpenMenu(false)}>Item 2</MenuItem>
        <MenuItem onClick={() => setOpenMenu(false)}>Item 3</MenuItem>
      </Menu>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        This is a drawer.
      </Drawer>
      <Stepper activeStep={activeStep} onChange={handleNextStep}>
        <Step><StepLabel>Step 1</StepLabel></Step>
        <Step><StepLabel>Step 2</StepLabel></Step>
        <Step><StepLabel>Step 3</StepLabel></Step>
      </Stepper>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <Tooltip title="Tooltip message">
        <IconButton>?</IconButton>
      </Tooltip>
    </div>
  );
};

export default FormExample;


// import React, { useState } from 'react';
// import {
//   AppBar,
//   Button,
//   Card,
//   Grid,
//   Input,
//   Step,
//   StepLabel,
//   Stepper,
//   Typography
// } from '@mui/material';

// const FormExample = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNextStep = () => {
//     setActiveStep(prevStep => prevStep + 1);
//   };

//   return (
//     <div>
//       <AppBar position="static">
//         <Typography variant="h6">Multi-step Form</Typography>
//       </AppBar>
//       <Stepper activeStep={activeStep}>
//         <Step><StepLabel>Step 1</StepLabel></Step>
//         <Step><StepLabel>Step 2</StepLabel></Step>
//         <Step><StepLabel>Step 3</StepLabel></Step>
//       </Stepper>
//       {activeStep === 0 && (
//         <Grid container spacing={2} justify="center">
//           <Grid item xs={12}>
//             <Card>
//               <Grid container spacing={2} justify="center" alignItems="center" style={{ padding: '20px' }}>
//                 <Grid item xs={12}>
//                   <Input placeholder="Field 1" fullWidth />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Input placeholder="Field 2" fullWidth />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Button variant="contained" color="primary" fullWidth onClick={handleNextStep}>
//                     Next
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Card>
//           </Grid>
//         </Grid>
//       )}
//       {activeStep === 1 && (
//         <Grid container spacing={2} justify="center">
//           <Grid item xs={12}>
//             <Card>
//               <Grid container spacing={2} justify="center" alignItems="center" style={{ padding: '20px' }}>
//                 <Grid item xs={12}>
//                   <Input placeholder="Field 3" fullWidth />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Input placeholder="Field 4" fullWidth />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Button variant="contained" color="primary" fullWidth onClick={handleNextStep}>
//                     Next
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Card>
//           </Grid>
//         </Grid>
//       )}
//       {activeStep === 2 && (
//         <Grid container spacing={2} justify="center">
//           <Grid item xs={12}>
//             <Card>
//               <Grid container spacing={2} justify="center" alignItems="center" style={{ padding: '20px' }}>
//                 <Grid item xs={12}>
//                   <Input placeholder="Field 5" fullWidth />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Input placeholder="Field 6" fullWidth />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Button variant="contained" color="primary" fullWidth onClick={handleNextStep}>
//                     Submit
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Card>
//           </Grid>
//         </Grid>
//       )}
//     </div>
//   );
// };

// export default FormExample;
