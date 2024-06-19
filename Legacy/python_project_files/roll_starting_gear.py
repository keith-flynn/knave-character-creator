import pandas as pd
import random

class Gear:

    # Import gear and set the index to dice rolls
    gear_csv = pd.read_csv('assets/knave-gear.csv')
    gear = gear_csv.set_index('ROLL')

    number_of_dice = 6
    gear_result = []

    # Dice roller
    def roll_starting_gear():
        # There are 6 starting gear columns
        Gear.gear_result.clear()
        for die in range(Gear.number_of_dice):
            roll = random.randint(1, 20)
            Gear.gear_result.append(roll)
        print(Gear.gear_result)



    def generate_starting_gear():
        # Generate starting gear
        for (item, ele) in zip(list(Gear.gear), Gear.gear_result):
            print(item + ':', Gear.gear.at[ele, item])
