import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { IUser } from '../models/UserModels';

interface IProps {
  user: IUser;
  setSelectedUser: (idnoUser: number) => void;
}

const ContainerComponent = (props: IProps) => {
  const { title, description, idno } = props.user;
  const detailsHandler = () => {
    props.setSelectedUser(idno);
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Имя Фамилияasdasdas {title}
          </Typography>
          <Typography variant="h5" component="div">
            IDNO {idno}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Описание {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={detailsHandler}>
            Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ContainerComponent;
