import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  AppBar,
  Button,
  Link,
  IconButton
} from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router';
import { ArrowBackSharp } from '@material-ui/icons';

const styles = theme => ({
  navBar: {
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    height: theme.spacing(6),
    display: 'block'
  },
  navBarInnerContainer: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    height: '100%'
  },
  navBarSecondary: {
    color: theme.palette.secondary.main,
    marginLeft: theme.spacing(2),
    verticalAlign: 'baseline',
    cursor: 'pointer'
  }
});

const backablePaths = ['/survey'];

const Nav = ({ history, classes, location, theme }) => {
  const [canBack, setCanBack] = useState(
    backablePaths.includes(window.location.pathname)
  );

  useEffect(() => {
    setCanBack(backablePaths.includes(window.location.pathname));
    console.log('heeere');
  }, [location]);

  return (
    <AppBar static className={classes.navBar}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
        className={classes.navBarInnerContainer}>
        <Grid container direction="row" xs={6} s={6} justify="flex-start">
          {canBack ? (
            <>
              <IconButton
                onClick={() => {
                  history.push('/');
                }}>
                <ArrowBackSharp />
              </IconButton>
            </>
          ) : (
            <Link
              onClick={() => {
                history.push('/');
              }}
              variant={window.isMobile ? 'h8' : 'h6'}>
              RFK Community Project
            </Link>
          )}
        </Grid>
        <Grid container xs={5} direction="row" justify="flex-end">
          <Grid item style={{ marginRight: theme.spacing(4) }}>
            <Link
              onClick={() => {
                history.push('/who-are-we');
              }}
              variant="h7"
              className={classes.navBarSecondary}>
              Who are we?
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(withRouter(Nav));
