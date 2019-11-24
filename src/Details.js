import React from 'react';
import axios from 'axios';
import DetailForms from './DetailForms.js';
import DetailViews from './DetailViews.js';

class Details extends React.Component {
    constructor(props){
        super(props);
        this.state={
            images: [],
            number: 1,
            newComment: '',
            comment: []
        }
        
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    
    componentDidUpdate(prevProps, prevState) {
        // Load new updated images and comments here
        
        if(prevProps.currentDog !== this.props.currentDog){
            axios.get(`https://dog.ceo/api/breed/${this.props.currentDog}/images`)
            .then(result=> {
                this.setState({
                  images: result.data.message,
                });
            })
            .catch(error=>console.log(error));
            
            // get changed comments
            axios.get(`/comments/${this.props.currentDog}`)
            .then(res =>{
                this.setState({comment:res.data});
            })
            .catch(error => console.log(error)); 
            
        }
    }
    
    handleNumberChange(event){
        this.setState({
            number: event.target.value
        })
    }
    
    handleCommentChange(event){
        // update new comment
            this.setState({
               newComment: event.target.value
            });
    }
    
    handleCommentSubmit(event){
        event.preventDefault();
        // post a new comment to '/comments'
        let aNewComment ={
             breed:this.props.currentDog,
             text:this.state.newComment
         }
        
        //  validate before submitting to database
         if(aNewComment.text.type != null || aNewComment.text.type != undefined || aNewComment.text != ''){
             axios.post('/comments',aNewComment)
             .then(result=>{
                 let commentArr = this.state.comment.slice();
                 commentArr.push(result.data);
                 this.setState({comment:commentArr});
             })
             .catch(error=>console.log(error));
             this.setState({newComment: ''});
         }else{
             return;
         }
    }
    
    render(){
        
        let formProps = {
            handleCommentSubmit:this.handleCommentSubmit,
            handleCommentChange:this.handleCommentChange,
            handleNumberChange:this.handleNumberChange,
            images:this.state.images,
            number:this.state.number,
            newComment:this.state.newComment
        }
        
        return <div className="details">
            
            <h2>Details: {this.props.currentDog}</h2>
            
            <DetailForms {...formProps}/>
            
            <DetailViews images = {this.state.images} number={this.state.number} comment={this.state.comment} />
            
        </div>
    }
}

export default Details;