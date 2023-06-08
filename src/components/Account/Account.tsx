import React from 'react';
import { Link } from 'react-router-dom';

export default function Account(): JSX.Element {
    return (
        <>
            <div>Account</div>
            <p>Here will be user account</p>
            <Link to="..">Back to user</Link>
        </>
    );
}
