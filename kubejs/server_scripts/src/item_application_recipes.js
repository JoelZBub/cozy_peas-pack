ServerEvents.recipes((event) => {
  event.recipes.create
    .item_application("architects_palette:withered_osseous_skull", [
        "architects_palette:withered_osseous_pillar",
        "minecraft:skeleton_skull"
    ])
    .id("cozy_peas:item_application/withered_osseous_skull_from_withered_osseous_pillar");

    event.recipes.create
    .item_application("architects_palette:lit_withered_osseous_skull", [
        "architects_palette:withered_osseous_skull",
        "minecraft:soul_torch"
    ])
    .id("cozy_peas:item_application/lit_withered_osseous_skull_from_withered_osseous_skull");   

});
