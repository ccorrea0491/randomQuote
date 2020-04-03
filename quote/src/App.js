import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Quote extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currText: 'Good to see you',
      curAuthor: 'Nico'
    }
    this.newQuote = this.newQuote.bind(this);
  }

  //CHANGE COLOR AND QUOTE
  newQuote = () => {
    this.changeQuote();
  }

  //COLOR
  // changeColor =() => {
  //   const colours = ['#dcffcc', '#fad6d6', '#ffe7d1', '#fff8cd', '#e6f8f9', '#efe9cc', '#fff1e9', '#ffddcc'];
  //   const color = Math.floor(Math.random() * colours.length );
  //   this.setState({
  //     curColor: colours[color]
  //   });
  // }
  // componentDidMount(prevProps, prevState){
  //   const {curColor} = this.state.curColor;
  //   if(prevProps.curColor !== curColor){
  //     const bodyElem = document.querySelector("body");
  //     bodyElem.style.backgroundColor = curColor;
  //   }
  // }
  // componentDidMount(){
  //   fetch('https://api.quotable.io/random')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       currText: data.content,
  //       curAuthor: data.author
  //     });
  //   })
  //   //.catch(error);
  // }
  //QUOTE
  changeQuote =() => {
    //const quotes = []
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      this.setState({
        currText: data.content,
        curAuthor: data.author
      });
  })
  }
  render(){
    const styles = {
      backgroundColor: this.state.curColor,
      font: 'Arial',
      fontSize: 34,
      height: '100vh',
      fontFamily: 'Caveat'
    }
    const twiiterIcon =  require('./img/twitter.png');
    return (
          <div id="wrapper" style={styles}>
            <div>
            <h1>Random Quote Machine</h1>
            
            <div id='quote-box'>
              <p id='text'>
                <q>
                {this.state.currText}
                </q>
                
              </p>
             
              
              <p id='author'>{this.state.curAuthor}</p>
              <a href="http://twitter.com/intent/tweet" id="tweet-quote" rel='noreferrer noopener' target="_blank">{<img src={twiiterIcon} alt="Twitter Icon"/>}</a>
              <Button variant="primary" id="new-quote" onClick={this.newQuote}>New Quote</Button>
            </div>
            
            
              
              
       
          </div>
        </div>
          

   
    )
  }


}


export default Quote;
