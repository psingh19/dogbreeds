import React from 'react';

class DetailForms extends React.Component{
    render(){
        return <div> 
            <form onSubmit={this.props.handleCommentSubmit}>
                    Submit a comment:
                    <textarea onChange={this.props.handleCommentChange} value={this.props.newComment} id='myValue'></textarea>
                    <input type='submit' value='Submit comment' />
            </form>
            
            <form>
                <label>
                number of images:
                <input type='number' min='0' max={this.props.images.length} value={this.props.number} onChange={this.props.handleNumberChange}/>
                </label>
            </form>
        </div>
    }
}

export default DetailForms;