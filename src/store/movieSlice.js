const { createSlice } = require("@reduxjs/toolkit")



const movieSlice = createSlice({
    name:'movie',
    initialState:[],
    reducers:{
        addMovie(state,action) {
            state.push(action.payload)


        }
    }
})


export const {addMovie} = movieSlice.actions
export default movieSlice.reducer