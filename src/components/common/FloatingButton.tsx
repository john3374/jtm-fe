import React, { useState } from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import RedeemIcon from '@mui/icons-material/Redeem';
import DescriptionIcon from '@mui/icons-material/Description';

function FloatingButton() {
  const items = [
    { icon: <RedeemIcon />, name: 'gift' },
    { icon: <DescriptionIcon />, name: 'paper' },
  ];

  const [click, setClick] = useState<boolean>(false);

  const onClose = () => {
    setClick(false);
  };

  const onOpen = () => {
    setClick(true);
  };

  return (
    <SpeedDial
      ariaLabel="button"
      direction="up"
      icon={<SpeedDialIcon />}
      onClose={onClose}
      onOpen={onOpen}
      open={click}
      FabProps={{
        color: 'default',
        size: 'small',
      }}
      style={{
        position: 'fixed',
        marginBottom: '0.9rem',
        bottom: 0,
      }}
    >
      {items.map(item => (
        <SpeedDialAction
          key={item.name}
          icon={item.icon}
          tooltipTitle={item.name}
          onClick={onClose}
        />
      ))}
    </SpeedDial>
  );
}

export default FloatingButton;