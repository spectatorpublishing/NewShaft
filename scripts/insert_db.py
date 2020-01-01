import csv
import mysql.connector
import sys

# USAGE: python3 insert_db.py [name of CSV file] [name of table]

db = mysql.connector.connect(
  host="192.34.62.10",
  user="USERNAME",
  passwd="PASSWORD",
  database="dorms"
)
cursor = db.cursor()

with open(sys.argv[1], "r") as f:
    reader = csv.reader(f)
    
    for line in reader:
      query = "INSERT INTO " + sys.argv[2] + " VALUES ("
      vals = []
      for col in line:
        vals.append("\'"+col+"\'")

      query += ','.join(vals) + ');'
      print(query)
      #cursor.execute(query)
      

db.commit()
cursor.close()
db.close()
