ServerEvents.recipes((event) => {
  event
    .shaped("beachparty:wet_hay_block", ["AAA", "ABA", "AAA"], {
      A: "brewery:dried_wheat",
      B: "minecraft:water_bucket"
    })
    .id("cozy_peas:beachparty_wet_hay_block");
});
