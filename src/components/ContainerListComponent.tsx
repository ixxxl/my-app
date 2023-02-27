import { IUser } from '../models/UserModels';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface IProps {
  user: IUser;
  setSelectedUser: (u: IUser) => void;
}

const styleObj = {
  width: '200px',
  height: '300px',
  border: '1px solid yellow',
  margin: 0,
  overflow: 'hidden',
  cursor: 'pointer',
  outline: '1rem solid',
  outlineColor: 'ButtonFace',
};

const ContainerListComponent = (props: IProps) => {
  const detailsHandler = () => {
    props.setSelectedUser(props.user);
  };
  return (
    <div onClick={detailsHandler} style={styleObj}>
      Имя Фамилия {props.user.title} <hr /> IDNO {props.user.idno} <hr />
      Описание {props.user.description}
      <hr />
      <img src={props.user.urlPhoto} width="40px"></img>
      <hr />
    </div>
  );
};

export default ContainerListComponent;
