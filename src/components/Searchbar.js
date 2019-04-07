import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Card from './Card'

export default class SearchBar extends React.Component{
    state = {
        author:'',
        base: '',
        keywords: [],
        headline: '',
        sentiment: {},
        loaded: false
    }


    componentDidMount() {
        fetch('/breitbart.json')
          .then(response => response.json())
          .then(data  => this.setState({
            author: data.author,
            base: data.base,
            keywords: data.keywords,
            headline: data.headline,
            sentiment: data.sentiment,
            loaded: false
          }))
      }


    render(){
      
        return(
            <div>
            <InputGroup  xs="6" className="input">
                <Input  onClick={this.onChange} placeholder="Enter your search" />
            </InputGroup>
             
            <div>  
                <Card data={this.state}/>
             </div>

            </div>
        )
    }

}



