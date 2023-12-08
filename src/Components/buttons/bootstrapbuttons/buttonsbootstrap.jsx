import React from 'react';

const BootstrapButton = () => {
    return (
        <button type="button" className="btn btn-primary" onClick={() => alert('Button clicked!')}>
            Click me
        </button>
    );
};

export default BootstrapButton;