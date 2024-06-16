var getAns = async (input) => {
  console.log(input);
  const myArray = input.split(" ");
  console.log(myArray);

  let res;
  if (myArray[0] === "symptoms") {
      // Fetch from the Flask API for condition and return
      res = await fetch("http://127.0.0.1:5000/predict", {
          method: "POST",
          body: JSON.stringify({
              "symptoms": input
          }),
          headers: {
              "Content-Type": "application/json"
          }
      });
  } else {
      res = await fetch("http://localhost:11434/api/generate", {
          method: "POST",
          body: JSON.stringify({
              "model": "llama3",
              "prompt": input,
              "stream": false
          }),
          headers: {
              "Content-Type": "application/json"
          }
      });
  }

  // Ensure the response is OK
  if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
  }

  var ans = await res.json();

  if (myArray[0] === "symptoms") {
      return ans.predicted_disease;
  } else {
      return ans.response;
  }
};

var chatWindow = new Bubbles(document.getElementById("chat"), "chatWindow", {
  inputCallbackFn: async function(o) {
      const response = await getAns(o.input);
      chatWindow.talk(
          {
              "convo": {
                  says: response.split("\n")
              }
          },
          "convo"
      );
  }
});

var convo = {
  ice: {
      says: ["Hi", "What would you like me to do?"]
  }
};

chatWindow.talk(convo);
