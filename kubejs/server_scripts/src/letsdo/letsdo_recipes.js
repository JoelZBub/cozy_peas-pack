ServerEvents.recipes((event) => {
  event
    .shaped("beachparty:dried_wheat_block", ["AAA", "AAA", "AAA"], {
      A: "brewery:dried_wheat",
    })
    .id("peas:beachparty_dried_wheat_block");
});