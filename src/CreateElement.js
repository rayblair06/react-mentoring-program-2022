import React from 'react';

class CreateElement extends React.Component {
    render() {
        return React.createElement('h1', null, `Hello world!`);
    }
}

export default CreateElement;
