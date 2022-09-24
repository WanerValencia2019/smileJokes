import React from 'react';

import "./styles.css";

export default function Loader() {
    return (
        <div className="loading-bg">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}
