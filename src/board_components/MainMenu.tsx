import React from 'react';
import { withStyles, Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home as HomeIcon, QueryBuilder as QueryBuilderIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

type StyledMenuType = {
  open: boolean;
  anchorEl: Element | null;
  onClose: () => void;
};

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: StyledMenuType) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

type MainMenu = {
  isOpen: boolean;
  anchorEl: Element | null;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};
export function MainMenu(props: MainMenu) {
  const handleClose = () => {
    props.setIsMenuOpen(false);
  };
  const history = useHistory();
  console.log(history);

  return (
    <div>
      <StyledMenu anchorEl={props.anchorEl} open={props.isOpen} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            history.push('/');
            props.setIsMenuOpen(false);
          }}
        >
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="作成済み" />
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push('/plan');
            props.setIsMenuOpen(false);
          }}
        >
          <ListItemIcon>
            <QueryBuilderIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="作成予定" />
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
