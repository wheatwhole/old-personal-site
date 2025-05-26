<script>
  let { name } = $props();
</script>

<div class="pfp">
  <img src="/pfps/{name}.webp" alt={name} />
</div>
<h1 class="bio-title">{name}<span class="h300"></span></h1>

<style>
  .pfp {
    min-width: 9.375rem;
    min-height: 9.375rem;
    border-radius: 360px;
    overflow: hidden;
  }

  .pfp > img {
    width: 9.375rem;
    height: 9.375rem;
  }

  .bio-title {
    text-align: center;
    color: var(--main-color);
    user-select: none;
  }
</style>
