import React from 'react';

class Chooser extends React.Component {
    render(){
        
        return <div className="chooser">
            <h2>Choose a dog</h2>
    
            <select id="mySelect" onChange={(event)=>this.props.chooseDog(event.target.value)}>
                {this.props.dogs.map(eachDog => 
                <option value={eachDog}>{eachDog}</option> )}
            </select>
    
        </div>
    }
    
}
export default Chooser;