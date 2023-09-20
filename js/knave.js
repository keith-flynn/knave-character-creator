const traits = {
  Physique: ['Athletic', 'Brawny', 'Corpulent', 'Delicate', 'Gaunt',
            'Hulking', 'Lanky', 'Ripped', 'Rugged', 'Scrawny',
            'Short', 'Sinewy', 'Slender', 'Flabby', 'Statuesque',
            'Stout', 'Tiny', 'Towering', 'Willowy', 'Wiry'],
  Face: ['Bloated', 'Blunt', 'Bony', 'Chiseled', 'Delicate',
        'Elongated', 'Patrician', 'Pinched', 'Hawkish', 'Broken',
        'Impish', 'Narrow', 'Ratlike', 'Round', 'Sunken',
        'Sharp', 'Soft', 'Square', 'Wide', 'Wolfish'],
  Skin: ['Battle Scar', 'Birthmark', 'Burn Scar', 'Dark', 'Makeup',
        'Oily', 'Pale', 'Perfect', 'Pierced', 'Pockmarked',
        'Reeking', 'Tattooed', 'Rosy', 'Rough', 'Sallow',
        'Sunburned', 'Tanned', 'War Paint', 'Weathered', 'Whip Scar'],
  Hair: ['Bald', 'Braided', 'Bristly', 'Cropped', 'Curly',
        'Disheveled', 'Dreadlocks', 'Filthy', 'Frizzy', 'Greased',
        'Limp', 'Long', 'Luxurious', 'Mohawk', 'Oily',
        'Ponytail', 'Silky', 'Topknot', 'Wavy', 'Wispy'],
  Clothing: ['Antique', 'Bloody', 'Ceremonial', 'Decorated', 'Eccentric',
            'Elegant', 'Fashionable', 'Filthy', 'Flamboyant', 'Stained',
            'Foreign', 'Frayed', 'Frumpy', 'Livery', 'Oversized',
            'Patched', 'Perfumed', 'Rancid', 'Torn', 'Undersized'],
  Virtue: ['Ambitious', 'Cautious', 'Courageous', 'Courteous', 'Curious',
          'Disciplined', 'Focused', 'Generous', 'Gregarious', 'Honest',
          'Honorable', 'Humble', 'Idealistic', 'Just', 'Loyal',
          'Merciful', 'Righteous', 'Serene', 'Stoic', 'Tolerant'],
  Vice: ['Aggressive', 'Arrogant', 'Bitter', 'Cowardly', 'Cruel',
        'Deceitful', 'Flippant', 'Gluttonous', 'Greedy', 'Irascible',
        'Lazy', 'Nervous', 'Prejudiced', 'Reckless', 'Rude',
        'Suspicious', 'Vain', 'Vengeful', 'Wasteful', 'Whiny'],
  Speech: ['Blunt', 'Booming', 'Breathy', 'Cryptic', 'Drawling',
          'Droning', 'Flowery', 'Formal', 'Gravelly', 'Hoarse',
          'Mumbling', 'Precise', 'Quaint', 'Rambling', 'Rapid-fire',
          'Dialect', 'Slow', 'Squeaky', 'Stuttering', 'Whispery'],
  Background: ['Alchemist', 'Beggar', 'Butcher', 'Burglar', 'Charlatan',
              'Cleric', 'Cook', 'Cultist', 'Gambler', 'Herbalist',
              'Magician', 'Mariner', 'Mercenary', 'Merchant', 'Outlaw',
              'Performer', 'Pickpocket', 'Smuggler', 'Student', 'Tracker'],
  Misfortunes: ['Abandoned', 'Addicted', 'Blackmailed', 'Condemned', 'Cursed',
               'Defrauded', 'Demoted', 'Discredited', 'Disowned', 'Exiled',
               'Framed', 'Haunted', 'Kidnapped', 'Mutilated', 'Poor',
               'Pursued', 'Rejected', 'Replaced', 'Robbed', 'Suspected'],
  Alignment: ['Law', 'Law', 'Law', 'Law', 'Law',
             'Neutrality', 'Neutrality', 'Neutrality', 'Neutrality', 'Neutrality',
             'Neutrality', 'Neutrality', 'Neutrality', 'Neutrality', 'Neutrality',
             'Chaos', 'Chaos', 'Chaos', 'Chaos', 'Chaos']
}

// Random number between 1-20
function rollBones() {
	return Math.floor(Math.random() * 20) + 1;
}

for (const key in traits) {

	// Rolling a 1 would correspond to index 0
	const diceRoll = rollBones() - 1;
	// Format for output
	const roll = `${key}: ${traits[key][diceRoll]}`;
	
	// Append to main in DOM
	const para = document.createElement("p");
	para.innerText = roll;
	document.getElementById("main").appendChild(para);
}