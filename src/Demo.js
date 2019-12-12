import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { directive } from '@babel/types';
import './Demo.css';

class Demo extends Component{
    render()
    {
        return (
        <div className="maindiv_style">
            <h1> Hello {this.props.name} </h1>
            <p>This is react page</p>
        </div>
        )
    }
}

export default Demo;