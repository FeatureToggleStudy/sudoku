import {
  IGameState,
  OptionActions,
  CHANGE_DIFFICULTY,
  NEW_GAME,
  VALIDATE_SOLUTION,
  TOGGLE_CELL,
  SET_DIGIT,
  NAVIGATE_CELLS,
  REMOVE_DIGIT,
  TOGGLE_NOTE_MODE as SET_MODE,
  UNDO,
  REDO,
  MODE
} from "./types";
import Sudoku from "../models/Sudoku";
import { DIFFICULTY } from "../models/Difficulty";

const initialDifficulty = readDifficulty(DIFFICULTY.Easy)
const initialState: IGameState = {
  difficulty: initialDifficulty,
  sudoku: {
    past: [],
    current: Sudoku.create(initialDifficulty),
    future: []
  },
  mode: MODE.Input
};
const pastStates: Sudoku[] = []
const futureStates: Sudoku[] = []

export function gameReducer(state = initialState, action: OptionActions): IGameState {
  switch (action.type) {
    case CHANGE_DIFFICULTY:
      writeDifficulty(action.payload);
      return {
        ...state,
        difficulty: action.payload,
        sudoku: {
          past: [],
          current: Sudoku.create(action.payload),
          future: []
        }
      };
    case NEW_GAME:
      return {
        ...state,
        sudoku: {
          past: [],
          current: Sudoku.create(state.difficulty),
          future: []
        }
      };
    case VALIDATE_SOLUTION:
      return {
        ...state,
        sudoku: {
          ...state.sudoku,
          current: state.sudoku.current.validate()
        }
      };
    case TOGGLE_CELL:
      return {
        ...state,
        sudoku: {
          ...state.sudoku,
          current: state.sudoku.current.activateCell(action.payload.row, action.payload.column)
        }
      };
    case SET_DIGIT:
      console.log(pastStates, futureStates);
      return {
        ...state,
        sudoku: {
          past: [...state.sudoku.past, state.sudoku.current],
          current: state.sudoku.current.setDigit(action.payload.digit, state.mode),
          future: []
        }
      };
    case REMOVE_DIGIT:
      console.log(pastStates, futureStates);
      return {
        ...state,
        sudoku: {
          past: [...state.sudoku.past, state.sudoku.current],
          current: state.sudoku.current.removeDigit(),
          future: []
        }
      };
    case NAVIGATE_CELLS:
      return {
        ...state,
        sudoku: {
          ...state.sudoku,
          current: state.sudoku.current.navigate(action.payload.direction)
        }
      };
    case SET_MODE:
      return {
        ...state,
        mode: action.payload.mode
      };
    case UNDO:
      if (!state.sudoku.past.length) {
        return state;
      }
      const previous = state.sudoku.past.slice(-1)[0];
      return {
        ...state,
        sudoku: {
          past: state.sudoku.past.slice(0, -1),
          current: previous,
          future: [...state.sudoku.future, state.sudoku.current]
        }
      }
    case REDO:
      if (!state.sudoku.future.length) {
        return state;
      }
      const next = state.sudoku.future.slice(-1)[0];
      return {
        ...state,
        sudoku: {
          past: [...state.sudoku.past, state.sudoku.current],
          current: next,
          future: state.sudoku.future.slice(0, -1)
        }
      }
    default:
      return state;
  }
}

function readDifficulty(fallBack: DIFFICULTY): DIFFICULTY {
  const data = window.localStorage.getItem('DIFFICULTY');
  if (!data) {
    return fallBack;
  }
  return data as unknown as DIFFICULTY;
}
function writeDifficulty(difficulty: DIFFICULTY) {
  window.localStorage.setItem('DIFFICULTY', difficulty.toString());
}