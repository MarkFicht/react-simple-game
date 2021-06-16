import React from "react";

const Tile = (props) => {
    const { x, y } = props.id;

    return <div className={`tile ${props.playerPosition && "player-position"} ${props.pointPosition && "point-position"}`}>
        {`${x}/${y}`}
    </div>;
};

export default Tile;
