import sqlite3

# https://youtu.be/byHcYRpMgI4

con = sqlite3.connect("knave.db")
cur = con.cursor()

# cur.execute("""CREATE TABLE traits (
#             physique text,
#             face text,
#             skin text,
#             hair text,
#             clothing text,
#             virtue text,
#             vice text,
#             speech text,
#             background text,
#             misfortunes text,
#             alignment text
# )""")

roll = 1
column = 'PHYSIQUE'

cur.execute(f'SELECT t.{column} FROM traits t WHERE t.ROLL = {roll};')
data = cur.fetchone()
print(data)
con.commit()

con.close()