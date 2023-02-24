<style>
		.hexagon {
			top: 30vh;
			left: 40%;
			position: absolute;
			margin: 0 auto;
			background-color: dodgerblue;
			border-radius: 10px;
			width: 100px;
			height: 63px;
			box-sizing: border-box;
			transition: all 1s;
			border: 0.4vh solid transparent;
		}
		
		/* Creating pseudo-class */
		.hexagon:before, .hexagon:after {
			content: "";
			border: inherit;
			position: absolute;
			top: -0.5vh;
			left: -0.5vh;
			background-color: dodgerblue;
			border-radius: inherit;
			height: 100%;
			width: 100%;
		}
		
		/* Align them in such a way
		that they form a hexagon */
		.hexagon:before {
			transform: rotate(60deg);
		}
		.hexagon:after {
			transform: rotate(-60deg);
		}
	</style>
