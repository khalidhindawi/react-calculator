import React from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';

import CalResult from './components/CalResult';
import CalInputs from './components/CalInputs';

import OpacityIcon from '@material-ui/icons/Opacity';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import EcoIcon from '@material-ui/icons/Eco';

const useStyles = makeStyles(() => ({
  root: {
    background: '#fafafa',
    minHeight: '100vh'
  },
  heading: {
    color: '#e8eaf6'
  }
}))

const App = () => {
  const classes = useStyles();
  const [unitType, setUnitType] = React.useState("english");
  const [leaksNumber, setLeaksNumber] = React.useState('');

  const handleChangeLeaksNumber = React.useCallback(event => {
    if (event.target.value) {
      setLeaksNumber(parseFloat(event.target.value))
    } else {
      setLeaksNumber('')
    }
  }, []);

  const handleChangeUnitType = React.useCallback(event => {
    setUnitType(event.target.value)
  }, []);

  const getWaterValue = React.useCallback(() => {
    if (leaksNumber !== '') {
      return unitType === 'english' ? (leaksNumber * 0.255).toFixed(3) : (leaksNumber * 0.00093).toFixed(3);
    } else {
      return;
    }
  }, [leaksNumber, unitType]);

  const getEnergyValue = React.useCallback(() => {
    if (leaksNumber !== '') {
      return (leaksNumber * 0.604).toFixed(0);
    } else {
      return;
    }
  }, [leaksNumber]);

  const getCO2Value = React.useCallback(() => {
    if (leaksNumber !== '') {
      return (leaksNumber * 0.404).toFixed(0);
    } else {
      return;
    }
  }, [leaksNumber]);

  return (
    <Container
      maxWidth={false}
    >
      <Box
        className={classes.root}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <CalInputs
              leaksNumber={leaksNumber.toString()}
              handleChangeLeaksNumber={handleChangeLeaksNumber}
              handleChangeUnitType={handleChangeUnitType}
              unitType={unitType}
            />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <CalResult
              title="Water"
              value={getWaterValue()}
              unit={unitType === 'english' ? "Million gallons" : "Million m³"}
              avatar={<OpacityIcon style={{fontSize: 32}} />}
              avatarStyle={{background: '#ff9a0f'}}
            />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <CalResult
              title="Energy"
              value={getEnergyValue()}
              unit="MWH"
              avatar={<OfflineBoltIcon style={{fontSize: 32}} />}
              avatarStyle={{background: '#0ea8c3'}}
            />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <CalResult
              title="CO2 Emissions"
              value={getCO2Value()}
              unit="Metric tons"
              avatar={<EcoIcon style={{fontSize: 32}} />}
              avatarStyle={{background: '#72b646'}}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
