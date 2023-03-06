import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useAxiosPost } from '../services/hooks/axios';
import AddContainerComponent from './AddContainerComponent';
interface IProps {
  idno: number | undefined;
}
export default function FormPropsTextFields(props: IProps) {
  const [btn, setBtn] = useState<boolean>();
  const [tfValue, setTFValue] = useState<string>('');
  const [idno, setIdno] = useState<any>();
  const [state, setState] = useState({
    name: tfValue,
    idno: idno,
  }); //input values. multiple loads, save input from nuttons. dialog to icon, curent user IDNO missing
  let userdata;
  const { data, error, loaded } = useAxiosPost(
    `http://localhost:3010/statistic`,
    'testUser: 123'
    //state
  );

  const handlerClick = () => {
    setBtn(true);
    console.log('field name: ' + tfValue);
    console.log('field idno: ' + idno);
    const temp = [tfValue, idno];
    // setState(temp)
  };

  useEffect(() => {
    console.log(data);
  }, [btn]);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          onChange={newValue => setTFValue(newValue.target.value)}
          required
          id="outlined-required"
          label="Your Name"
          placeholder="Your Name"
        />
        <TextField
          onChange={num => setIdno(num.target.value)}
          required
          id="outlined-number"
          label="IDNO"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button onClick={handlerClick} variant="text">
          Save user
        </Button>
        <Button variant="text">Remove user</Button>

        {/* <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />*/}
      </div>
    </Box>
  );
}
