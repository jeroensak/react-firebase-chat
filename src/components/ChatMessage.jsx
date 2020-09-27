import React from 'react';
import { auth } from '../firebase';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '8px 0',
    },
    sent: {
      textAlign: 'right',
    },
    received: {
      textAlign: 'left',
    },
    avater: {
      borderRadius: '50%',
    },
  }),
);

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  const classes = useStyles();

  const messageClass = uid === auth.currentUser.uid ? classes.sent : classes.received;

  return (
    <div className={`${classes.root} ${messageClass}`}>
      <Chip
        avatar={<img className={classes.avater} src={photoURL} alt="img" width="50px" />}
        size="medium"
        label={text}
      />
    </div>
  );
};

export default ChatMessage;
