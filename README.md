# Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game built with React. It allows two players to play against each other on the same board.

## How to Play

1.  The game board consists of a 3x3 grid.
2.  Players take turns marking a square with their symbol (X or O).
3.  The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game.
4.  If all squares are filled and no player has won, the game is a draw.
5.  After a game ends, you can click "Play Again" to start a new game.

## Project Structure

-   `src/App.js`: The main application component that renders the game board.
-   `src/components/Board.jsx`: Manages the game's state, handles clicks on squares, determines the winner, and renders the individual `Square` components.
-   `src/components/Square.jsx`: Represents a single square on the Tic-Tac-Toe board and displays its value (X, O, or empty).

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1.  Clone this repository to your local machine (if you haven't already).

    ```bash
    # No need to clone, as the project is already available in the current workspace.
    # Just navigate to the 'tictactoe' directory if you are not already there.
    cd tictactoe
    ```

2.  Install the necessary dependencies:

    ```bash
    npm install
    ```

### Running the Game

After installation, you can run the game in development mode:

```bash
npm start
```

This will open the application in your browser at `http://localhost:3000` (or another available port).

## Technologies Used

-   React.js
-   JavaScript (ES6+)
-   CSS
