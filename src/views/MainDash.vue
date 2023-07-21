<script setup>
import "../assets/css/MainDash.scss"
import { RouterView, RouterLink } from 'vue-router'
</script>
<template>
  <section class="Maindash-container d-large-grid">
<section class="app__section-maindash">
    <div>
        <div class="app__section-div-top position-relative z-1">
    <div class="image position-relative">
      <img src='../assets/images/image-jeremy.png' alt="avatar"/>
    </div>
<div class="avatar-name">
  <h1 class="d-flex flex-column text-white fw-light"><span class="fw-reguler">Report for</span>Jeremy Robson</h1>
</div>
</div>
  <div class="app__section-div-bottom d-flex flex-lg-column flex-sm-row position-relative z-0">
<RouterLink to="/daily">Daily</RouterLink>
<RouterLink to="/weekly">Weekly</RouterLink>
<RouterLink to="/monthly">Monthly</RouterLink>
</div>
    </div>
  </section>
  <section class="dash-status">
        <RouterView/>
  </section>
  </section>
</template>
