var globalName = "Joe";

function smth() {
    globalName = "Jim";
    console.log(globalName);
}

smth();

console.log(globalName);