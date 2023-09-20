const traits = {
  physique: ['Athletic', 'Brawny', 'Corpulent', 'Delicate', 'Gaunt',
            'Hulking', 'Lanky', 'Ripped', 'Rugged', 'Scrawny',
            'Short', 'Sinewy', 'Slender', 'Flabby', 'Statuesque',
            'Stout', 'Tiny', 'Towering', 'Willowy', 'Wiry'],
  face: ['Bloated', 'Blunt', 'Bony', 'Chiseled', 'Delicate',
        'Elongated', 'Patrician', 'Pinched', 'Hawkish', 'Broken',
        'Impish', 'Narrow', 'Ratlike', 'Round', 'Sunken',
        'Sharp', 'Soft', 'Square', 'Wide', 'Wolfish'],
  skin: ['Battle Scar', 'Birthmark', 'Burn Scar', 'Dark', 'Makeup',
        'Oily', 'Pale', 'Perfect', 'Pierced', 'Pockmarked',
        'Reeking', 'Tattooed', 'Rosy', 'Rough', 'Sallow',
        'Sunburned', 'Tanned', 'War Paint', 'Weathered', 'Whip Scar'],
  hair: ['Bald', 'Braided', 'Bristly', 'Cropped', 'Curly',
        'Disheveled', 'Dreadlocks', 'Filthy', 'Frizzy', 'Greased',
        'Limp', 'Long', 'Luxurious', 'Mohawk', 'Oily',
        'Ponytail', 'Silky', 'Topknot', 'Wavy', 'Wispy'],
  clothing: ['Antique', 'Bloody', 'Ceremonial', 'Decorated', 'Eccentric',
            'Elegant', 'Fashionable', 'Filthy', 'Flamboyant', 'Stained',
            'Foreign', 'Frayed', 'Frumpy', 'Livery', 'Oversized',
            'Patched', 'Perfumed', 'Rancid', 'Torn', 'Undersized'],
  virtue: ['Ambitious', 'Cautious', 'Courageous', 'Courteous', 'Curious',
          'Disciplined', 'Focused', 'Generous', 'Gregarious', 'Honest',
          'Honorable', 'Humble', 'Idealistic', 'Just', 'Loyal',
          'Merciful', 'Righteous', 'Serene', 'Stoic', 'Tolerant'],
  vice: ['Aggressive', 'Arrogant', 'Bitter', 'Cowardly', 'Cruel',
        'Deceitful', 'Flippant', 'Gluttonous', 'Greedy', 'Irascible',
        'Lazy', 'Nervous', 'Prejudiced', 'Reckless', 'Rude',
        'Suspicious', 'Vain', 'Vengeful', 'Wasteful', 'Whiny'],
  speech: ['Blunt', 'Booming', 'Breathy', 'Cryptic', 'Drawling',
          'Droning', 'Flowery', 'Formal', 'Gravelly', 'Hoarse',
          'Mumbling', 'Precise', 'Quaint', 'Rambling', 'Rapid-fire',
          'Dialect', 'Slow', 'Squeaky', 'Stuttering', 'Whispery'],
  background: ['Alchemist', 'Beggar', 'Butcher', 'Burglar', 'Charlatan',
              'Cleric', 'Cook', 'Cultist', 'Gambler', 'Herbalist',
              'Magician', 'Mariner', 'Mercenary', 'Merchant', 'Outlaw',
              'Performer', 'Pickpocket', 'Smuggler', 'Student', 'Tracker'],
  misfortunes: ['Abandoned', 'Addicted', 'Blackmailed', 'Condemned', 'Cursed',
               'Defrauded', 'Demoted', 'Discredited', 'Disowned', 'Exiled',
               'Framed', 'Haunted', 'Kidnapped', 'Mutilated', 'Poor',
               'Pursued', 'Rejected', 'Replaced', 'Robbed', 'Suspected'],
  alignment: ['Law', 'Law', 'Law', 'Law', 'Law',
             'Neutrality', 'Neutrality', 'Neutrality', 'Neutrality', 'Neutrality',
             'Neutrality', 'Neutrality', 'Neutrality', 'Neutrality', 'Neutrality',
             'Chaos', 'Chaos', 'Chaos', 'Chaos', 'Chaos']
}

// Random number between 1-20
function rollBones() {
      return Math.floor(Math.random() * 20) + 1;
    }
    
    for (const key in traits) {
      const valuesArray = traits[key];
      const diceRoll = rollBones() - 1;
      const rolledTrait = valuesArray[diceRoll];
      const roll = `${key} - ${rolledTrait}`;
      const para = document.createElement("p");
      const innerText = document.createTextNode(roll);
      para.appendChild(innerText);
      document.getElementById("main").appendChild(para);
    }