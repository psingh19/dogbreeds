import React from 'react';

class DetailViews extends React.Component{
    render(){
        return <div>
            <ul className="comments">{this.props.comment.map(comment => <li key={comment._id}>{comment.text}</li>)}</ul>
            
            <div className="images">
                {this.props.images.slice(0, this.props.number).map(dog=><img key={dog} src={dog} />)}
            </div>
        </div>
    }
}

export default DetailViews;