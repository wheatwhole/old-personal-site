<script>
  import ProjectCard from "$components/ProjectCard.svelte";
  import Profile from "$components/Profile.svelte";
  import Tags from "$components/Tags.svelte";
  import StarIcon from "~icons/basil/star-outline"; /* using Unplugin icons we can load icons at meowbalt speeds! */
  let tags = [
    "Modded Minecraft (java)",
    "Avatar: The Last Airbender",
    "Arcane Odyssey by vetexgames",
    "Elemental Warzone",
    "Rush Hour",
    "Grace (game)",
    "Lilo and Stitch",
    "One Piece",
    "Naruto",
    "Dragon Ball",
    "Mario",
  ];
</script>

<!--bottom navbar-->
<!--acts as a "body" excluding the navbar -->
<div class="body-content">
  <!-- wrapper of the current view -->
  <main class="wheatwhole">
    <div class="main-profile">
      <!--me card-->
      <Profile name={"wheatwhole"} />
      <section class="short-bio" id="short-bio">
        <p class="giantahhparagraph">
          hi. i'm a ghanaian programmer and game developer who has every single idea what they are doing. i also like messing around in blender. ✝️
        </p>
      </section>
    </div>
    <div class="likes-wrapper">
      <h3 class="tiny-title">likes</h3>
      <Tags names={tags} colorPreset={"likesPreset"} />
    </div>
   
  </main>
   <div class="projects">
    <ProjectCard
      href="https://wheatwhole.github.io/packgod"
      url="wheatwhole.github.io/packgod"
      projectName="packgod"
      Icon={StarIcon}
      description="we call it packgod humbler 300, a scary accurate packgod roast generator made using pollinations.ai. will humble any fools in the vicinity.  practice caution when using. "
    />
    </div>
</div>

<style>
  .body-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    overflow-y: none;
    padding: 15px;
  }

  .wheatwhole {
    display: flex;
    flex-direction: column;
    justify-content: safe center;
    align-items: center;
    max-width: 500px;
    width: 100%;
    height: 100%;
    gap: 20px;
    overflow-y: none;
    transition: transform 300ms cubic-bezier(0.33, 1, 0.68, 1);
  }

  .likes-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    margin-bottom: 1.25rem;
  }

  .projects {
    max-width: 500px;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
  }
   
  @media only screen and (max-width: 800px) {
    .body-content {
    flex-direction: column;
    justify-content: safe center;
    align-items: center;
  }
  }
</style>
