import React, { Component } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import Categ from "./Categ";
import ProdDesc from "./ProdDesc";
import Products from "./Products";
import { TiDeleteOutline } from "react-icons/ti";
import { IconContext } from "react-icons";
import { IoIosAddCircleOutline } from "react-icons/io";

class EditMenu extends Component {
    constructor(){
        super();
        this.state = {
            clicked: false,
            current: null,
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(index){
        if(this.state.current !== index)
            this.setState({
                current: index,
                clicked: true
            })
    }
    deleteAlert(){
        alert("are you sure?");
    }

    render() { 
        const Product = (props) => {
            const {product_img, product_name, product_price, product_availability} = props.product;
            return (
                <article>
                    <h3><img className='image' src={product_img} alt="" /></h3>
                    <h1>{product_name}</h1>
                    <h2>{product_price}</h2>
                    <h2>{product_availability ? "Available" : "Not Available"}</h2>
                </article> 
            );
        };
        
        return ( 
            <Container>
                <Wrapper>
                    <Arrow>
                        <ArrowWrapper>
                            <Link to="/dashboard">
                                <BiArrowBack size="40px" color="#676666"/>
                            </Link>
                        </ArrowWrapper>
                    </Arrow>
                    <Nav>
                        <Categ mode={"edit"}/> 
                        <IconContext.Provider value={{ size: "50px"}}>
                            <AddCategButton/>
                        </IconContext.Provider>
                    </Nav>
                    <EditButton>
                        <Link to="/view-menu">
                            <button>Save</button>
                        </Link>
                    </EditButton>
                    <ProdGrid>
                        <section className='productlist'> 
                        {Products.map((product,index)=>{
                                return (
                                    <div
                                    onClick={()=>this.changeColor(index)}
                                    className={(this.state.clicked && (this.state.current===index)) ? 'clicked' : 'unclicked'}>
                                        <IconContext.Provider value={{size: "50px"}}>
                                            <DeleteButton onClick={this.deleteAlert}/>
                                        </IconContext.Provider>
                                        <Product key={index} product={product}></Product>
                                    </div>
                                )
                            })}
                            {this.state.clicked ? <ProdDesc {...Products[this.state.current]} mode={"edit"}/> : null }
                        <IconContext.Provider value={{ size: "100px"}}>
                            <AddButton/>
                        </IconContext.Provider>
                        </section>
                    </ProdGrid>
                </Wrapper>
            </Container>
         );
    }
}

const AddCategButton = styled(IoIosAddCircleOutline)`
    // position: relative;
    padding: 0.5rem 0.5rem;
    border-radius: 1rem;
    overflow: visible;

    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-4px);
        background: #F3D9A4;
    }
` 

const DeleteButton = styled(TiDeleteOutline)`
    position: absolute;
    right: -25px;
    top: -15px;

    &:hover {
        color: #FF5C5C;
    }
` 
const AddButton = styled(IoIosAddCircleOutline)`
    position: relative;
    left: 50px;
    top: 90px;

    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-4px);
        color: #F9C91E;
    }
` 

const Arrow = styled.div`
    left: 0;
    display: flex;
    flex-direction: row;
    height: 120px;
    position: fixed;
    width: 5%;
    align-items: center;
    background: white;
    z-index: 1;
    
`

const EditButton = styled.div`
    right: 0;
    display: flex;
    flex-direction: row;
    height: 120px;
    position: fixed;
    width: 12%;
    align-items: center;
    background: white;
    z-index: 1;

    button{ 
        border: none;
        color: black;
        padding: 0rem 1rem;
        margin: 0.1px 10px 0.1px 10px;
        min-width: 110px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        background: #F9C91E;
        border-radius: 1rem;
        transition: all 0.1s ease-in;
        font-family: "Work Sans";
        font-size: 90%;
        font-weight: bold;

        &:hover {
            transform: translateY(-4px);
        }    

    }
`

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 120px;
  overflow-x: auto;
  position: fixed;
  margin-left: 5%;width: 83%;
  align-items: center;
  background: white;
  z-index: 1;
`;

const ArrowWrapper = styled.div`
    margin-top: 10px;
    padding-left: 25%;
`;

const Container = styled.div`
  background: #faf0e0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ProdGrid = styled.div`
    .productlist {
        position: absolute;
        width: 70%;
        margin-top: 160px;
        display: flex;
        margin-left: 50px;
        display: grid;
        gap: 2rem;
        z-index: 0;
        grid-template-columns: repeat(auto-fit, minmax(177px, 1fr));

        @media screen and (max-width: 1024px) {
            gap: 1.5rem;
        }
    }

    .clicked{
        position: relative;
        background: #F9C91E;
        border-radius: 1rem;
        padding: 1rem 2rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-4px);
        }

        h1{
            margin-top: 0.5rem;
        }
        h2{
            color: #617d98;
            font-size: 0.9rem;
            margin-top: 0.25;
        }
        @media screen and (max-width: 1024px) {
            width: 70%;
        }
    }
    .unclicked{
        position: relative;
        background: #fff;
        border-radius: 1rem;
        padding: 1rem 2rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-4px);
            background: #F3D9A4;
        }
        h1{
            margin-top: 0.5rem;
        }

        h2{
            color: #617d98;
            font-size: 0.9rem;
            margin-top: 0.25;
        }
    }
    .image{
        height: 150px;
        width: 150px;
    }
    @media screen and (max-width: 1024px) {
            width: 70%;
        }

`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default EditMenu;