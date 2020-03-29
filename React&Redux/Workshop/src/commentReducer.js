
const commentReducer = (state = [], action)=>{
      //เขียนรูปแบบ Action
      switch(action.type){    ///เงื่อนไข
            case 'ADD_COMMENT':  ///จะให้ 'ADD_COMMENT' ทำอะไร
            return state.concat([action.data]);
            
            case 'DELETE_COMMENT':
            return state.filter((comment)=>comment.id !== action.id);
            
            default:
            return state;
      }

}
export default commentReducer;