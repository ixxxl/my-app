import { Card, IconButton, Stack } from '@mui/material';
import { IUser } from '../models/UserModels';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ContainerComponent from './ContainerCardComponent';
import { EView, IViewListUser } from '../models/ConfigModels';
import { useState } from 'react';
import ContainerListComponent from './ContainerListComponent';

// const conf: IViewListUser = {
//   viewState: EView.card,
//   viewImage: false,
// };

interface IProps {
  users: IUser[];
}

export const WraperComponent = (props: IProps) => {
  const { users } = props;
  const [confWrap, setConfWrap] = useState<IViewListUser>({
    viewState: EView.list,
    viewImage: false,
  });

  const handlerCard = () => {
    setConfWrap(confWrap => ({
      ...confWrap,
      viewState: EView.card,
    }));
  };

  const handlerList = () => {
    setConfWrap(confWrap => ({
      ...confWrap,
      viewState: EView.list,
    }));
  };

  return (
    <>
      <Card
        style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          padding: '10px',
        }}
      >
        <Stack direction="row" spacing={1}>
          <IconButton onClick={handlerCard}>
            <AddRoadIcon color="primary" />
          </IconButton>
          <IconButton
            onClick={handlerList}
            color="secondary"
            aria-label="add an alarm"
          >
            <MoreHorizIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>

        {users.map(u =>
          confWrap.viewState === EView.card ? (
            <ContainerComponent user={u} key={u.idno} />
          ) : (
            <ContainerListComponent user={u} key={u.idno} />
          )
        )}
      </Card>
    </>
  );
};

export default WraperComponent;
