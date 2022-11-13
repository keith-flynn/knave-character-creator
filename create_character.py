import pandas as pd
import random

# Dice roller
def roll():
    # There are 11 attribute columns
    for i in range(11):
        roll = random.randint(1, 20)
        roll_result.append(roll)

traits = pd.read_csv('assets/knave-traits.csv')
traits = traits.set_index('ROLL')
print(traits)

traits_list = ['PHYSIQUE', 'FACE', 'SKIN', 'HAIR', 
               'CLOTHING', 'VIRTUE', 'VICE', 'SPEECH', 
               'BACKGROUND', 'MISFORTUNES', 'ALIGNMENT'
               ]

roll_result = []

roll()
print(roll_result)

for (trait, ele) in zip(traits_list, roll_result):
    print(trait, ':', traits.at[ele, trait])