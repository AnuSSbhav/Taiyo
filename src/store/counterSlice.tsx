import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'
import { CounterState } from '../utils'

// Define a type for the slice state


// Define the initial state using that type
const initialState: Array<CounterState>=[]

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CounterState>) => {
        // You can access the payload using action.payload
        console.log(action.payload, "ADD")
        state.push(action.payload);
    },
    //  the action to removeItem
    removeItem: (state, action: PayloadAction<number>) => {
      return state.filter(item => item.id !== action.payload);
    },
     // Modify the existing item based on ID
     editItem: (state, action: PayloadAction<CounterState>) => {
      const editedItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (editedItemIndex !== -1) {
        // Create a new item with the edited properties
        const editedItem = { ...action.payload };

        // Replace the item at the specified index
        state[editedItemIndex] = editedItem;
      }
      console.log(action.payload,"ed")
    }
   
  },
})

export const { add,removeItem,editItem} = counterSlice.actions



export default counterSlice