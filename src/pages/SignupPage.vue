<template>
  <div id="background">
    <form class="signupform" action="index.html">
      <b>Welcome to PostIt</b>
      <p>Create your account</p>

      <input type="email" placeholder="Email" name="email" required />
      <input type="password" placeholder="Password" name="password" required />

      <button type="submit">Sign Up</button>

      <p>Already have an account? <a href="login.html">Log in</a></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
};
</script>

<style scoped>
#background {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  min-height: 100vh;
  background-color: #f0f0f0;
  box-sizing: border-box;
}

.signupform {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 40px 30px;
  width: 320px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.signupform b {
  font-size: 1.5em;
  margin-bottom: 5px;
  color: #333;
}

.signupform p {
  margin: 0;
  font-size: 0.95em;
  color: #555;
}

.signupform input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1em;
  box-sizing: border-box;
  transition: border 0.2s ease, box-shadow 0.2s ease;
}

.signupform input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

.signupform button {
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  font-size: 1em;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signupform button:hover {
  background-color: #0056b3;
}

.signupform a {
  color: #007bff;
  text-decoration: none;
  font-size: 0.9em;
}

.signupform a:hover {
  text-decoration: underline;
}
</style>
