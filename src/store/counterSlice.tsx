import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

// Define a type for the slice state
interface CounterState {
  firstName: string;
  lastName:string;
  status:string;
}

// Define the initial state using that type
const initialState: Array<CounterState>=[]

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CounterState>) => {
        // You can access the payload using action.payload
        console.log(action.payload, "payload")
        state.push(action.payload);
    },
   
  },
})

export const { add,  } = counterSlice.actions



export default counterSlice