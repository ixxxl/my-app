import { IconButton } from '@mui/material';
import { IUser } from '../models/UserModels';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface IProps {
  user: IUser;
}

const styleObj = {
  width: '200px',
  height: '300px',
  border: '1px solid yellow',
};

const ContainerListComponent = (props: IProps) => {
  return (
    <div style={styleObj}>
      Имя Фамилия {props.user.title} <hr /> IDNO {props.user.idno} <hr />
      Описание {props.user.description}
      <hr />
      Фото {props.user.urlPhoto}
      <hr />
    </div>
  );
};

export default ContainerListComponent;
