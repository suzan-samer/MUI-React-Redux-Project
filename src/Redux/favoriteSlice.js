import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedFavProducts: [ ],
}

export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.selectedFavProducts.push(action.payload)
      
    },
    removeFromFav:(state,action)=>{
      const newArr=state.selectedFavProducts.filter((item) => {
        return item.id !==action.payload.id
      })
      state.selectedFavProducts=newArr;
    }
  },
})

// Action creators are generated for each case reducer function
export const {addToFav,removeFromFav } = favSlice.actions

export default favSlice.reducer