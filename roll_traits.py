import pandas as pd
import random

class Traits():

    # Import traits and set the index to dice rolls
    traits_csv = pd.read_csv('assets/knave-traits.csv')
    traits = traits_csv.set_index('ROLL')
    
    number_of_dice = 11
    traits_result = []

    # Dice roller
    def roll_traits():
        # There are 11 attribute columns
        Traits.traits_result.clear()
        for die in range(Traits.number_of_dice):
            roll = random.randint(1, 20)
            Traits.traits_result.append(roll)
        print(Traits.traits_result)

    # Generate a new character
    def generate_traits():
        for (trait, ele) in zip(list(Traits.traits), Traits.traits_result):
            print(trait + ':', Traits.traits.at[ele, trait])