
const commentReducer = (state = [], action)=>{
      //เขียนรูปแบบ Action
      switch(action.type){    ///เงื่อนไข
            case 'ADD_COMMENT':  ///จะให้ 'ADD_COMMENT' ทำอะไร
            return state.concat([action.data]);
            
            default:
            return state;
      }

}
export default commentReducer;