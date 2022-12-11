import { createSlice } from '@reduxjs/toolkit'

export const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    selectedTab : ""
},
  reducers: {
    setSelectedTab: (state = initialState , action) => {
       state.selectedTab = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedTab } = tabSlice.actions

export default tabSlice.reducer