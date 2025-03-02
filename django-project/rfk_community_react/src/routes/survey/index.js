import React, { useEffect, useState } from 'react';
import { Paper, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    height: '70vh',
    marginTop: theme.spacing(10),
    pointerEvents: 'initial'
  }
});

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const Survey = ({ classes }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.getElementById('survey-container').innerHTML =
      '<iframe id="survey" src="https://docs.google.com/forms/d/e/1FAIpQLSe2_yC4xkRUAltnl3cTGzVezfE9Q3-jxh7Qv9w7OxqzlmMk7g/viewform?embedded=true" width="1000" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
    setLoading(true);
    document.getElementById('survey').onload = function(e) {
      handleWindowResize();
      e.target.style.borderRadius = '5px';
      e.target.style.backgroundColor = 'rgb(255,255,255, .35)';

      setLoading(false);
    };

    window.addEventListener('resize', handleWindowResize);
  }, []);

  const handleWindowResize = () => {
    const survey = document.getElementById('survey');
    if (survey) {
      survey.style.width = window.isMobile ? '90vw' : '70vw';
    }
  };

  return (
    <Grid
      container
      direction="row"
      className={classes.container}
      justify="center"
      alignItems={loading ? 'center' : ''}>
      <Grid item xs={12} md={12}>
        {loading && <CircularProgress></CircularProgress>}
        <div
          id="survey-container"
          style={{ display: `${loading ? 'none' : 'initial'}` }}></div>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Survey);
