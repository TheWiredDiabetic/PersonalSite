

<template>
  <main>
    <div class="flex-root">
      <div class="flex-wrapper">
        <div class="flex-item">
          <h1>About Me</h1>
          <p>Hi there, I'm formally <strong>TheWiredDiabetic</strong>, but known as Taylor. I'm a Irish Programmer & Developer that builds random projects using frameworks such as Express. And not forgetting making silly bots using the discord bot wrapper known as Discord.js.</p>
          <br>
          <p>As seen within my username, and on my GitHub bio. I'm also a proud fighter of Type 1 Diabetes, since September 2021.</p>
        </div>
        <div class="flex-item">
          <h1>Recent Projects</h1>
          <p>All projects have a progess bar to indicate how far the project is.</p>
          <div class="wrapper">
            <h2>Personal Portfolio</h2>
            <p>This amazing website your looking at right now :)</p>
            <div class="progress-bar">
                <div data-size="20" class="progress"></div>
            </div>
          </div>
          <div class="wrapper" style="text-align: center;">
            <h2>No other projects on the horizion.</h2>
            <p>Or hasen't managed to make it's spotlight on this list.</p>
          </div>
        </div>
      </div>
      <div class="flex-wrapper">
        <div class="flex-item">
          <h1>My Skills</h1>
          <p>
            <a href="https://skillicons.dev">
              <img src="https://skillicons.dev/icons?i=html,css,js,discordjs,express,vue,lua,nodejs&perline=4" />
            </a>
          </p>
          <ul>
            <li>began learning <strong>html and css</strong> back in <strong>2022 - 2023.</strong></li>
            <li>began learning <strong>luau</strong> back in <strong>late 2023.</strong></li>
            <li>began learning <strong>express.js</strong> back in <strong>early march (2024).</strong></li>
            <li>began learning <strong>discord.js</strong> back in <strong>early april (2024).</strong></li>
            <li>began learning <strong>vue</strong> back in <strong>late april (2024).</strong></li>
            <li>and here we are today, <strong>my personal website your looking at, built purely in vue.</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .flex-root {
    padding: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
  }

  .flex-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .wrapper {
    background: #090b1770;
    border: 0.05rem solid #334155;
    border-radius: 0.45rem;
    padding: 1.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    position: relative;
    width: 100%;
  }

  .flex-item {
    background: #090b1770;
    border: 0.05rem solid #334155;
    border-radius: 0.45rem;
    padding: 1.25rem;
    position: relative;
    width: 100%;
  }

  .flex-item h1 {
    font-weight: 600;
  }

  .flex-item p {
    font-size: 1rem;
  }

  .flex-item li {
    line-height: 2rem;
    font-size: 1.25rem;
    list-style-type: " ╰ ";
  }

  .flex-item li strong {
    font-weight: bold;
    border-bottom: 0.1rem solid;
    color: #0ea5e9;
  }

  @media only screen and (max-width: 768px) {
    .flex-root {
      flex-direction: column;
      padding: 1rem;
    }

    .flex-item h1 {
      font-size: 1.75rem;
    }

    .flex-item li {
      font-size: 1.05rem;
    }
  }
</style>
