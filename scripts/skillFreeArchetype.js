
class SkillAsFreeArchetype {
    static ID = 'pf2e-free-archetype-skill-feats';

    /** Adds Skill feats to the list of allowed Free Archetype feats.
     * 
     * @param {CharacterSheetPF2e} character Object of the Character to update
     * @param {Any} _0 
     * @param {Any} _1 
     * @param {Any} _2 
     */
    static addSkillFeatType(character, _0, _1, _2) {
        let archetype_feats = character.object.feats.get("archetype");

        if (archetype_feats) {
            SkillAsFreeArchetype.log(false, "Adding Skill feat type to Archetype feats");
            if (!archetype_feats.supported.includes("skill")) {
                archetype_feats.supported.push("skill");
            }
        } else {
            SkillAsFreeArchetype.log(false, "Archetype feats are disabled");
        }
    }

    static log(force, ...args) {
        const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(SkillAsFreeArchetype.ID);
        if (shouldLog) {
            console.log(SkillAsFreeArchetype.ID, '|', ...args);
        }
    }
}

Hooks.once('devModeReady', (DevMode) => {
    DevMode.registerPackageDebugFlag(SkillAsFreeArchetype.ID);
});


Hooks.on('renderCharacterSheetPF2e', SkillAsFreeArchetype.addSkillFeatType);