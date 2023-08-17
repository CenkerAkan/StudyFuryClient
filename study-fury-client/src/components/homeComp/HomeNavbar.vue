<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">StudyFury</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">Home</a>
            </li>
          </router-link>
          <router-link to="/login">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">Login</a>
            </li>
          </router-link>
          <router-link to="/signup">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">Signup</a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
