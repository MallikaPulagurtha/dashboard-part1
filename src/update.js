import React from "react";

function Update(props) {
    console.log(props);
    return (
        <>
            <h1>Update {props.match.params.id}</h1>
        </>
    )
}

export default Update;