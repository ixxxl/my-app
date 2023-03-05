import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import { EView, IViewListUser } from '../models/ConfigModels';
import { IUser } from '../models/UserModels';
import AddContainerComponent from './AddContainerComponent';
import FormPropsTextFields from './FormContainer';

interface IProps {
  users: IUser[];
  modView: EView;
}

export const WraperDialog = (props: IProps) => {
  const { users, modView } = props;

  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [confWrap, setConfWrap] = useState<IViewListUser>({
    viewState: modView,
    viewImage: false,
  });

  const handlerAdd = () => {
    setConfWrap(confWrap => ({
      ...confWrap,
      viewState: EView.add,
    }));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const setSelectedUser = (user: IUser) => {
    setOpen(true);
    setCurrentUser(user);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Axios Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentUser ? currentUser.title : ''}</DialogTitle>
        <DialogContent>
          <FormPropsTextFields idno={currentUser?.idno} />
          <DialogContentText></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WraperDialog;
