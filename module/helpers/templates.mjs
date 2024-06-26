/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/foundry-quintessence-system/templates/actor/parts/actor-skills.hbs',
    'systems/foundry-quintessence-system/templates/actor/parts/actor-items.hbs',
    'systems/foundry-quintessence-system/templates/actor/parts/actor-passives.hbs',
    'systems/foundry-quintessence-system/templates/actor/parts/actor-effects.hbs',
    // Item partials
    'systems/foundry-quintessence-system/templates/item/parts/item-effects.hbs',
  ]);
};
