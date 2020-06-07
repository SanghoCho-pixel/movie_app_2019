import React from 'react';
import PropTypes from "prop-types"

class App2 extends React.Component{
    state = {
        count : 0
    }
    render(){
            return <h1>The Num ber Is{this.state.count}</h1>
    }
}


export default App2;
