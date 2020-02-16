import React from "react";

function Title(props)  { //state less
  return (
    <h1>{props.name}</h1>


  )
}

const ProductCard = (props) => {
  return (
    <div>
      {props.item.name},
      {props.item.price}
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
      }
    ],
    user: {
      name: "Bas"
    }
  };

  render() {   ///// important
    return (   ///// must return
      <div>
        <ProductCard item = {this.state.products[0]}/>
        <ProductCard item = {this.state.products[1]}/>
        <Title name ="New Product"/>
        <Title name="Nut" />
        <Title name={10}/> 
        
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
