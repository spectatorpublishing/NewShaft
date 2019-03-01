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

with open("../hardcoded_info/thumbnails.csv", "r") as f:
    reader = csv.reader(f)
    for line in reader:
        query = "UPDATE dorm_static_info SET THUMBNAIL_IMAGE='{}' WHERE DORM='{}'".format(
            line[1],
            line[0]
        )
        cursor.execute(query)

db.commit()
cursor.close()
db.close()