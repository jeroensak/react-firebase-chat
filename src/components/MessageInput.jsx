import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '2px 4px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      width: 'calc(100% - 16px)',
    },
    input: {
      margin: '0 8px',
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);

const MessageInput = ({ onSubmit, className }) => {
  const [value, setValue] = React.useState('');
  const classes = useStyles();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);

    setValue('');
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={onFormSubmit}>
      <InputBase
        className={classes.input}
        placeholder="Send a message"
        inputProps={{ 'aria-label': 'Send a message' }}
        value={value}
        onChange={onChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="send" type="submit">
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default MessageInput;
