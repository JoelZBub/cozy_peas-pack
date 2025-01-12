LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:skeleton")
        .randomChance(0.03)
        .addLoot("minecraft:skeleton_skull");
});