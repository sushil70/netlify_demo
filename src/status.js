import React from "react"
import {connect} from "react-redux"

class Status extends React.Component {
    render() {
        return (
            <>
                <h1>Status Counter {this.props.count}</h1>
            </>
        )
    }
}

const mapGlobalStateToProps = (globalStore) => {
    return {
        count: globalStore.count,
    }
}

export default connect(mapGlobalStateToProps)(Status)
