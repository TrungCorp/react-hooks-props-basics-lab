import React from "react";

function Links(props) {
    return (
        <div>
            <h3>Links</h3>
            <a href={{src: props.github}}>{props.github}</a>
            <a href={{src: props.linkedin}}>{props.linkedin}</a>
        </div>
        
    );
}

export default Links;