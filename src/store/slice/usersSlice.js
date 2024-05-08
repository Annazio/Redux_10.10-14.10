import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState ={
    list: [
        {id: 1, first_name: 'Theresa', last_name: 'Mannell', age: 13, gender: "f"},
        {id: 2, first_name: 'Andrea', last_name: 'Fischer', age: 20, gender: "f"},
        {id: 3, first_name: 'Tobias', last_name: 'Reisinger', age: 15, gender: "m"},
        {id: 4, first_name: 'Johann', last_name: 'Molk', age: 1, gender: "m"},
        {id: 5, first_name: 'Maria', last_name: 'Bunte', age: 3, gender: "f"},
        {id: 6, first_name: 'Maximilian', last_name: 'Seifert', age: 63, gender: "m"},
    ]
} 

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async () => {
        const response = await fetch('http://127.0.0.1:5500/data.json')
        const data = await response.json()
        return data
    }
)


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        remove(state, {payload}){
            state.list=state.list.filter(({id}) => id !== payload)
        },
        clear(state){
            state.list = []
        }

    },
    extraReducers: (builder) => {
        builder
           .addCase(fetchUsers.pending, (state) => {
                 state.status = 'loading'
           })
           .addCase(fetchUsers.fulfilled, (state, {payload}) =>{
            // то что возвращает наша функция fetchTodos(сетевой запрос) это и есть payload
                 state.status = "ready"
                //  const genderConvertion = {'male': 'm', 'female: "f"}
                 const clear = payload.map(({id, first_name, last_name, gender, age}) => ({id, first_name, last_name, gender, age}))
                //  gender: genderConvertion[gender]
                 state.list.push(...clear)
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = "error"
            })
    }
})

export const {remove, clear} = usersSlice.actions;
export default usersSlice.reducer;