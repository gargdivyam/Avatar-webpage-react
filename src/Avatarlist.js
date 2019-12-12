import React,{Component} from 'react';


class Avatarlist extends Component{
    render()
    {
        return(
            <div className="Avatar_style ma4 bg-light-purple pa3 grow shadow-4 dib">
               <img src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt="avatar" />
                <h1>{this.props.name}</h1>
                <p>{this.props.work}</p>
           </div>
        )
    }
}
export default Avatarlist;