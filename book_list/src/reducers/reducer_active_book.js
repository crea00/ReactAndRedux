// all reducers get to arguments the current state and action
// So, reducers are only ever called when an action occurs 
// State argument is not application state, only the state this reducer is responsible for
// state = null : This is a piece of ES6 syntax and basically what it says is when this argument comes in if it's undefined, set it to null.
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      /*
        Don't do something like this. We always want to return a fresh object.

        state.title = book.title
        return state
      */
      return action.payload;
  }

  return state;
}