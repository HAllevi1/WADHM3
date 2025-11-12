<template>
  <header>
    <div class="header-left">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/add-post" class="nav-item">addPost</router-link>
    </div>

    <div class="header-right">
      <!-- Avatar as link -->
      <router-link to="/signup" class="avatar-btn" title="Account">
        <img
          alt="login icon"
          src="https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png"
        />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ddd;
  padding: 8px 12px;
}

.nav-item {
  text-decoration: none;
  color: #000;
  margin-right: 12px;
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

.avatar-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  line-height: 0;
}

.avatar-btn img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
}
</style>
