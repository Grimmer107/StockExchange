import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import img1 from '../../assets/card1.jpeg';
import img2 from '../../assets/card2.jpeg'
import img3 from '../../assets/card3.jpeg'
import { border, display, height, maxWidth, textAlign } from '@mui/system';
import cloud from '../../assets/cloud.jpg';

function Example(props)
{
    var items = [
        {
            name: "Total Markets",
            description: "We are creating more market choice and opportunity to help unleash the dynamic, entrepreneurial spirit that drives the U.S. economy.",
            imageProp: img1
        },
        {
            name: "Nasdaq Ventures",
            description: "Nasdaq Ventures is dedicated to discovering, investing in and collaborating on new technologies and groundbreaking solutions that align with our company's long-term objectives in the global capital markets.",
            imageProp: img2
        },
        {
            name: "Environmental, Social and Governance",
            description: "We are committed to catalyzing progress towards a moresustainable tomorrow.",
            imageProp: img3
        }
    ]

    return (
        <Carousel className='my-carousel' navButtonsProps={{style: {margin: '0 170px'}}}>
            {
                items.map( createCard )
                
            }
            
        </Carousel>
    )
}

function createCard(item) {
    return (
        <Item 
        name= {item.name}
        description = {item.description}
        imageProp = {item.imageProp}></Item>
    )
}

function Item(props)
{
    return (
        <Paper>
        
        {/* <h2 }>{props.item.name}</h2>
            <p style={{margin:0}}>{props.item.description}</p> */}

            <div style={{ display: 'inline block', width: '100%', alignItems: 'center', margin: '0 auto', backgroundImage: cloud, backgroundColor:'#715133C'}}>
           
            <h4 style={{textAlign: 'left', margin: '0', marginTop: '80px', padding: '20px 20px', display: 'inline-block', backgroundColor: '#066163', borderRadius: '10px 10px 0 0', color: 'white'}}>{props.name}</h4>
            <span style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}> <img src={props.imageProp} style={{display: 'block', margin: 'auto', height:'260', width: '500px', border: '', borderBottom: '0', borderRadius: '10px 10px 0 0'}}></img>
                
                <p style={{ height: '50px', padding: '10px 15px 60px 15px',marginTop: '0', paddingTop: '20px', marginBottom: '80px', paddingBottom: '60px', width: '470px', wordBreak: '', display: 'inline-block', color: 'white', textAlign:'center', fontWeight: '600', backgroundColor:'#066163', borderRadius: '0 0 10px 10px', borderTop: '0'}}>{props.description}</p></span>
                
            </div>
            

   
            
        </Paper>
        
    )
}

export default Example;