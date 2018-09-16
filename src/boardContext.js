import React from 'react';
import {getRandom2dArray} from './helpers/generateBoard';

export const BoardArray = getRandom2dArray();

export const BoardContext = React.createContext(BoardArray);