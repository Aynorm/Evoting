// script.js

      // Initialize vote counts
      let votes = {
        "Option 1": 0,
        "Option 2": 0,
        "Option 3": 0,
        "Option 4": 0,
        "Option 5": 0,

      };

      // Function to handle voting
      function vote(option) {
        votes[option]++;
        updateResults();
      }

      // Function to update the results display
      function updateResults() {
        document.getElementById("option1-count").innerText = votes["Option 1"];
        document.getElementById("option2-count").innerText = votes["Option 2"];
        document.getElementById("option3-count").innerText = votes["Option 3"];
        document.getElementById("option4-count").innerText = votes["Option 4"];
        document.getElementById("option5-count").innerText = votes["Option 5"];
      }

//Result overlay hide  
      function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
}
      
// For my Vote
      function openVote() {
        document.getElementById("myVote").style.width = "100%";
      }
      function closeVote() {
        document.getElementById("myVote").style.width = "0%";
}

      function openVote1() {
        document.getElementById("myVote1").style.width = "100%";
      }
      function closeVote1() {
        document.getElementById("myVote1").style.width = "0%";
}

      function openVote2() {
        document.getElementById("myVote2").style.width = "100%";
      }
      function closeVote2() {
        document.getElementById("myVote2").style.width = "0%";
}

      function openVote3() {
        document.getElementById("myVote3").style.width = "100%";
      }
      function closeVote3() {
        document.getElementById("myVote3").style.width = "0%";
}

      function openVote4() {
        document.getElementById("myVote4").style.width = "100%";
      }
      function closeVote4() {
        document.getElementById("myVote4").style.width = "0%";
}

      
