import React from "react";
import './Board.css';

import Tile from '../tile/Tile'

class Board extends React.Component {

	// --- React Steate
	state = {
		title: "React Simple Game",
		size: {
			x: 10,
			y: 10
		},
		score: 0,
		playerPosition: [1, 1],
		pointPosition: [0, 0],
		currentDirection: null,
		inGame: false,
		gameOver: false,
		timerId: null
	}

	// --- React cycle life methods
	componentDidMount = () => {
		window.addEventListener('keydown', this.keyEvent)
	}

	componentWillUnmount = () => {
		window.removeEventListener('keydown', this.keyEvent)
		clearInterval(this.state.timerId);
		this.setState({ timerId: null });
	}

	// --- Start game
	startGame = () => {
		this.setState({
			inGame: true,
			gameOver: false,
			score: 0,
			playerPosition: [1, 1],
			pointPosition: [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1],
			currentDirection: null,
		});

		// By default, start to the right
		this.startMoving();
	}

	// --- Move player
	startMoving = () => {
		this.setState({
			timerId: setInterval(() => {
				console.log('Counting by 500ms');

				switch (this.state.currentDirection) {
					case "right":
						this.moveRight();
						break;

					case "left":
						this.moveLeft();
						break;

					case "up":
						this.moveUp();
						break;

					case "down":
						this.moveDown();
						break;

					default:
						this.moveRight();
						break;
				}

				this.checkCollision();
				this.checkPoint();
			}, 500)
		});
	}

	moveRight = () => {
		const currentPosition = this.state.playerPosition;
		++currentPosition[1];

		this.setState({ playerPosition: currentPosition });
	}

	moveLeft = () => {
		const currentPosition = this.state.playerPosition;
		--currentPosition[1];

		this.setState({ playerPosition: currentPosition });
	}

	moveUp = () => {
		const currentPosition = this.state.playerPosition;
		--currentPosition[0];

		this.setState({ playerPosition: currentPosition });
	}

	moveDown = () => {
		const currentPosition = this.state.playerPosition;
		++currentPosition[0];

		this.setState({ playerPosition: currentPosition });
	}

	// --- Game mechanism
	checkPoint = () => {
		const { playerPosition, pointPosition, score } = this.state;
		if (playerPosition[0] === pointPosition[0] && playerPosition[1] === pointPosition[1]) {

			this.setState({
				score: score + 1,
				pointPosition: [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1]
			});
		}
	}

	checkCollision = () => {
		const { playerPosition, size } = this.state;
		if (playerPosition[0] > size.x || playerPosition[0] < 1 || playerPosition[1] > size.y || playerPosition[1] < 1) {

			clearInterval(this.state.timerId);
			this.setState({
				gameOver: true,
				inGame: false,
				timerId: null
			});

			alert(`GAME OVER. YOUR SCORE: ${this.state.score}`);
		}
	}

	// --- keyboard controller
	keyEvent = (event) => {

		/** 
		 * 87 -> w, 83 -> s, 65 -> a, 68 -> d
		 * 38 -> up, 40 -> down, 37 -> left, 39 -> right
		 */

		if (event.keyCode === 87 | event.keyCode === 38) {
			this.setState({ currentDirection: "up" });
		} else if (event.keyCode === 83 | event.keyCode === 40) {
			this.setState({ currentDirection: "down" });
		} else if (event.keyCode === 65 | event.keyCode === 37) {
			this.setState({ currentDirection: "left" });
		} else if (event.keyCode === 68 | event.keyCode === 39) {
			this.setState({ currentDirection: "right" });
		}
	}

	// --- RENDER -----
	render() {
		const tileBoard = [];

		for (let i = 1; i <= this.state.size.x; i++) {
			for (let j = 1; j <= this.state.size.y; j++) {
				tileBoard.push(<Tile
					id={{ x: i, y: j }}
					key={`${i}/${j}`}
					playerPosition={this.state.playerPosition[0] === i && this.state.playerPosition[1] === j}
					pointPosition={this.state.pointPosition[0] === i && this.state.pointPosition[1] === j}
				/>);
			}
		}

		return (
			<main className="board-wrapper">
				<header className="header-wrapper">{this.state.title}</header>
				<section className="score-wrapper">SCORE: {this.state.score}</section>
				<section className="tile-board-wrapper">{tileBoard}</section>
				<section className="button-wrapper">
					<button onClick={e => this.startGame()} disabled={this.state.inGame}>Play Again</button>
				</section>
			</main>
		);
	}
}

export default Board;
