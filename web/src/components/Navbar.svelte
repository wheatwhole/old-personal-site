<script>
  import About from "./NavItems/About.svelte";
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { setContext } from 'svelte'

  let SizeDown = new Tween(0, {
    duration: 1000,
    easing: cubicOut,
  });

  setContext('SizeDown', SizeDown)


</script>

<div class="navbar-container">
  <div class="navbar-bull-horns"></div>
  <nav class="navbar">
    <div class="logo" aria-label="focaccia.dev logo">
      <img class="focaccia-logo" src="logo.png" alt="focaccia-logo" />
    </div>
    <nav class="navbar-tabs">
      <About />
    </nav>
  </nav>
</div>

<style>
  .navbar-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: var(--navbar-height);
    bottom: 0;
    width: 100%;
  }

  .navbar {
    height: 100%;
    width: 100%;
    max-width: fit-content;
    z-index: 5;
    order: 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: var(--nav-bg);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 13px;
  }

  .navbar-tabs {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    vertical-align: center;
  }

  :global(a[role="tab"]) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--navbar-highlight);
    /* dark: color: black; */
    font-size: 13px;
    padding: 13px 20px;
    opacity: 0.75;
    text-decoration: none;
  }

  .logo {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: safe center;
    color: var(--navbar-highlight);
    font-size: 13px;
    padding: 13px 3px;
    opacity: 1;
    min-width: fit-content;
    min-height: 40px;
    text-decoration: none;
  }

  .focaccia-logo {
    border-radius: 20px;
    width: 60px;
    object-fit: cover;
    height: 60px;
  }

  @media only screen and (max-width: 600px) {
    .navbar-container {
      height: var(--mobile-navbar-height);
      width: 100%;
    }
    /* cozy navbar */
    .navbar:before {
      content: "";
      position: absolute;
      top: -40px;
      left: 0;
      height: 40px;
      width: 40px;
      border-bottom-left-radius: 50%;
      box-shadow: 0 20px 0 0 var(--nav-bg);
      z-index: -10;
    }

    .navbar:after {
      content: "";
      position: absolute;
      top: -40px;
      right: 0;
      height: 40px;
      width: 40px;
      border-bottom-right-radius: 50%;
      box-shadow: 0 20px 0 0 var(--nav-bg);
      z-index: -10;
    }

    .navbar {
      position: relative;
      border-radius: 0rem;
      max-width: 100%;
      justify-content: center;
    }
  }
</style>
