import React, {Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';


class Avatar extends Component{
    render()
    {
        const Avatarlistarray = [
            {
                id:1,
                name: 'Divyam Garg',
                work: 'Web Developer'
            },
            {
                id:2,
                name: 'Abhay Rana',
                work: 'Game Developer'
            },
            {
                id:2,
                name: 'Abhinav',
                work: 'Game Developer'
            },
            {
                id:4,
                name: 'Tanish',
                work: 'Game Developer'
            }
            
        ]
        
        const arraylistcard = Avatarlistarray.map((currentavatar,i)=>{
            return  <Avatarlist key={i} id={Avatarlistarray[i].id} 
                    name={Avatarlistarray[i].name} 
                    work={Avatarlistarray[i].work}/>
    
        })
        return (
            <div className="mainpage">
            <h1>Welcome to the Avatar Website</h1>
             {arraylistcard} 
            </div>
        )
    }

}


export default Avatar;