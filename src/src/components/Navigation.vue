<template>
  <header>
    <nav>
      <span class="logo">
        TheWiredDiabetic
      </span>
      <input type="checkbox" id="menu-toggle" class="menu-toggle">
      <label for="menu-toggle" class="menu-icon">
        <i class="bi bi-list"></i>
      </label>
      <div class="links">
        <RouterLink to="/" exact-active-class="active"><i class='bi bi-house-fill'></i> Home</RouterLink>
        <RouterLink to="/changesgit help"><i class='bi bi-file-earmark-text'></i> Changelog</RouterLink>
        <a href="https://github.com/TheWiredDiabetic"><i class='bi-brands bi-github'></i> My GitHub</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  background: #020617;
}

nav {
  background: #11152b; 
  border-bottom: 0.025rem solid #7a82a8; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  text-align: left;
  transition: all 0.25s ease;
}

nav .links {
  display: flex;
  gap: 2rem;
}

nav .links a.active {
  font-weight: 600;
  color: #7dd3fc;
}

nav .logo {
  font-weight: bold;
}

.menu-toggle {
  display: none;
}

.menu-icon {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
}

/* Mobile devices */
@media only screen and (max-width: 480px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
  }

  .menu-icon {
    display: block;
  }

  nav .links {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    display: none;
  }

  .menu-toggle:checked ~ .links {
    display: flex;
  }

  nav .logo {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  nav .links a {
    font-size: 1rem;
  }

  nav .links a i {
    margin-right: 0.5rem;
  }
}
</style>
