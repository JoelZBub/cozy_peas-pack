// priority: 0

// Recipes to be removed, but not replaced, go here.
// If recipe is removed and replaced, it should go in the script with the recipe that replaces it.
const removeRecipesByID = [
    "architects_palette:lit_withered_osseous_skull",
    "architects_palette:withered_osseous_bricks",
    "architects_palette:withered_osseous_pillar",
    "architects_palette:withered_osseous_skull",
    "architects_palette:stonecutting/withered_osseous_skull_from_withered_osseous_bricks_stonecutting",
     "skinnedlanterns:wither_skeleton_soul_lantern_block" 
  ];

  const removeRecipesByInput = [];
  
  const removeRecipesByOutput = [
    // this works if we need it
  ];
  
  const removeRecipesByMod = [];
  
  ServerEvents.recipes((event) => {
    removeRecipesByID.forEach((id) => {
      event.remove({ id: `${id}` });
    });
  
    removeRecipesByInput.forEach((input) => {
      event.remove({ input: `${input}` });
    });
  
    removeRecipesByOutput.forEach((output) => {
      event.remove({ output: `${output}` });
    });
  
    removeRecipesByMod.forEach((mod) => {
      event.remove({ mod: `${mod}` });
    });
  
    global.hideRemoveJEI.forEach((item) => {
      event.remove({ output: `${item}` });
      // event.remove({ input: `${item}` });
    });
  });