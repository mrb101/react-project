import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    render(){
        return( 
            <div><h1>I can get used to That!</h1></div>
        );
    }
}

export default Main

const app = document.getElementById("app");
ReactDOM.render(<Main />, app)
