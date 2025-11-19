<template>
  <div id="background">
    <form class="signupform" @submit.prevent="handleSubmit">
      <b>Welcome to PostIt</b>
      <p>Create your account</p>

      <input
          type="email"
          placeholder="Email"
          v-model="email"
          required
      />

      <input
          type="password"
          placeholder="Password"
          v-model="password"
          required
      />

      <!-- Veateade: näidatakse ainult siis, kui parool ei vasta tingimustele -->
      <p v-if="passwordError" class="error">
        {{ passwordError }}
      </p>

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    validatePassword() {
      const errors = [];
      const pwd = this.password;

      // 1) The password should be of a specific length (at least 8 characters and less than 15 characters).
      if (pwd.length < 8 || pwd.length >= 15) {
        errors.push("Password must be at least 8 characters and less than 15 characters");
      }

      // 2) Includes at least one uppercase alphabet character.
      if (!/[A-Z]/.test(pwd)) {
        errors.push("Includes at least one uppercase alphabet character");
      }

      // 3) Includes at least two lowercase alphabet characters.
      const lowercaseMatches = pwd.match(/[a-z]/g) || [];
      if (lowercaseMatches.length < 2) {
        errors.push("Includes at least two lowercase alphabet characters");
      }

      // 4) Includes at least one numeric value.
      if (!/\d/.test(pwd)) {
        errors.push("Includes at least one numeric value");
      }

      // 5) It should start with an uppercase alphabet.
      if (!/^[A-Z]/.test(pwd)) {
        errors.push("It should start with an uppercase alphabet");
      }

      // 6) It should include the character "_"
      if (!/_/.test(pwd)) {
        errors.push('It should include the character "_"');
      }

      this.passwordError = errors.length
          ? "The password is not valid - " + errors.join(", ")
          : "";
    },
    handleSubmit() {
      // kontrollime tingimused submitil
      this.validatePassword();

      if (this.passwordError) {
        // kui on vigu, ei lase "submitida"
        return;
      }

      // siia paned, mida tegema peab eduka submiti korral
      alert("Form submitted successfully!");
    },
  },
};
</script>

<style scoped>
#background {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #eff3ff, #dbe7ff);
  padding: 20px;
  box-sizing: border-box;
}

/* Form container */
.signupform {
  background: #ffffff;
  padding: 40px 32px;
  width: 360px;
  max-width: 90%;
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
  text-align: center;
  font-family: "Inter", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Title */
.signupform b {
  font-size: 1.7em;
  color: #1d1d1d;
}

/* Subtitle */
.signupform p {
  margin-top: -8px;
  font-size: 0.95em;
  color: #5a5a5a;
}

/* Inputs */
.signupform input {
  width: 100%;
  padding: 12px 14px;
  border: 1.6px solid #cfd8e3;
  border-radius: 8px;
  font-size: 1em;
  transition: 0.25s ease;
  background: #f9fbff;
}

.signupform input:focus {
  border-color: #3a7bff;
  background: white;
  box-shadow: 0 0 6px rgba(58, 123, 255, 0.3);
  outline: none;
}

/* Submit button */
.signupform button {
  padding: 13px 16px;
  background: #3a7bff;
  color: white;
  font-size: 1.05em;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.25s;
  margin-top: 10px;
}

.signupform button:hover {
  background: #2d63d9;
}

.signupform button:active {
  background: #224cb1;
}

/* Error text */
.error {
  color: #e63946;
  text-align: left;
  font-size: 0.87em;
  margin-top: -5px;
  line-height: 1.3em;
}
</style>
