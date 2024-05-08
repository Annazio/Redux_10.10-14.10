 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={
    list: [
        {id: 1001, title: 'essen', done: true},
        {id: 1002, title: 'lernen', done: false},
        {id: 1003, title: 'Projekt schreiben', done: true},
        {id: 1004, title: 'laufen', done: false},

    ]
}

export const fetchTodos = createAsyncThunk(
    'todo/fetchTodos',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        return data
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
            remove(state, {payload}){
                state.list = state.list.filter(({id}) => id !== payload);
            },
            changeDone(state, {payload}){
                const target = state.list.find(({id}) => id === payload);
                target.done = !target.done
            },
            reset(state){
                state.list = []
            },
            allDone(state){
                state.list = state.list.map(elem => ({...elem, done: true}));
             },
            allNotDone(state){
                state.list = state.list.map(elem => ({...elem, done: false}))
             },
             deleteDone(state){
                state.list = state.list.filter(({done}) => !done);
             },
             addTodo(state, {payload}){
                state.list.push({id: Date.now(), title: payload, done: false})
             }
        },
    extraReducers: (builder) => {
        builder
           .addCase(fetchTodos.pending, (state) => {
                 state.status = 'loading'
           })
           .addCase(fetchTodos.fulfilled, (state, {payload}) =>{
            // то что возвращает наша функция fetchTodos(сетевой запрос) это и есть payload
                 state.status = "ready"
            // Значение done устанавливается на значение completed. Таким образом, объекты в новом массиве будут иметь поля id, title и done, где done будет равно значению completed.
                 const clear = payload.map(({id, title, completed}) => ({id, title, done: completed}))
                 state.list.push(...clear)
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.status = "error"
            })
    }
    })

export const {remove, changeDone, reset, allDone, allNotDone, deleteDone, addTodo} = todoSlice.actions
export default todoSlice.reducer;