import React, { Component } from "react";
import styled from "styled-components";
import Modal from 'react-modal';

class ProdModal extends Component {
    constructor(props) {
        super(props);
        this.state = {    
            count: 1
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        if(this.state.count < 50){
            this.setState({count:this.state.count+1})
        }
    }

    decrement(){
        if(this.state.count > 1){
            this.setState({count:this.state.count-1})
        }
    }

    render() { 
        console.log(this.props.product_name)
        var modalStyle={overlay: {zIndex: 2}}
        return (  
            <ModalContainer>
                <ProductModal isOpen={true} style={modalStyle}>
                    <div className="left">
                        <h1>{this.props.product_name}</h1>
                        <h2>{this.props.product_price}</h2>
                        <div className="counter">
                            <button onClick={this.decrement}>-</button>
                            <span> {this.state.count} </span>
                            <button onClick={this.increment}>+</button>
                        </div>
                        <div className="buttons">
                            <button className="add-order">Add Order</button>
                            <button className="cancel" onClick={this.props.mode}>Cancel</button>
                        </div>
                    </div>
                    <img src={this.props.product_img}/>
                </ProductModal>
            </ModalContainer>
        );
    }
}

const ModalContainer = styled.div`
  position: relative;
`;

const ProductModal = styled(Modal)`
  outline: none;
  background-color: white;
  box-shadow: 3px 6px 5px 3px #d6d6d6;
  border-radius: 15px;
  height: 600px;
  width: 800px;
  margin-top: -300px;
  margin-left: -400px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
 
  img{
    height: 400px;
    width: 400px;
  }
  
  .left{
    /* margin-top: -100px; */

    h1{
        margin-top: -100px;
        font-size: 4rem;
    }

    h2{
    margin-top: -35px;
    margin-bottom: 80px;
    color: #617d98;
    font-size: 2rem;
    }

    .counter{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        button{
        width: 30px;
        height: 30px;   
        color: black;
        border: none;
        background-color: #d6d6d6;
        border-radius: 8px;
        }

        span{
            margin: 0px 8px;
        }
    }
  }
  



  .buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    button{
        font-family: "Work Sans";
        margin: 30px 20px 0px;
        width: 150px;
        height: 50px;
        border: none;
        box-shadow: 0px 10px 9px -15px rgba(0,0,0,0.25);
        border-radius: 8px;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;

        :hover{
            transform: translateY(2px)
        }
    }
    .cancel{
        color: #fff;
        background-color: #FF5C5C;
        box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.25);
    }
    .add-order{
        color: black;
        background-color: #F9C91E;
    }
  }
  
`;
 
export default ProdModal;