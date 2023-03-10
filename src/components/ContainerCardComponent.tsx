import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { IUser } from '../models/UserModels';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Divider } from '@mui/material';

interface IProps {
  user: IUser;
  setSelectedUser: (u: IUser) => void;
}

const ContainerComponent = (props: IProps) => {
  const { title, description, idno, urlPhoto } = props.user;
  const detailsHandler = () => {
    props.setSelectedUser(props.user);
  };

  return (
    <div>
      <div
        onClick={detailsHandler}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          cursor: 'pointer',
          outline: '1rem solid',
          outlineColor: 'ButtonFace',
        }}
      >
        <img src={urlPhoto} width={'40px'} height={'40px'}></img>
        <div
          style={{
            display: 'flex',
            minWidth: '300px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingLeft: '10px',
          }}
        >
          <Typography sx={{ fontSize: 20 }} color="text.primary">
            {title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            {idno}
          </Typography>
        </div>
        <IconButton onClick={detailsHandler}>
          <PlayArrowIcon color={'success'} />
        </IconButton>
      </div>
      <Divider />
    </div>
  );
};

export default ContainerComponent;
