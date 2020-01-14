import * as types from "./actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  username: user ? user.username : "",
  password: "",
  phoneNumber: user ? user.phoneNumber : "",
  plantsList: [],
  editingPlantId: 0,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return state;
    case types.ON_SIGNUP_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      };
    case types.LOGIN:
      return initialState;
    case types.ON_LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      };
      case types.ADD_PLANT:
        return {
          ...state,
          plantsList: [action.payload, ...state.plantsList],
          
        };
        case types.GET_USER:
        return {
          ...state,
          username: action.payload.username,
          phoneNumber: action.payload.phoneNumber
        }; 


      case types.EDIT_USER:
        return {
          ...state,
          username: action.payload.username,
          phoneNumber: action.payload.phoneNumber,
        }
    case types.EDIT_PLANT:
      return {
        ...state,
        plantsList: state.plantsList.map(plant =>
          plant.id === action.payload.id ? action.payload : plant
        )
      };
    case types.DELETE_PLANT:
      return {
        ...state,
        plantsList: state.plantsList.filter(
          plant => plant.id !== action.payload
        )
      };

    case types.GET_PLANT:
      return {
        ...state,
        plantsList: action.payload
      }

    case types.START_EDIT_PLANT:
      return {
        ...state,
        editingPlantId: action.payload
      }
    default:
      return state;
  }
};


export default signupReducer;
