import React, { Component } from 'react';
import { connect } from 'react-redux';  ///เชื่อมให้ Commentform และ commentReducer รู้จักกัน


class EditComponent extends Component {
  handleSubmit = (e) => {
    e.preventDefault();  //ไม่ต้องให้หน้าBrowserมันเปลี่ยน
    const newname = this.getName.value;  //ดึงค่าจากตัวแปร getName  
    const newmessage = this.getMessage.value;//ดึงค่าจากตัวแปร getMessage

    //Edit data Update Complete
    const data = {
      
      newname,
      newmessage

    }

    this.props.dispatch({  ///การเอา object ที่ได้จากด้านบนเข้าไปในคลัง(state)
      type: 'UPDATE',
      id:this.props.comment.id,
      data:data        ///data ก้อนใหม่ที่ส่งมา
    }
    );
  }

    render(){
      return (
        <div>

          <form onSubmit={this.handleSubmit}>
            <input required type="index" placeholder="ป้อนชื่อ" ref={(input) => this.getName = input} defaultValue={this.props.comment.name} /><br /><br />
            <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input) => this.getMessage = input} defaultValue={this.props.comment.message} /><br /> <br />
            <button>Update</button>
          </form>

        </div>
        /// เอาค่าที่ใส่เข้ามาเก็บไว้ในตัว getName และนำไปเรียกใช้ใน fucntion handleSubmit ด้านบน

        // defaultValue เป็นการเอาค่าที่ใส่เข้ามาให้แสดงเวลากด Edit

      );
    }
  }

  export default connect()(EditComponent); ///เชื่อมให้ Commentform และ commentReducer รู้จักกัน
