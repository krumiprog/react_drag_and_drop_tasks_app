import { useContext, useReducer } from 'react';
import boardsReducer from './boardsReducer';

const AppProvider = ({ childer }) => {
  const [state, dispatch] = useReducer(boardsReducer, []);
};
