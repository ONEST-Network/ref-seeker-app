import * as React from 'react';
import logo from './assets/logo.svg';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './App.css';
import Grid from '@mui/material/Grid';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel" className='tab-panel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs" className='tabs'>
          <Tab label="Jobs" {...a11yProps(0)} />
          <Tab label="Scholarships" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ display: 'flex' }} className='tabs-card'>
              <img src={logo} className="card-image" alt="logo" />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Data Entry Operator
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    UrbanTech
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Delhi, India (Remote)
                  </Typography>
                  <Typography sx={{ display: 'flex', justifyContent: 'space-between' }} variant="subtitle1" color="text.secondary" component="div" >
                    Posted By National Career Service
                    <div className='time'>4hrs ago</div>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ display: 'flex'}} className='tabs-card'>
              <img src={logo} className="card-image" alt="logo" />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Data Entry Operator
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    UrbanTech
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Delhi, India (Remote)
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Posted By National Career Service
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ display: 'flex'}} className='tabs-card'>
              <img src={logo} className="card-image" alt="logo" />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Data Entry Operator
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    UrbanTech
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Delhi, India (Remote)
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Posted By National Career Service
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ display: 'flex'}} className='tabs-card'>
              <img src={logo} className="card-image" alt="logo" />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Data Entry Operator
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    UrbanTech
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Delhi, India (Remote)
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Posted By National Career Service
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ display: 'flex' }} className='tabs-card'>
              <img src={logo} className="card-image" alt="logo" />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Data Entry Operator
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    UrbanTech
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Delhi, India (Remote)
                  </Typography>
                  <Typography sx={{ display: 'flex', justifyContent: 'space-between' }} variant="subtitle1" color="text.secondary" component="div" >
                    Posted By National Career Service
                    <div className='time'>4hrs ago</div>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          </Grid>
      </CustomTabPanel>
    </Box>
  );
}