import React from "react";

const Tile = (props) => {
    const { x, y } = props.id;

    return <div className={
        `tile 
        ${props.playerPosition && " player-position"} 
        ${props.pointPosition && " point-position"} 
        ${props.currentDirection === "right" && props.score < 20 && " player-position-right"}
        ${props.currentDirection === "up" && props.score < 20 && " player-position-up"}
        ${props.currentDirection === "left" && props.score < 20 && " player-position-left"}
        ${props.currentDirection === "down" && props.score < 20 && " player-position-down"}
        ${props.currentDirection === "right" && props.score >= 20 && " player-position-right2"}
        ${props.currentDirection === "up" && props.score >= 20 && " player-position-up2"}
        ${props.currentDirection === "left" && props.score >= 20 && " player-position-left2"}
        ${props.currentDirection === "down" && props.score >= 20 && " player-position-down2"}
        `
    }>
        {/* {`${x}/${y}`} */}
    </div>;
};

export default Tile;
