<div class="lovenote-container">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
    ><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
      fill="#E55050"
      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
    /></svg
  >
  <div class="sub-text lovenote"></div>
</div>

<style>
  .lovenote-container {
    bottom: calc(var(--navbar-height) + 10px);
    order: 2;
    z-index: 50;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    gap: 10px;
  }

  .lovenote::after {
    content: "made with love by the focaccia.dev development team";
  }

  @media only screen and (max-width: 600px) {
    /* lazy ahh coding */
    .lovenote::after {
      content: "made with love by focaccia.dev";
    }

    .lovenote-container {
      bottom: calc(var(--mobile-navbar-height) + 5px);
    }
  }

  svg {
    width: 15px;
    color: red;
    height: 15px;
  }
</style>
