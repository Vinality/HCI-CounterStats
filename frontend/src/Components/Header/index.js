import React from 'react';
import { Breadcrumbs, Paper, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1, 2),
    backgroundColor: "#333333",
  },
  bread: {
    color: "#fff"
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const handleHome = () => {
    const { history } = props;
    history.push('/');
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Breadcrumbs className={classes.bread} separator="›" aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleHome}>
            Counter-Stats
          </Link>
          <Typography color="secondary">Player Profile</Typography>
        </Breadcrumbs>
      </Paper>
    </div>
  )
}

export default Header;