export const CLASSES = [
    {
        id: 10,
        name: 'Warrior',
        isSpellcaster: false,
    },
    {
        id: 20,
        name: 'High Mage',
        isSpellcaster: true
    },
    {
        id: 30,
        name: 'Elementalist',
        isSpellcaster: true,
    }
];

export const FOCI = [
    {
        id: 1,
        name: 'Alert',
        category: 'Utility',
        exclusive: null,
        description: 'You are keenly aware of your surroundings and virtually impossible to take unaware',
        lvlone: "Gain Notice as a bonus skill. You cannot be surprised, nor can others use the Execution Attack option on you. If the GM rolls initiative by sides, you can add a +1 bonus to your side's initiative roll, though multiple Alert PCs don't stack this bonus. If you roll initiative individually, you can roll it twice and take the better result.",
        lvltwo: 'You always act first in a combat round unless someone elseinvolved is also this Alert.',
    },
    {
        id: 2,
        name: 'Armored Magic',
        category: 'Magic',
        exclusive: 'isSpellcaster',
        description: 'Usable only by Mage heroes who would otherwise be prevented from casting spells or using arts while armored, this Focus reflects special training in channeling magic through the hindering materials of conventional armor',
        lvlone: 'You can cast spells or use arts while wearing armor that has an Encumbrance value of no more than two. You can use a shield while casting, provided your other hand is empty for gesturing.',
        lvltwo: "You can cast spells while wearing armor of any Encumbrance. You've also learned to cast spells while both your hands are full, though not bound.",
    },
    {
        id: 3,
        name: 'Armsmaster',
        category: 'Combat',
        exclusive: null,
        description: 'You are keenly aware of your surroundings and virtually impossible to take unaware',
        lvlone: "Gain Notice as a bonus skill. You cannot be surprised, nor can others use the Execution Attack option on you. If the GM rolls initiative by sides, you can add a +1 bonus to your side's initiative roll, though multiple Alert PCs don't stack this bonus. If you roll initiative individually, you can roll it twice and take the better result.",
        lvltwo: 'You always act first in a combat round unless someone elseinvolved is also this Alert.',
    },
    {
        id: 4,
        name: 'Artisan',
        category: 'Utility',
        exclusive: null,
        description: "You have remarkable gifts as a crafter and can often improvise techniques even in fields unrelated to your usual background. You areable to create mods for equipment even if you are not an Expert",
        lvlone: "Gain Craft as a bonus skill. Your Craft skill is treated as one level higher, up to a maximum of 5, for purposes of crafting and maintaining mods. Mods you build require one fewer unit of arcane salvage, down to a minimum of one. Your Craft skill is applicable to any normal crafting profession’s work, allowing you to fashion their wares without penalty.",
        lvltwo: 'The first mod you add to an item requires no Maintenance and only half the silver piece cost usually required. This benefit is in addition to the benefits of installing a mod in masterwork gear you build. You automatically succeed at any attempt to build masterwork gear, and once per month you can reduce a created mod’s salvage cost by one further unit, down to a minimum of zero.',
    },
    {
        id: 5,
        name: 'Assassin',
        exclusive: null,
        description: 'You are practiced at sudden murder, and have certain advantages in carrying out an Execution Attack.',
        lvlone: "Gain Sneak as a bonus skill. You can conceal an object no larger than a knife from anything less invasive than a strip search. You can draw or produce this object as an On Turn action, and your point-blank thrown or melee attacks made during a surprise round with it cannot miss the target.",
        lvltwo: 'You can take a Move action on the same round as you make an Execution Attack, closing rapidly with a target before you attack. You may split this Move action when making an Execution Attack, taking part of it before you murder your target and part of it afterwards. This movement happens too quickly to alert a victim or to be hindered by bodyguards.',
    }
];

