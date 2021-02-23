import { useReducer } from 'react';

function Reducer() {

  const [book, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case 'add':
        state.count = action.count
        break;
      case 'save':
        state.name = action.name
        break;
      default:
        break;
    }
    return { ...state }

  }, {
    list: [],
    count: 1
  })
  return { book, dispatch }
}

export default Reducer 
