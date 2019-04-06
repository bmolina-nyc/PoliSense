import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default class SearchBar extends React.Component{
    state = {
        data: ''
    }

    onChange = (e) => {
        const text = e.target.value
        this.setState(()=>({
            data: text
        }))
    }

    componentDidMount() {
        fetch('/testData.json')
          .then(response => response.json())
          .then(data => this.setState({data: data.main.name}))
      }


    render(){
        return(
            <div>
            <InputGroup  xs="6" className="input">
                <Input  onClick={this.onChange} placeholder="Enter your search" />
            </InputGroup>
             <div> { this.state.data && this.state.data } </div>

            </div>
        )
    }

}



