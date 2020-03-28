import React, { Component } from 'react';


class FoodInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="form-group">
            <label>ป้อนรายการอาหาร</label>
            <input type="text" class="form-control" value=""></input>
          </div>
          <input type="submit" class="btn btn-primary" value="บันทึกรายการ"></input>
        </form>

      </div>
    )
  }

}

export default FoodInput;