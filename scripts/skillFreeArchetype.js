
class SkillAsFreeArchetype {
    static ID = 'skill-as-free-archetype';

    static addSkillFeatType(character, _0, _1, _2) {
        //Get character feats
        let archetype_feats = character.object.feats.get("archetype");
        if (archetype_feats) {
            // console.log("Adding Skill feat type to Archetype feats");

            if (!archetype_feats.supported.includes("skill")) {
                archetype_feats.supported.push("skill");
            }

        } else {
            // console.log("Archetype feats are disabled");
        }
    }
}


Hooks.on('renderCharacterSheetPF2e', SkillAsFreeArchetype.addSkillFeatType);