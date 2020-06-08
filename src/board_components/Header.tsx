import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MainMenu } from './MainMenu';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: 'white',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuEl, setMenuEl] = useState(null);
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button
          size="small"
          onClick={(e: any) => {
            setMenuEl(e.currentTarget);
            setIsMenuOpen(true);
          }}
          aria-controls="main-menu"
          aria-haspopup="true"
        >
          Triple-i
        </Button>
        <MainMenu anchorEl={menuEl} isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          毎日プログラミング
        </Typography>
        <Button variant="outlined" size="small">
          <a href="https://twitter.com/kikun_triplei">Twitter</a>
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
