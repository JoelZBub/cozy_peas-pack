ServerEvents.recipes(event => {
    event.recipes.create
    .splashing(["minecraft:wither_skeleton_skull", "minecraft:soul_lantern"], "skinnedlanterns:wither_skeleton_soul_lantern_block")
    .id("cozy_peas:splashing/wither_skeleton_skull_and_soul_lantern_from_wither_skeleton_soul_lantern_block");
  });