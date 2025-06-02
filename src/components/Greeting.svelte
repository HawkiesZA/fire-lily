<script>
  export let messages = [];
  
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  
  let greeting = messages[0];
  
  const updateGreeting = () => {
    greeting = randomMessage();
  };
</script>

<div>
  <h3>{greeting}! Thank you for visiting!</h3>
  <button on:click={updateGreeting}>
    New Greeting
  </button>
</div>

<style>
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: #4c1d95;
    color: white;
    border: none;
    border-radius: 4px;
    transition: background-color 0.2s;
  }
  
  button:hover {
    background-color: #5e2ca5;
  }
  
  h3 {
    margin: 0;
  }
  
  div {
    text-align: center;
    padding: 1rem;
  }
</style>
