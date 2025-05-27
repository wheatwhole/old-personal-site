<script>
  let { url, href, projectName, description, Icon } = $props();
  import LinkIcon from '~icons/tabler/external-link'; 
</script>

<div class="card">
  <div class="project-button-container">
    <Icon style="font-size: 30px;" />
    <a class="project-button" target="_blank" {href}>
      <div class="project-name">{projectName}</div>
      <span class="project-url sub-text" data-sveltekit-replacestate><LinkIcon />{url}</span>
    </a>
  </div>
  <p class=" sub-text">
    {description}
  </p>
</div>

<style>
  .card {
    border-radius: 15px;
    box-shadow: var(--shadow-main);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px 20px;
    width: 90%;
    height: fit-content;
        transition: 0.3s var(--actions-and-stuff-ahh-transition);

  }

  .card:hover {
    transform: scale(1.05,1.05);
  }

  .project-button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: center;
    text-decoration: none;
    border-radius: 15px;
    padding: 10px;
  }

  .project-button-container:hover {
    background: var(--hover-color);
  }

  .project-button {
    text-decoration: none;
    color: var(--text-color);
  }

  .project-name {
    font-weight: 600;
    font-size: 18px;
  }

  .project-url {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;

  }
</style>
