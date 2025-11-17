function capitalizeText() {
      let text = document.getElementById("inputText").value;
      let result = text
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      document.getElementById("output").innerHTML = result;
    }