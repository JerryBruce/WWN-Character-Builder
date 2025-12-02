export const CLASSES = [
    {
        id: 1,
        name: 'Warrior',
        allowedCategories: ['combat', 'social'],
        allowedFoci: [11, 12, 13]
    },
    {
        id: 2,
        name: 'High Mage',
        allowedCategories: ['magic', 'social'],
        allowedFoci: [12, 14, 15],
        spells: [],
        arts: [],
        maxSpells: 3,
        maxArts: 4,
    }
];

export const FOCI = [
    {
        id: 11,
        name: 'Alert',
        category: 'social',
        description: 'You are keenly aware of your surroundings and virtually impossible to take unaware',
        lvlone: "Gain Notice as a bonus skill. You cannot be surprised, nor can others use the Execution Attack option on you. If the GM rolls initiative by sides, you can add a +1 bonus to your side’s initiative roll, though multiple Alert PCs don’t stack this bonus. If you roll initiative individually, you can roll it twice and take the better result.",
        lvltwo: 'You always act first in a combat round unless someone elseinvolved is also this Alert.',
    },
    {
        id: 12,
        name: 'Armored Magic',
        category: 'magic',
        description: 'Usable only by Mage heroes who would otherwise be prevented from casting spells or using arts while armored, this Focus reflects special training in channeling magic through the hindering materials of conventional armor',
        lvlone: 'You can cast spells or use arts while wearing armor that has an Encumbrance value of no more than two. You can use a shield while casting, provided your other hand is empty for gesturing.',
        lvltwo: "You can cast spells while wearing armor of any Encumbrance. You’ve also learned to cast spells while both your hands are full, though not bound.",
    },
    {
        id: 13,
        name: 'Armsmaster',
        category: 'combat',
        description: 'You are keenly aware of your surroundings and virtually impossible to take unaware',
        lvlone: "Gain Notice as a bonus skill. You cannot be surprised, nor can others use the Execution Attack option on you. If the GM rolls initiative by sides, you can add a +1 bonus to your side’s initiative roll, though multiple Alert PCs don’t stack this bonus. If you roll initiative individually, you can roll it twice and take the better result.",
        lvltwo: 'You always act first in a combat round unless someone elseinvolved is also this Alert.',
    },
    {
        id: 14,
        name: 'Alert',
        category: 'social',
        description: "You have an unusual competence with thrown weapons and melee attacks. This Focus’ benefits do not apply to unarmed attacks or nonthrown projectile weapons. This Focus’ bonuses also don’t stack with Deadeye or other Foci that add a skill’s level to your damage or Shock.",
        lvlone: "Gain Stab as a bonus skill. You can Ready a Stowed melee or thrown weapon as an Instant action. You may add your Stab skill level to a melee or thrown weapon’s damage roll or Shock damage, assuming it has any to begin with.",
        lvltwo: 'The Shock from your melee attacks always treats the target as if they have AC 10. Gain a +1 bonus to hit with all thrown or melee attacks.',
    },
    {
        id: 15,
        name: 'Alert',
        category: 'social',
        description: 'You are keenly aware of your surroundings and virtually impossible to take unaware',
        lvlone: "Gain Notice as a bonus skill. You cannot be surprised, nor can others use the Execution Attack option on you. If the GM rolls initiative by sides, you can add a +1 bonus to your side’s initiative roll, though multiple Alert PCs don’t stack this bonus. If you roll initiative individually, you can roll it twice and take the better result.",
        lvltwo: 'You always act first in a combat round unless someone elseinvolved is also this Alert.',
    }
];

export const ARTS = [

];

export const SPELLS = [

];

export const CHARACTERS = [

];

export const USERS = [

];

export const ITEMS = [

]

export const BACKGROUNDS = [
    
]