import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieQuote } from '../actions';

class MovieQuote extends Component {
    componentDidMount(){
        this.props.getMovieQuote();
    }
    render(){
        return(
            <div>
                <h1 className="center">Movie Quote</h1>
                <h4 className="center">{this.props.quote}</h4>
            </div>
        )
    }
}

function mstp(state){
    return {
        quote: state.movie.quote
    }
}

export default connect(mstp, {getMovieQuote})(MovieQuote);