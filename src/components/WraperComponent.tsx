import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material';
import { IUser } from '../models/UserModels';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ContainerComponent from './ContainerCardComponent';
import { EView, IViewListUser } from '../models/ConfigModels';
import { useState } from 'react';
import ContainerListComponent from './ContainerListComponent';
import ContainerCardComponent from './ContainerCardComponent';

// const conf: IViewListUser = {
//   viewState: EView.card,
//   viewImage: false,
// };

interface IProps {
  users: IUser[];
  modView: EView;
}

export const WraperComponent = (props: IProps) => {
  const { users, modView } = props;
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<number>(0);
  const [confWrap, setConfWrap] = useState<IViewListUser>({
    viewState: modView,
    viewImage: false,
  });

  const handlerCard = () => {
    setConfWrap(confWrap => ({
      ...confWrap,
      viewState: EView.card,
    }));
  };

  const handlerList = () => {
    setConfWrap(confWrap => ({
      ...confWrap,
      viewState: EView.list,
    }));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setSelectedUser = (n: number) => {
    const us = users.filter(u=>{u=n});
    // users.filter// filter users. state for users. zapolniti dialog
    setOpen(true);
    setCurrentUser(n);
  };

  return (
    <>
      <Card
        style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '10px',
        }}
      >
        <Stack direction="row" spacing={1}>
          <IconButton onClick={handlerCard}>
            <AddRoadIcon color="primary" />
          </IconButton>
          <IconButton
            onClick={handlerList}
            color="secondary"
            aria-label="add an alarm"
          >
            <MoreHorizIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>

        {users.map(u =>
          confWrap.viewState === EView.card ? (
            <ContainerCardComponent
              setSelectedUser={setSelectedUser}
              user={u}
              key={u.idno}
            />
          ) : (
            <ContainerListComponent user={u} key={u.idno} />
          )
        )}
      </Card>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{currentUser}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default WraperComponent;
