import inquirer from "inquirer";
let random_no = Math.floor(Math.random() * 10 + 1);
const no_guess = await inquirer.prompt([
    {
        name: "userGuessNo",
        type: "number",
        message: "please guess a no in between 1-10",
    },
]);
if (no_guess.userGuessNo === random_no) {
    console.log("You Guessed Right No");
}
else {
    console.log("You Guessed Wrong No");
}
