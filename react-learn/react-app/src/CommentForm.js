import React, { Component } from 'react';


class CommentForm extends Component {
    handleSubmit = (e) =>{
      e.preventDefault();  //ไม่ต้องให้หน้าBrowserมันเปลี่ยน
      const name = this.getName.value;  //ดึงค่าจากตัวแปร getName  
      const message = this.getMessage.value;//ดึงค่าจากตัวแปร getMessage
      //Object
      const data = {
        id: new Date(), //สร้าง id ให้เป็นค่าวันที่ที่ใส่เข้ามา
        name,
        message
      }
      this.getName.value="";  //เป็นการเคลียร์ค่าในช่องform หลังจากกด submit 
      this.getMessage.value="";
      console.log(data); //แสดงข้อมูลที่ใส่เข้ามาใน console 
    }
  
  
  render(){
    return (
      <div>
        <h1>Add Comment</h1>   
        <form onSubmit={this.handleSubmit}>
          <input required type="index" placeholder="ป้อนชื่อ" ref={(input)=>this.getName = input}/><br/><br/> 
          <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input)=>this.getMessage = input}/><br/> <br/>
          <button>Comment</button>
        </form>
       
    </div>
    /// เอาค่าที่ใส่เข้ามาเก็บไว้ในตัว getName และนำไปเรียกใช้ใน fucntion handleSubmit ด้านบน
    
    );
  }
}

export default CommentForm;
