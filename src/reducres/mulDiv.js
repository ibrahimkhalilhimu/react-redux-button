const initialState = 5;

const mulDivNumber = (state=initialState,action)=>{
switch(action.type){
    case 'MULT' : return state * action.payload;
    case 'DIVIDE' : return state / action.payload;
    default : return state;
}
}
export default mulDivNumber;