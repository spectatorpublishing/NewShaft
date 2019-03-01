import csv
import mysql.connector
import os

db = mysql.connector.connect(
  host="157.230.66.55",
  user="root",
  passwd=os.environ['MYSQL'],
  database="dorms"
)
cursor = db.cursor()

with open("related_articles.csv", "r") as f:
    reader = csv.reader(f)
    for line in reader:
        query = "INSERT INTO related_articles VALUES ('{}','{}','{}')".format(
            line[0],
            line[1],
            line[2]
        )
        cursor.execute(query)

db.commit()
cursor.close()
db.close()