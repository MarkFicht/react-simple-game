import React from "react";
import './Board.css';

import Tile from '../tile/Tile'

/**
 * TO DO
 * add obstacles (7x7 f.e. 4 and 10x10 f.e. 6-7)
 * add styles
 * add a welcome page
 * add firebase for 'best scores'
 * add 'special' effect, for progress in 'transform' player and progress in 'interval'
 */

class Board extends React.Component {

	// --- React Steate
	state = {
		title: "React Simple Game",
		startButtonTitle: "PLAY",
		size: {
			x: 7,
			y: 7
		},
		score: 0,
		bonusScore: 20,
		displayScore: 0,
		playerPosition: [1, 1],
		pointPosition: [0, 0],
		currentDirection: "right",
		inGame: false,
		gameOver: false,
		gameSpeed: 220,
		timerId: null,
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
			startButtonTitle: "IN GAME",
			score: 0,
			bonusScore: 20,
			displayScore: 0,
			playerPosition: [1, 1],
			pointPosition: this.setPointPosition(),
			currentDirection: "right",
			inGame: true,
			gameOver: false,
			gameSpeed: 220,
		});

		this.startMoving();
	}

	// --- Move player
	startMoving = () => {
		clearInterval(this.state.timerId);

		this.setState({
			timerId: setInterval(this.startInterval.bind(this), this.state.gameSpeed)
		});
	}

	startInterval = () => {
		console.log('Counting by ' + this.state.gameSpeed + ' ms.');

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

		if (!this.state.gameOver) {

			this.checkPoint();
			this.state.score <= 20 && this.setSpeedGame();
		}
	}

	moveRight = () => {
		const currentPosition = this.state.playerPosition;
		++currentPosition[0];

		this.setState({ playerPosition: currentPosition });
	}

	moveLeft = () => {
		const currentPosition = this.state.playerPosition;
		--currentPosition[0];

		this.setState({ playerPosition: currentPosition });
	}

	moveUp = () => {
		const currentPosition = this.state.playerPosition;
		--currentPosition[1];

		this.setState({ playerPosition: currentPosition });
	}

	moveDown = () => {
		const currentPosition = this.state.playerPosition;
		++currentPosition[1];

		this.setState({ playerPosition: currentPosition });
	}

	// --- Game mechanism
	checkPoint = () => {
		const { playerPosition, pointPosition, score, bonusScore, displayScore } = this.state;
		this.setState({ bonusScore: bonusScore - 1 });

		if (playerPosition[0] === pointPosition[0] && playerPosition[1] === pointPosition[1]) {

			this.setState({
				score: score + 1,
				bonusScore: 20,
				displayScore: displayScore + score + bonusScore,
				pointPosition: this.setPointPosition()
			});
		}
	}

	checkCollision = () => {
		const { playerPosition, size } = this.state;
		if (playerPosition[0] > size.x || playerPosition[0] < 1 || playerPosition[1] > size.y || playerPosition[1] < 1) {

			clearInterval(this.state.timerId);
			this.setState({
				score: 0,
				bonusScore: 20,
				startButtonTitle: "PLAY AGAIN",
				playerPosition: [1, 1],
				pointPosition: [0, 0],
				inGame: false,
				gameOver: true,
				gameSpeed: 220,
				timerId: null,
			});

			alert(`GAME OVER. YOUR SCORE: ${this.state.displayScore}`);
		}
	}

	setSpeedGame = () => {
		const { score } = this.state;

		if (score === 3) {
			this.setState({
				gameSpeed: 200
			});
			this.startMoving();

		} else if (score === 8) {
			this.setState({
				gameSpeed: 185
			});
			this.startMoving();

		} else if (score === 15) {
			this.setState({
				gameSpeed: 160
			});
			this.startMoving();

		} else if (score === 20) {
			this.setState({
				gameSpeed: 145
			});
			this.startMoving();
		}
	}

	setPointPosition = () => {
		const { pointPosition } = this.state
		let newPosition = [];

		do {
			newPosition = [Math.floor(Math.random() * this.state.size.x) + 1, Math.floor(Math.random() * this.state.size.x) + 1];
			console.log(" => ", newPosition);
		} while (newPosition[0] === pointPosition[0] && newPosition[1] === pointPosition[1]);

		return newPosition;
	}

	// ---
	onChangeSize = (event) => {
		const size = event.target.value.split('x');
		this.setState({
			size: { x: size[0] * 1, y: size[1] * 1 }
		});
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
		const { size, playerPosition, pointPosition, currentDirection, score } = this.state
		const tileBoard = [];

		for (let i = 1; i <= size.y; i++) {
			for (let j = 1; j <= size.x; j++) {
				tileBoard.push(<Tile
					id={{ x: j, y: i }}
					key={`${j}/${i}`}
					playerPosition={playerPosition[0] === j && playerPosition[1] === i}
					pointPosition={pointPosition[0] === j && pointPosition[1] === i}
					currentDirection={currentDirection}
					score={score}
				/>);
			}
		}

		return (
			<main className="board-wrapper">
				<header className="header-wrapper">{this.state.title}</header>
				<section className="score-wrapper">Score: {this.state.displayScore}</section>
				<section className="game-speed-wrapper">Game speed: {`${this.state.gameSpeed}ms`}</section>
				<section className={`tile-board-wrapper ${size.x === 10 && size.y === 10 ? "tile-board-size-10" : ""}`}>{tileBoard}</section>
				<section className="button-wrapper">
					<button onClick={e => this.startGame()} disabled={this.state.inGame}>{this.state.startButtonTitle}</button>
					<div>
						<label>
							<input
								type="radio"
								value="7x7"
								disabled={this.state.inGame}
								checked={size.x === 7 && size.y === 7}
								onChange={this.onChangeSize}
							/>
							7 x 7
						</label>
						<label>
							<input
								type="radio"
								value="10x10"
								disabled={this.state.inGame}
								checked={size.x === 10 && size.y === 10}
								onChange={this.onChangeSize}
							/>
							10 x 10
						</label>
					</div>
				</section>
			</main>
		);
	}
}

export default Board;
