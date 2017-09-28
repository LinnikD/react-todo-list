import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        children: PropTypes.string,
    };

    static defaultProps = {
        children: '---',
    };

    concatName() {
        return `${this.props.children} ${this.props.message}`;
    }

    render() {
        return (
            <div className="super-wrappr">
                {this.concatName()}
            </div>
        );
    }
}

export default App;
