ServerEvents.recipes((event) => {
  event.remove({ id: "vintagedelight:organic_compost_from_tree_bark_mash" });
  event
    .shapeless(
      "farmersdelight:organic_compost",
      [
        "minecraft:dirt",
        "2x farmersdelight:straw",
        "2x minecraft:bone_meal",
        "2x vintagedelight:organic_mash",
        "2x #cozy_peas:bark",
      ]
    )
    .id("cozy_peas:vintagedelight_organic_compost_from_tree_bark_mash");

  event.remove({ id: "farmersdelight:organic_compost_from_tree_bark" });  
  event
    .shapeless(
      "farmersdelight:organic_compost",
      [
        "minecraft:dirt",
        "2x farmersdelight:straw",
        "2x minecraft:bone_meal",
        "4x #cozy_peas:bark",
      ]
    )
    .id("cozy_peas:vintagedelight_organic_compost_from_tree_bark");
});
