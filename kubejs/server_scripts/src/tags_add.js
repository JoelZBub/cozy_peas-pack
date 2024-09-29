// priority: 0

// This should be used only for item, block, recipe, fluid and loot tags
// Biome tags should prefer datapacks, or tags_add_remove_worldgen_biome script

ServerEvents.tags("item", (event) => {

    event.add("cozy_peas:bark", [
        "ambientadditions:bark", 
        "farmersdelight:tree_bark", 
        "immersive_weathering:vinery/dark_cherry_scales",
        /^immersive_weathering:.*_bark$/
    ]);
});