import csv
import mysql.connector
import sys
import os
from dotenv import load_dotenv

load_dotenv()

# USAGE: python3 insert_db.py [name of CSV file] [name of table]

db = mysql.connector.connect(
    host= os.environ['SHAFTHOST'],
    user= os.environ['SHAFTUSER'],
    password= os.environ['SHAFTPASSWORD'],
    database= os.environ['SHAFTDATABASE']
)


cursor = db.cursor()

with open(sys.argv[1], "r") as f:
    reader = csv.reader(f)
    i = 0
    for line in reader:
      # so we don't insert column names into db as data
      if i != 0:
        query = "INSERT INTO " + sys.argv[2] + " VALUES ("
        vals = []
        for col in line:
          # handling Null cases
          if col == "":
            vals.append(None)
          else:
            vals.append("\'"+col+"\'")
        try:
          query += ','.join(vals) + ');'
          print(query)
          cursor.execute(query)
        except:
          # handling Null cases
          for val in vals:
            if val != None:
              query = query + val + ','
            else: 
              query = query + '%s' + ','
              
          query = query[:-1] + ');'
          print(query)
          cursor.execute(query, (None,))
      i += 1
      
print(i)
db.commit()
cursor.close()
db.close()
