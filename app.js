let harsh = prompt("enter s for snake, w for water, g for gun")
let gen = Math.floor(Math.random() * 3);
let cpu = ["s", "w", "g"][gen]

const match = (cpu, harsh) => {
  if (cpu === harsh) {
    return "its a draw";
  }
  else if (cpu === "s" && harsh === "w") {
    return "cpu won!";
  }
  else if (cpu === "s" && harsh === "g") {
    return "harsh won!";
  }
  else if (cpu === "w" && harsh === "g") {
    return "cpu won!";
  }
  else if (cpu === "w" && harsh === "s") {
    return "harsh won!";
  }
  else if (cpu === "g" && harsh === "s") {
    return "cpu won!";
  }
  else if(cpu === "g" && harsh === "w"){
    return "harsh won!";
  }
  else {
    return "Error";
  }
}
let result = match(cpu, harsh)
document.write(`CPU ${cpu} and Harsh ${harsh} \nThe winner is ${result}`).style.color = "red";
