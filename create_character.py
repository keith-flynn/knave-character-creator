import pandas as pd
import random

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
        for die in range(Knave.number_of_dice):
            roll = random.randint(1, 20)
            Knave.roll_result.append(roll)
        print(Knave.roll_result)

    # Generate a new character
    def fresh_meat():
        for (trait, ele) in zip(list(traits), Knave.roll_result):
            print(trait + ':', traits.at[ele, trait])

    @classmethod
    # Change number of dice
    def set_number_of_dice(cls, number):
        cls.number_of_dice = number

# Import traits and set the index to dice rolls
traits = pd.read_csv('assets/knave-traits.csv')
traits = traits.set_index('ROLL')
print(traits)

Knave.roll_em()
Knave.fresh_meat()
