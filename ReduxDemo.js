// let redux = require("redux")

// const initialState = {
//     like: 5,
// }

// const mReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "INC_LIKE":
//             return {...state, like: state.like + 1}
//         case "CUSTOM_LIKE":
//             return {...state, like: state.like + action.likes}
//         default:
//             return {...state}
//     }
// }

// let globalStore = redux.createStore(mReducer)

// globalStore.subscribe(() => {
//     console.log(globalStore.getState())
// })

// globalStore.dispatch({type: "INC_LIKE"})
// globalStore.dispatch({type: "INC_LIKE"})
// globalStore.dispatch({type: "INC_LIKE"})
// globalStore.dispatch({type: "INC_LIKE"})
// globalStore.dispatch({type: "CUSTOM_LIKE", likes: 100})

let redux = require("redux")
const initialState = {
    like: 0,
}
let mAction = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {...state, like: state.like + 1}
        default:
            return {...state}
    }
}
const store = redux.createStore(mAction)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type: "INC"})
