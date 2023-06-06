import React from 'react'

interface IProps {
    guest: string;
}

export default function GuestCard(props: IProps): JSX.Element {
    const { guest } = props;
    return (
        <>
            <div>GuestCard</div>
            <p>Name gest: {guest}</p>
        </>
    );
}
