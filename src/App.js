import React from "react";
import axios from 'axios';
import './App.css'
import { http } from "follow-redirects";


function Title(props)  { //state less
  return (
   
    <h1>{props.name}</h1>

  )
}

const ProductCard = (props) => {
  return (
    
    <div className="product-card">
      {props.item.name},
      {props.item.price}
    
    <button type="button" class="btn btn-success">But it now</button>
    </div>
    
  )
}


class ProductList extends React.Component { //state full
  state = {
    //key : value
    products: [
      {
        name: "Oreo",
        description: "Biscuit. 112g",
        price: 270.0
      },

      {
        name: "3D Mask ผู้ใหญ่",
        description: "Biscuit. 112g",
        price: 129.0
      },

      {
        name: "กะเพรา",
        description: "กะเพรา 4 ต้น",
        price: 10.5
      },

      {
        name: "Bar-B-Plaza E-voucher",
        description: "e-voucher 1000",
        price: 85.0
      },
    ],
    user: {
      name: "Bas"
    }
  }

  componentDidMount =() => {

      axios.get('https://dry-scrubland-02499.herokuapp.com/api/v1/products')
      
    // setTimeout(()=>{
    //   this.setState({
    //     user:{
    //       name: "Nutnarong"
    //     }
    //   })
    // },3000);
  }

  render() {   ///// important
    return (   ///// must return
      <div>
        <Title name = {this.state.user.name}/>
        <Title name ="New Product"/>
        <ProductCard item = {this.state.products[0]}/>
        <ProductCard item = {this.state.products[1]}/>
        <Title name="Nut" />
        <Title name="9" />
        
        <div>
          {this.state.products.map(
            (product) => (
              <ProductCard item={product}/>

              // <div>
              //   {product.name},
              // {product.price}
              // </div>
            )
            )}
        </div>
      </div>
    );
  }
}

export default ProductList;
