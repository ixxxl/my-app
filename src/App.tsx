import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { height } from '@mui/system';
import { type } from 'os';
import { useEffect, useState, useRef } from 'react';
import './App.css';
import AddContainerComponent from './components/AddContainerComponent';
import Canvas from './components/CanvasComponent';
import WraperComponent from './components/WraperComponent';
import WraperDialog from './components/WraperDialog';
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

  const one = () => {
    return (
      <div style={{ display: 'flex', gap: '15px' }}>
        <WraperComponent modView={EView.list} users={users} />
        <WraperComponent modView={EView.card} users={users} />
        <WraperDialog modView={EView.add} users={users} />
        {/* <Canvas />  */}
        {/* <ComponentDialog /> */}
      </div>
    );
  };
  return (
    <div className="App">
      {/* <div
        style={{ width: '800px', height: '600px', border: '1px solid black' }}
      ></div> */}
      {one()}
    </div>
  );
}

export default App;
