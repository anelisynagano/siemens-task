import React from 'react';

const App = () => {
    return (
        <div>
            <h1>
                Hello from
                <span>
                    { ` ${process.env.HOME_URL}`}
                </span>
            </h1>
        </div>
    );
};

export default App;