export const ARTS = [
    {
        id: 21,
        name: 'Arcane Lexicon',
        category: 'High Mage',
        description: 'Commit Effort for the scene. For the rest of the scene, you can read any script that was not intentionally obfuscated or encoded by its writer. Extremely esoteric or nonhuman scripts may not be comprehensible this way; the “plain meaning” of the text might be utterly foreign to human logic',
    },
    {
        id: 22,
        name: 'Counter Magic',
        category: 'High Mage',
        description: 'Commit Effort for the day as an Instant action when a visible enemy mage casts a spell. Both of you make opposed Int/Magic or Cha/Magic skill checks; if you win, their spell fizzles and is wasted. This art only works on actual spellcasters and not creatures that merely activate magical powers. You can use this art no more than once per round.'
    },
    {
        id: 23,
        name: 'Empowered Sorcery',
        category: 'High Mage',
        description: "Commit Effort for the day as an Instant action to re-roll any variable die roll associated with a spell's effects,such as a damage roll; take the roll you prefer.",
    },
    {
        id: 24,
        name: 'Hang Sorcery',
        category: 'High Mage',
        description: 'Commit Effort for the day as an Instant action to force an enemy to re-roll a successful saving throw and take the worse result. You may use this art only once per scene.',
    },
    {
        id: 25,
        name: 'Elementalist Art',
        category: 'Elementalist',
        description: 'This is only for elementalists. if you are not an elementalist then you should not see this.'
    }
];

export const SPELLS = [
    {
        id: 221,
        name: 'Apprehending the Arcane Form',
        category: 'High Magic',
        level: 1,
        description: 'The mage opens up their mind to the presence of occult energies. For fifteen minutes per character level, they are capable of seeing active magical effects, curses, enchantments, or other dweomers as colored auras or patterns of light. They may identify magical items and get a one-sentence description of their purpose or most significant powers, and may get more sophisticated answers with successful Wis/Magic skill checks at difficulties of 8 or more depending on the subtlety of the enchantment. Mages with prepared spells are visible to the caster, though which spells the subject might have prepared is not knowable. As a side effect of this spell, the ambient thaumic currents cast enough quasi-light to allow the caster to see normally even in perfect darkness.'
    },
    {
        id: 222,
        name: 'Cognitive Supersession of the Inferior Orders',
        category: 'High Magic',
        level: 1,
        description: 'he mage targets a visible, normal, non-magical animal or insect, obtaining temporary control of the beast and the ability to share its senses. The animal gains a telepathic bond with the caster, obeying any non-suicidal command and allowing the mage to perceive everything it perceives. The beast will not fight for the caster, but can perform complex actions entirely out of character for it while under the mage’s control. The mage must focus to share the beast’s senses, requiring a Main Action and leaving the mage unable to act physically while so focused. The spell lasts until the mage releases the beast, it is dispelled, or it is cast again.'
    },
    {
        id: 223,
        name: 'The Coruscating Coffin',
        category: 'High Magic',
        level: 1,
        description: 'A thaumic discharge is focused on a single visible creature within one hundred feet per caster level, wreathing them in a lethal mantle of crackling energy. The target suffers 1d8 damage per caster level, with a Physical save for half. NPC targets with only 1 hit die will inevitably be slain regardless of the damage done. The spell cannot be blocked by non-magical intervening barriers, provided the caster can see the target with their unaided vision.'
    },
    {
        id: 224,
        name: 'Random level 4 spell',
        category: 'High Magic',
        level: 4,
        description: 'Level 4 spell: If you are seeing this spell option and you are not level 4, your level requirement is broken somewhere.'
    },
    {
        id: 225,
        name: 'Random Elementalist Spell',
        category: 'Elementalist',
        level: 1,
        description: 'You should only see this if you are an elementalist. If you are not then your spell categories is broken somewhere.'
    }
];

export const PROGRESSION = [ 
{

}
];

export const CHARACTERS = [

];

export const USERS = [

];

export const ITEMS = [

]

export const BACKGROUNDS = [

]