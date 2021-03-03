import {ADD_TODO, DELETE_TODO,SWITCH_STATE} from '../actionTypes';


const initialState=[]


export default function(state = initialState, action){
    switch (action.type) {
        case ADD_TODO: {
            const [id, content] = [action.payload.id, action.payload.content]
            return state.concat([{id: id, content: content , completed: false}])
        }
            
        case DELETE_TODO :{
            const id = action.payload.id;
            return state.filter(item => item.id !== id)
        }    
        case SWITCH_STATE : {
            const id = action.payload.id
            return state.map(item => { 
                if (item.id === id)
                    {
                        item.completed = true;
                        return item
                }
                return item
            })
        }
    
        default:
            return state
    }
}