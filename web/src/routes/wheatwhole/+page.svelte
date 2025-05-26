<script>
  import Profile from "$components/Profile.svelte";
  import Tags from "$components/Tags.svelte";
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
<div class="center-container">
  <!-- wrapper of the current view -->
  <main class="wheatwhole">
    <!--me card-->
    <Profile name={"wheatwhole"} />
    <section id="short-bio">
      <p>
        Follower of JESUS, Ghanaian, game developer, piano, front-end
        programming, 3D modeling, fútbol.
      </p>
    </section>
    <section id="about">
      <p>
        In this "bakery", I will be posting fun utilities and my official games.
        This bio page will be moved, and the site will be changed to
        "focaccia.dev" since focaccia is the name of the organization.
        <br /><strong>Site Inspiration:</strong> cobalt.tools, guns.lol, monkeytype,
        dragon ball, one piece, naruto, nico's nextbots, minecraft
      </p>
    </section>
    <hr />
    <div class="likes-wrapper">
      <h3 class="tiny-title">likes</h3>
      <Tags names={tags} colorPreset={"likesPreset"} />
    </div>

    <h3 class="tiny-title">contact</h3>
    <div class="contact-container">
      <p>
        too lazy to add these properly <br /> discord and youtube are
        @wheatwhole_, <br />
        instagram is lesfleurss, <br /> github and steam are @wheatwhole, <br />
        roblox is @ThatEndy <br />
        i do not have any socials other than these ones.
      </p>
    </div>
  </main>
</div>

<style>
  .wheatwhole {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    max-width: 40rem;
    gap: 0.9375rem;
  }

  .likes-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    justify-content: safe center;
    align-items: center;
    margin-bottom: 1.25rem;
  }
</style>
