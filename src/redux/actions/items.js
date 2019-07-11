import {
  actionTypes
} from "/";


export const fetchItems = () => {
  return async dispatch => {
    try {
      const itemsJSON = await fetch("https://silkswap.com/graphql");
      const items = await itemsJSON.json();

      dispatch({
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        payload: items
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ITEMS_FAILED,
        payload: error.message
      });
    }
  };
};


export const addItemToList = payload => {
  return {
    type: 'ADD_ITEM_TO_LIST',
    payload
  }
}

export const removeItemFromList = payload => {
  return {
    type: 'REMOVE_ITEM_FROM_LIST',
    payload
  }
}