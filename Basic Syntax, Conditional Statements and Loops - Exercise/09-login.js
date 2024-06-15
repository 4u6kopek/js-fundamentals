function login(input) {
  let username = input[0];
  let usernameReversed = "";
  let failedLoginCount = 0;

  for (let i = username.length - 1; i >= 0; i--) {
    usernameReversed += username[i];
  }

  for (let i = 1; i < input.length; i++) {
    const password = input[i];

    if (password === usernameReversed) {
      console.log(`User ${username} logged in.`);
      return;
    } else {
      failedLoginCount++;
      if (failedLoginCount === 4) {
        console.log(`User ${username} blocked!`);
        return;
      } else {
        console.log("Incorrect password. Try again.");
      }
    }
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
console.log("----");
login(["sunny", "rainy", "cloudy", "sunny", "notsunny"]);
