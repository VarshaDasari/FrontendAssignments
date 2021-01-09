import React from 'react';
import { Component } from 'react';
class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            articles:[]
        }
    }
    componentDidMount(){
        fetch("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b2c792d22c4143b2aa04ca2cf3235fc3")
                .then((response) => {
                    return response.json()
                })
                .then((output) => {
                    this.setState({
                        articles:output.articles
                    });
                });
    };
    render(){
        return( 
            <div>
                {this.state.articles.map((item, index) => {
                    return(
                       <div className="card bg-primary text-white" style={{marginBottom:"20px"}} key={index}>
                           <h3 style={{color:"black"}}>Title : {item.title}</h3>
                            <p style={{color:"yellow"}}>Author : {item.author}</p>
                            <img src={item.urlToImage} alt="images" style={{width:"250px",margin:"0px auto"}}/>
                            <p style={{float:"left"}}>{item.description}</p>
                            <button className="btn btn-danger" style={{width:"200px", margin: "0px 0px 0px auto"}} onClick={() => {
                                const news= { "title" : item.title, "author": item.author, "urlToImage":item.urlToImage, "description": item.description};  
                                fetch('http://localhost:3001/readLater', {
                                    method: "POST",
                                    body: JSON.stringify(news),
                                    headers: {"Content-Type": "application/json"}
                                })
                            }}>Read Later &gt;&gt;&gt;</button>
                       </div>
                    );
                })}
            </div>
        );
    };
}
export default Card;