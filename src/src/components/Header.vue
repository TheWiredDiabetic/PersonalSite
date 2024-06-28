<template>
  <div class="top-header">
    <div class="background-container"></div>
    <div class="header-content">
      <h1>TheWiredDiabetic</h1>
      <p>he/him - programmer & developer</p>
      <div class="hot-buttons">
        <a href="mailto: taylorplaysrblx@gmail.com"><i class="bi bi-envelope-at"></i></a>
        <a href="https://github.com/TheWiredDiabetic"><i class="bi-brands bi-github"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-header {
  position: relative;
  overflow: hidden;
}

.top-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/blob.png');
  background-attachment: fixed;
  background-repeat: repeat-x;
  background-size: 100%;
  filter: blur(20px) brightness(45%);
  z-index: 1;
}

.header-content {
  position: relative;
  height: 100%;
  width: 100%;
  border-bottom: 0.025rem solid #7a82a8;
  z-index: 2;
  text-align: center;
  font-size: 1rem;
  padding: 4.5rem;
}

.header-content .hot-buttons {
  display: flex;
  gap: 2rem;
  text-align: center;
  justify-content: center;
}

.header-content h1 {
  font-size: 2.9rem;
  font-weight: bold;
  text-align: center;
  filter: drop-shadow(0rem 1rem 2rem orange);
}

.header-content p {
  font-size: 1.5rem;
}

.header-content a {
  font-size: 2rem;
}

@media only screen and (max-width: 480px) {
  .header-content {
    padding: 2rem;
  }

  .header-content h1 {
    font-size: 1.5rem;
  }

  .header-content p {
    font-size: 1rem;
  }

  .header-content a {
    font-size: 1.2rem;
  }

  .header-content .hot-buttons {
    flex-direction: row;
    gap: 1rem;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .header-content {
    padding: 3rem;
  }

  .header-content h1 {
    font-size: 2rem;
  }

  .header-content p {
    font-size: 1.2rem;
  }

  .header-content a {
    font-size: 1.5rem;
  }

  .header-content .hot-buttons {
    gap: 1.5rem;
  }
}
</style>

