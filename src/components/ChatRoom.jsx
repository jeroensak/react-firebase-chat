import React from 'react';
import ChatMessage from './ChatMessage';
import { useMessageRef } from '../hooks/useMessageRef';
import MessageInput from './MessageInput';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Menu from './Menu';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: 'calc(100vh - 16px)',
      display: 'flex',
      flexDirection: 'column',
      padding: '8px',
    },
    messages: {
      flex: 1,
      overflow: 'scroll',
      marginBottom: '8px',
      height: 'auto',
    },
  }),
);

const ChatRoom = () => {
  const { messages, sendMessage } = useMessageRef();
  const classes = useStyles();

  const onSubmit = async (messageValue) => {
    await sendMessage(messageValue);

    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRef = React.useRef();

  return (
    <div className={classes.root}>
      <Menu />

      <div className={classes.messages}>
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <div ref={scrollToRef} />
      </div>

      <MessageInput onSubmit={onSubmit} />
    </div>
  );
};

export default ChatRoom;
