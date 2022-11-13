import pandas as pd
import random

# Dice roller
def roll():
    # There are 11 attribute columns
    for die in range(11):
        roll = random.randint(1, 20)
        roll_result.append(roll)

# Import traits and set the index to dice rolls
traits = pd.read_csv('assets/knave-traits.csv')
traits = traits.set_index('ROLL')
print(traits)

roll_result = []

roll()
print(roll_result)

for (trait, ele) in zip(list(traits), roll_result):
    print(trait, ':', traits.at[ele, trait])