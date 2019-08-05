import React from 'react'

export default class Test extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={()=> this.props.NhinQuan()}>test</button>
                <h3> {this.props.counter.cogai ? 'mac' : 'tut' }</h3>
            </div>
        );
    }
}