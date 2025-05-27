<script lang="ts">
  import InfoIcon from "~icons/basil/info-rect-outline"; /* using Unplugin icons we can load icons at meowbalt speeds! */
  import StarIcon from "~icons/basil/star-outline"; /* using Unplugin icons we can load icons at meowbalt speeds! */
  import { onMount } from "svelte";

  import NavTab from "./NavTab.svelte";
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { setContext } from "svelte";
</script>

<div class="navbar-container">
  <nav class="navbar">
    <div class="logo" aria-label="focaccia.dev logo">
      <img class="focaccia-logo" src="{base}/logo.png" alt="focaccia-logo" />
    </div>
    <nav class="navbar-tabs">
      <NavTab name={"about?"} Icon={InfoIcon} href={"/"} />
      <NavTab name={"me!"} Icon={StarIcon} href={"/wheatwhole"} />

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
    width: fit-content;
    z-index: 5;
    order: 3;
    display: flex;
    overflow-x: auto;
    flex-direction: row;
    overflow-y: hidden;
    align-items: center;
    justify-content: center;
    background-color: var(--nav-bg);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 0px 3px;
  }

  .navbar-tabs {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    padding: 5px;
    overflow-x: scroll;
    overflow-y: hidden;
    vertical-align: center;
    justify-content: space-evenly;
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
      border-radius: 0rem;
      width: 100%;
    }
  }
</style>
