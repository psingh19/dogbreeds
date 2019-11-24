import React from 'react';

class Chooser extends React.Component {
    render(){
        
        return <div className="chooser">
            <h2>Choose a dog</h2>
            <ul>{this.props.dogs.map(eachDog => <li key={eachDog}> <button onClick={()=>this.props.chooseDog(eachDog)}>{eachDog}</button> </li>)}</ul>
        </div>
    }
}

export default Chooser;