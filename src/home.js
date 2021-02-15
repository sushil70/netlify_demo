import React from "react"
import {connect} from "react-redux"

class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Home</h1>
                <h2>Welcome</h2>
                <button onClick={this.props.counterInc}>Inc</button>
                <button onClick={this.props.counterDec}>Dec</button>
            </>
        )
    }
}

const mapDispatchGlobal = (dispatch) => {
    return {
        counterInc: () => dispatch({type: "counterinc"}),
        counterDec: () => dispatch({type: "counterdec"}),
    }
}

export default connect(null, mapDispatchGlobal)(Home)
