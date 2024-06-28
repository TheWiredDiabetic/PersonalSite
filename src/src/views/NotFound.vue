<template>
  <div class="error-page">
    <h1>Oops, that doesn't look right.</h1>
    <h3>The page you were looking for cannot be found, how sad...</h3>

    <br>
    <h2>Possible reason(s):</h2>
    <ul>
      <li>The address may have been typed incorrectly, check for any typo(s);</li>
      <li>It may be a broken or outdated hyperlink that's still waiting to be updated.</li>
    </ul>
    <RouterLink to="/" class="btn">Jump back to the home-page.</RouterLink>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style>
.error-page {
  padding: 1rem;
  margin: 1rem;
  background: #090b1770;
  border: 0.05rem solid #334155;
  border-radius: 0.45rem;
}

h1 {
  font-weight: 600;
}

.btn {
  display: block;
  font-size: 1rem;
  padding: 2rem;
  margin: 3rem;
  background: #191e3e70;
  border: 0.05rem solid #334155;
  border-radius: 0.45rem;
}

.error-page li {
    line-height: 2rem;
    font-size: 1rem;
    list-style-type: " ╰ ";
  }


</style>
