let grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

    
// Assuming Player 1 starts.
let turn = "Player_1";

function checkRows() {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2] && grid[i][0] !== null) {
            alert(grid[i][0] === 'X' ? 'Player 1 wins!' : 'Player 2 wins!');
        }
            console.log(grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2] && grid[i][0] !== null);
    }
}

function checkColumns() {
    for (let i = 0; i < grid.length; i++) {
        if (grid[0][i] === grid[2][i] && grid[0][i] === grid[2][i] && grid[0][i] !== null) {
            alert(grid[0][i] === 'X' ? 'Player 1 wins!' : 'Player 2 wins!');
        }
        console.log(grid[0][i] === grid[2][i] && grid[0][i] === grid[2][i] && grid[0][i] !== null)
    }
}

function checkDiagonals() {
    if (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] !== null || 
        grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0] && grid[1][1] != null) {
        alert(grid[1][1] === 'X' ? 'Player 1 wins!' : 'Player 2 wins!');
    }
        console.log(grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] !== null)
}

function checkWinningPositions() {
    this.checkRows();
    this.checkColumns();
    this.checkDiagonals();
}

function updateButton(id, marking) {
    let button = document.getElementById(id);
    
    button.style.backgroundImage = 'url("' + marking + '.png")';
    button.style.backgroundRepeat = 'no-repeat'; // The X image is not in appropriate size.
    button.disabled = true;
    grid[Math.floor(parseInt(id)/3)][parseInt(id)%3] = marking;
        console.log(marking);
        console.log(id);

}

function getButtonPressed(id) {
    // Assuming Player 1 is marking with X.
    if (turn === 'Player_1') {
        this.updateButton(id, 'X');
       //
        turn = 'Player_2';
        checkWinningPositions();
    }
    else {
        turn = 'Player_1';
        this.updateButton(id, 'O');
        
        
        this.checkWinningPositions();
    }
}
