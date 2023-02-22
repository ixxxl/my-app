import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { type } from 'os';
import { useEffect, useState } from 'react';
import './App.css';
import ComponentDialog from './components/ComponentDialog';
import WraperComponent from './components/WraperComponent';
import { EView } from './models/ConfigModels';
import { IUser } from './models/UserModels';

// const users: IUser[] = [
//   {
//     title: 'Person 1',
//     idno: 11111111,
//     description: 'options1',
//     urlPhoto: 'phtourlPhoto1',
//   },

//   {
//     title: 'Person 2',
//     idno: 22222222222,
//     description: 'options 2',
//     urlPhoto: 'phtourlPhoto2',
//   },

//   {
//     title: 'Person 3',
//     idno: 333333333,
//     description: 'options 3 ',
//     urlPhoto: 'phtourlPhoto3',
//   },

//   {
//     title: 'Person 4',
//     idno: 444444444,
//     description: 'options 4 ',
//     urlPhoto: 'phtourlPhoto5',
//   },

//   {
//     title: 'Person 5',
//     idno: 555555555,
//     description: 'options 5 ',
//     urlPhoto: 'phtourlPhoto5',
//   },

//   {
//     title: 'Person 3',
//     idno: 666666666,
//     description: 'options 6 ',
//     urlPhoto: 'phtourlPhoto6',
//   },
// ];

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch('Users.json')
      .then(response => response.json())
      .then(json => setUsers(json.users));
  }, []);


  return (
    <div className="App">
      <div style={{ display: 'flex', gap: '15px' }}>
        <WraperComponent modView={EView.list} users={users} />
        <WraperComponent modView={EView.card} users={users} />
        {/* <ComponentDialog /> */}
      </div>
      
    </div>
  );
}

export default App;
