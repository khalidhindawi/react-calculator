import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  Box,
  Card,
  Typography,
  makeStyles,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    margin: theme.spacing(1),
    width: '80%'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

const CalInputs = ({
  className,
  leaksNumber,
  unitType,
  handleChangeLeaksNumber = () => {},
  handleChangeUnitType = () => {},
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box flexGrow={1}>
        <Typography
          component="h6"
          gutterBottom
          variant="h6"
          color="textSecondary"
        >
          Enter the number of leaks you intend to find and repair in 1 year:
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
        >
          <TextField
            label="Leaks Number"
            style={{ margin: 8 }}
            placeholder="Input the number"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.input}
            type="text"
            value={leaksNumber}
            onChange={handleChangeLeaksNumber}
          />
        </Box>
      </Box>
      <Box>
        <Typography
          component="h6"
          gutterBottom
          variant="h6"
          color="textSecondary"
        >
          Units
        </Typography>
        <Button
          onClick={() => handleChangeUnitType(false)}
          disabled={!unitType}
          color="primary"
        >
          English
        </Button>
        <Button
          onClick={() => handleChangeUnitType(true)}
          disabled={unitType}
          color="primary"
        >
          Metric
        </Button>
      </Box>
    </Card>
  );
};

CalInputs.propTypes = {
  className: PropTypes.string,
  leaksNumber: PropTypes.string,
  unitType: PropTypes.bool,
  handleChangeLeaksNumber: PropTypes.func,
  handleChangeUnitType: PropTypes.func
};

export default CalInputs;
