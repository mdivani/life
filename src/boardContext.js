import React from 'react';
import {getRandom2dArray} from './helpers/generateBoard';

//default value
export const BoardArray = getRandom2dArray();

export const BoardContext = React.createContext(BoardArray);