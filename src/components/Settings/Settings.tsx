import React from 'react';
import { Link } from 'react-router-dom';

export default function Settings(): JSX.Element {
    return (
        <>
            <div>Settings</div>
            <p>Here will be user settings</p>
            <Link to="..">Back to user</Link>
        </>
    );
}
