// const yellow = "yellow";
// const blue = "blue";
// const wrapper = document.getElementById("wrapper");
// const boxElements = document.querySelectorAll(".box");
// const resetButton = document.getElementById("reset");
// const winningCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// let turn = yellow;

// resetButton.onclick = startGame;

// function checkWin() {
//   return winningCombinations.some((combination) => {
//     return combination.every((index) => {
//       return boxElements[index].classList.contains(turn);
//     });
//   });
// }

// function checkDraw() {
//   return [...boxElements].every((box) => {
//     return box.classList.contains(yellow) || box.classList.contains(blue);
//   });
// }

// function placeMark(box, currentClass) {
//   box.classList.add(currentClass);
// }

// function handleTurn() {
//   turn = turn !== yellow ? yellow : blue;
// }

// function endGame(){
//   boxElements.forEach(box => {
//     box.removeEventListener("click", handleClick, { once: true });
//     console.log(box);
//   });
// }

// function handleClick(e) {
//   const boxTarget = e.target;

//   placeMark(boxTarget, turn);
//   if (checkWin()) {
//     console.log(`winner is ${turn}`);
//     wrapper.append(`winner is ${turn}`)
//     endGame();
//   } else if (checkDraw()) {
//     console.log(`the game is draw`);
//   }

//   handleTurn();
// }

// function startGame() {
//   boxElements.forEach((box) => {
//     box.classList.remove(yellow);
//     box.classList.remove(blue);
//     box.addEventListener("click", handleClick, { once: true });
//   });
// }

// startGame();

class Configuration {
  static yellow = "yellow";
  static blue = "blue";
  static wrapper = document.getElementById("wrapper");
  static boxElements = document.querySelectorAll(".box");
  static resetButton = document.getElementById("reset");
  static winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  static turn;

  static handleTurn() {
    this.turn = this.turn !== this.yellow ? this.yellow : this.blue;
  }
}

class Utilities {
  static placeMark(box, currentClass) {
    box.classList.add(currentClass);
  }

  static checkWin() {
    return Configuration.winningCombinations.some((combination) => {
      return combination.every((index) => {
        return Configuration.boxElements[index].classList.contains(
          Configuration.turn
        );
      });
    });
  }

  static checkDraw() {
    return [...Configuration.boxElements].every((box) => {
      return (
        box.classList.contains(Configuration.yellow) ||
        box.classList.contains(Configuration.blue)
      );
    });
  }
}

class Game {
  handleClick(e) {
    const boxTarget = e.target;
    Utilities.placeMark(boxTarget, Configuration.turn);
    if (Utilities.checkWin()) {
      console.log(`winner is ${Configuration.turn}`);
      Configuration.wrapper.append(`winner is ${Configuration.turn}`);
      // this.endGame();
    } else if (Utilities.checkDraw()) {
      console.log(`the game is draw`);
    }

    Configuration.handleTurn();
  }

  startGame() {
    console.log(this);
    Configuration.turn = Configuration.yellow;
    Configuration.boxElements.forEach((box) => {
      box.classList.remove(Configuration.yellow);
      box.classList.remove(Configuration.blue);
      box.addEventListener("click", this.handleClick, { once: true });
    });
  }

  endGame() {
    Configuration.boxElements.forEach((box) => {
      box.removeEventListener("click", this.handleClick, { once: true });
      console.log(box);
    });
  }
}

const game = new Game();
game.startGame();
