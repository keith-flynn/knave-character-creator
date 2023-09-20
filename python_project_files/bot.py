import os
import discord
import pandas as pd
import random



intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)

traits = pd.read_csv('knave-traits.csv')
traits = traits.set_index('ROLL')

traits_list = ['PHYSIQUE', 'FACE', 'SKIN', 'HAIR', 
               'CLOTHING', 'VIRTUE', 'VICE', 'SPEECH', 
               'BACKGROUND', 'MISFORTUNES', 'ALIGNMENT'
               ]

roll_result = []

def roll():
    # There are 11 attribute columns
    for i in range(11):
        roll = random.randint(1, 20)
        roll_result.append(roll)

      

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$ping'):
        await message.channel.send('pong.')
      
    if message.content.startswith('$meat'):
      roll()
      await message.channel.send(roll_result)

      for (trait, ele) in zip(traits_list, roll_result):
        await message.channel.send(trait, ':', traits.at[ele, trait])





my_secret = os.environ['TOKEN']

client.run(my_secret)