<script>
  let { names, colorPreset } = $props();
  const Presets = {
    likesPreset: [
      "#537D5D",
      "#F2C078",
      "#3D90D7",
      "#D5451B",
      "#C5172E",
      "black",
      "#71C0BB",
      "#5588A3",
    ],
  };
  import tag from "$components/Tag.svelte";
</script>

<div class="tag-container">
  {#each names as name, i}
    {#if colorPreset === "likesPreset"}
      <div
        class="tag"
        style="background-color: {Presets.likesPreset[i]}; color: white;"
      >
        <span>{name}</span>
      </div>
    {:else}
      <div class="tag"><span>{name}</span></div>
    {/if}
  {/each}
</div>

<style>
  .tag-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-width: 18.75rem;
  }
</style>
