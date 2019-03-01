import csv
import mysql.connector
import os

db = mysql.connector.connect(
  host="157.230.66.55",
  user="root",
  passwd='spec1877',
  database="dorms"
)
cursor = db.cursor()

with open("../hardcoded_info/dormpagephotos.csv", "r") as f:
    reader = csv.reader(f)
    for line in reader:
        query = "INSERT INTO dorm_explore_photos VALUES ('{}','{}','{}','{}','{}','{}','{}')".format(
            line[0],
            line[1],
            line[2],
            line[3],
            line[4],
            line[5],
            line[6],
        )
        cursor.execute(query)

db.commit()
cursor.close()
db.close()