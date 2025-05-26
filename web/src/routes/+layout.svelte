<script lang="ts">
  import type { Snippet } from "svelte";
  import type { LayoutData } from "./$types";
  import LoveNote from "$components/LoveNote.svelte";
  import Navbar from "$components/Navbar.svelte";
  let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="basket">
  <!-- acts as a second "body"-->
  <Navbar />
  <div class="loaf">
    <!-- main content of the page -->
    {@render children()}
  </div>
</div>

<LoveNote />

<style src="../static/"></style>
