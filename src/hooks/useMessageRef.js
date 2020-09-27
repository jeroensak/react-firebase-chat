import { auth, firestore } from '../firebase';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export const useMessageRef = () => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const sendMessage = async (messageValue) => {
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: messageValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  };

  return { messages, sendMessage };
};
