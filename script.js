//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
  const inputValue = parseFloat(document.getElementById("ip").value);
  const outputDiv = document.getElementById("output");

  if (isNaN(inputValue)) {
    outputDiv.innerText = "Please enter a valid number.";
    return;
  }

  // Initial Promise: Resolves after 2 seconds with input value
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.innerText = `Result: ${inputValue}`;
      resolve(inputValue);
    }, 2000);
  })
    .then((num) => {
      // Multiply by 2 after 2 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num * 2;
          outputDiv.innerText = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    .then((num) => {
      // Subtract 3 after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num - 3;
          outputDiv.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((num) => {
      // Divide by 2 after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num / 2;
          outputDiv.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((num) => {
      // Add 10 after 1 second (Final Result)
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num + 10;
          outputDiv.innerText = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
