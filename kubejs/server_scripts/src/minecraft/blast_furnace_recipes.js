ServerEvents.recipes((event) => {
    event.blasting("skinnedlanterns:wither_skeleton_soul_lantern_block", "architects_palette:lit_withered_osseous_skull")
      .xp(0.5)
      .cookingTime(600)
      .id("minecraft:blasting/wither_skeleton_soul_lantern_block_from_lit_withered_osseous_skull");
  });