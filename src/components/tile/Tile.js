import React from "react";

const Tile = (props) => {
    const { x, y } = props.id;

    return <div className={
        `tile 
        ${props.playerPosition && " player-position"} 
        ${props.pointPosition && " point-position"} 
        ${props.currentDirection === "right" && " player-position-right"}
        ${props.currentDirection === "up" && " player-position-up"}
        ${props.currentDirection === "left" && " player-position-left"}
        ${props.currentDirection === "down" && " player-position-down"}

        `
    }>
        {/* {`${x}/${y}`} */}
    </div>;
};

export default Tile;
