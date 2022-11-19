import pandas as pd
import random

import name_generator as ng

class Knave:

    number_of_dice = 11
    roll_result = []

    # Place holder for later
    def __init__(self, first, last):
        self.first = first
        self.last = last

    # Dice roller
    def roll_em():
        # There are 11 attribute columns
        Knave.roll_result.clear()
        for die in range(Knave.number_of_dice):
            roll = random.randint(1, 20)
            Knave.roll_result.append(roll)
        print(Knave.roll_result)

    # Generate a new character
    def fresh_meat():
        for (trait, ele) in zip(list(traits), Knave.roll_result):
            print(trait + ':', traits.at[ele, trait])

    # Roll for starting gear
    def starting_gear():
        Knave.roll_result.clear()
        for die in range(6):
            roll = random.randint(1, 20)
            Knave.roll_result.append(roll)
        print(Knave.roll_result)

        for (item, ele) in zip(list(gear), Knave.roll_result):
            print(item + ':', gear.at[ele, item])

    @classmethod
    # Change number of dice
    def set_number_of_dice(cls, number):
        cls.number_of_dice = number

# Import traits and set the index to dice rolls
traits = pd.read_csv('assets/knave-traits.csv')
traits = traits.set_index('ROLL')
# Import gear and set the index to dice rolls
gear = pd.read_csv('assets/knave-gear.csv')
gear = gear.set_index('ROLL')

Knave.roll_em()
print('\nNAME:', ng.fantasy_name(), '\n')
Knave.fresh_meat()
Knave.starting_gear()
