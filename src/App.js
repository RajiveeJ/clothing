import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Navigation from "./Navigation";
import Provider from "./Provider";
import Signup from "./Components/Signup";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import products from "./products.json";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "./Card";
import { Row, Col, Container } from "reactstrap";
import { useState } from "react";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const addCart = () => {
    setCartCount(cartCount + 1);
  };
  const removeCart = () => {
    if (cartCount !== 0) {
      setCartCount(cartCount - 1);
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <ToastContainer />
          <Navigation />

          <Routes>
            <Route path="/" element={<Login />} />
            
            
            <Route path="/signup" element={<Signup />} />
            
          </Routes>
        </Provider>
      </BrowserRouter>
     

  
      <Navigation cartCount={cartCount} />
      <Container>
        <Row xs="3">
          {products.map((data) => {
            return (
              <Col key={data.id}>
                <CardComponent
                  removeCart={removeCart}
                  addCart={addCart}
                  data={data}
                  key={data.id}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    
    </div>
  );
}



