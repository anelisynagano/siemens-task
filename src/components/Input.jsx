import React from 'react';

const Input = () => {
    return (
        <form>
            <label>
            City:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Search" />
        </form>
    );
};

export default Input;
