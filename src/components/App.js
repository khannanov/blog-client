import React, {Component, PropTypes} from 'react';
import Sidebar from './Sidebar';
import Welcome from './Welcome';

export class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container pull-left">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar/>
                    </div>
                    <div className="col-md-8">
                        <Welcome/>
                        <div className="page">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;