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
import { useEffect, useState } from 'react';
import ContainerListComponent from './ContainerListComponent';
import FormPropsTextFields from './FormContainer';
import { shadows } from '@mui/system';

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
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [confWrap, setConfWrap] = useState<IViewListUser>({
    viewState: modView,
    viewImage: false,
  });

  const handlerList = () => {
    setConfWrap(confWrap => ({
      ...confWrap,
      viewState: EView.list,
    }));
  };

  const setSelectedUser = (user: IUser) => {
    setOpen(true);
    //getData();
    setCurrentUser(user);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const getData = () => {
  //   fetch('http://localhost:3010/credit')
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson);
  //     });
  // };

  useEffect(() => {
    fetch('http://localhost:3010/credit')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }, [open]);

  const handlerCard = () => {
    setConfWrap(confWrap => ({
      ...confWrap,
      viewState: EView.card,
    }));
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
          <IconButton onClick={handlerList}>
            <AddRoadIcon color="primary" />
          </IconButton>

          <IconButton
            onClick={handlerCard}
            color="secondary"
            aria-label="add an alarm"
          >
            <MoreHorizIcon style={{ display: 'flex' }} />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>

        {users.map(u =>
          confWrap.viewState === EView.card ? (
            <ContainerComponent
              setSelectedUser={setSelectedUser}
              user={u}
              key={u.idno}
            />
          ) : (
            <ContainerListComponent
              setSelectedUser={setSelectedUser}
              user={u}
              key={u.idno}
            />
          )
        )}
      </Card>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{currentUser ? currentUser.title : ''}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <img
                src={currentUser?.urlPhoto}
                width={'300px'}
                height={'300px'}
              ></img>
            </DialogContentText>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                fontSize: 20,
              }}
            >
              Description: {currentUser?.description}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 20,
              }}
            >
              <FormPropsTextFields />
            </div>
            <canvas className="c1" width={'400px'} height={'300px'} />
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
