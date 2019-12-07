import React from 'react';

import Chooser from './Chooser.js';
import Details from './Details.js';
import axios from 'axios';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dogs:[],
            current: undefined,
            dogChooser: false,
            dogPrediction: false
        }
        
    this.chooseDog = this.chooseDog.bind(this);
    }
    
    componentDidMount(){
        axios.get(`https://dog.ceo/api/breeds/list/all`)
        .then(results =>{
            let arrOfBreeds = Object.keys(results.data.message);
            this.setState({
               dogs:arrOfBreeds,
               current: arrOfBreeds[0]
            });
        })
        .catch(error => console.log(error));
    }

    chooseDog(dog) {
        this.setState({
            current:dog
        });
    }
    
    render(){
        return <div className="app">
            <h1>Advanced Dog App</h1>
            <Chooser dogs = {this.state.dogs} chooseDog = {this.chooseDog} />
            <Details currentDog = {this.state.current} />
        </div>
    }
}

export default App;