var getAns = async (input) => {
  // if (condition) {
  //   fetch python api for condition and return
  // }
  // else {
    var res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      body: JSON.stringify({
        "model": "llama3",
        "prompt": input,
        "stream": false
      }),
      headers: {
        "Content-Type": "application/json"
      }
  })
//  }

  var ans = await res.json()

  return ans.response
} 

var chatWindow = new Bubbles(document.getElementById("chat"), "chatWindow", {
 
  inputCallbackFn: async function(o) {
    chatWindow.talk(
      {
        "convo": {
          says: getAns(o.input).split("\n")
        }
      },
      "convo"
    )
  }
})

var convo = {
  ice: {
    says: ["Hi", "What would you like me to do?"],
  }
}

chatWindow.talk(convo)
