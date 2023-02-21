import { type } from 'os';
import { useEffect, useState } from 'react';
import './App.css';
import WraperComponent from './components/WraperComponent';
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
  const [isGetData, setIsGetData] = useState<boolean>(false);
  useEffect(() => {
    if (isGetData) {
      fetch('Users.json')
        .then(response => response.json())
        .then(json => setUsers(json.users));
    } 
  }, [isGetData]);

  return (
    <div className="App">
      <button onClick={()=>setIsGetData(true)}>GET data</button>
      <div style={{ display: 'flex', gap: '15px' }}>
        <WraperComponent users={users} />
        <WraperComponent users={users} />
      </div>
    </div>
  );
}

export default App;
