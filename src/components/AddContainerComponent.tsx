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
import FormPropsTextFields from './FormContainer';

// export default function AddContainerComponent() {
//   const [open, setOpen] = useState(false);
//   const [currentUser, setCurrentUser] = useState<IUser | null>(null);

//   const setSelectedUser = (user: IUser) => {
//     setOpen(true);
//     setCurrentUser(user);
//   };
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Slide in alert dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle>{"Use Google's location service?"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//             <FormPropsTextFields idno={currentUser?.idno} />
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose}>Agree</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// interface IProps {
//   users: IUser[];
//   modView: EView;
// }

// export const AddContainerComponent = (props: IProps) => {
//   const { users, modView } = props;

//   const [open, setOpen] = useState(false);
//   const [currentUser, setCurrentUser] = useState<IUser | null>(null);
//   const [confWrap, setConfWrap] = useState<IViewListUser>({
//     viewState: modView,
//     viewImage: false,
//   });

//   const handlerAdd = () => {
//     setConfWrap(confWrap => ({
//       ...confWrap,
//       viewState: EView.add,
//     }));
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const setSelectedUser = (user: IUser) => {
//     setOpen(true);
//     setCurrentUser(user);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Axios Dialog
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{currentUser ? currentUser.title : ''}</DialogTitle>
//         <DialogContent>
//           <FormPropsTextFields idno={currentUser?.idno} />
//           <DialogContentText></DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default AddContainerComponent;

interface IProps {
  user: IUser;
  setSelectedUser: (u: IUser) => void;
}

const AddContainerComponent = (props: IProps) => {
  const { title, description, idno, urlPhoto } = props.user;
  const detailsHandler = () => {
    props.setSelectedUser(props.user);
  };

  return <div onClick={detailsHandler}></div>;
};

export default AddContainerComponent;
