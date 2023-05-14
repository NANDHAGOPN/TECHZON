import { useState, useRef } from "react";

const Login = () => {
  const [productName, setProductName] = useState("Apple iPhone ");
  const [productImage, setProductImage] = useState("img4.gadgetsnow.com/gd/images/products/additional/large/G390858_View_1/mobiles/smartphones/apple-iphone-14-pro-max-256-gb-deep-purple-6-gb-ram-.jpg");

  const productBoxRef = useRef(null);

  const printProduct = () => {
    const products = [];
    for (let i = 0,j=5; i<24;j<29,j++, i++) {
      products.push(
        <div key={i} className="product_card_container">
          <div className="product_card">
            <img src={`https://${productImage}`} alt={productName} />
            <div className="product_details">
              <div className="product_name">{productName+j}  Pro Max</div>
              <div className="product_price">{2000+i*200}$</div>
            </div>
          </div>
        </div>
      );
    }
    return products;
  };

  const menuSwitch = (e, name, image) => {
    setProductName(name);
    setProductImage(image);
    const sidebarItem = document.getElementById(`sidebar_item_${e}`);
    sidebarItem.classList.add("active");
    printProduct();
  };

  return (
    <div>
      <div id="product_box" ref={productBoxRef} className="product_box_horizontal">
        {printProduct()}
      </div>
     
    </div>
  );
};

export default Login;



