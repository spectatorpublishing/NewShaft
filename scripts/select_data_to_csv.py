import mysql.connector
import csv
import os
from dotenv import load_dotenv

load_dotenv()

# Script to scrape table from DB into a csv 

db = mysql.connector.connect(
    host= os.environ['SHAFTHOST'],
    user= os.environ['SHAFTUSER'],
    password= os.environ['SHAFTPASSWORD'],
    database= os.environ['SHAFTDATABASE']
)

mycursor = db.cursor()

table = "dorm_static_info"
mycursor.execute("SELECT * FROM " + table)
db_dorm = mycursor.fetchall()

mycursor.execute("DESCRIBE dev." + table)
db_dorm_columns = mycursor.fetchall()

print(db_dorm)
print(db_dorm_columns)

c = csv.writer(open(table + '_dump.csv', 'w'))

columns_as_row = []

for dorm_col in db_dorm_columns:
    columns_as_row.append(dorm_col[0])
print(columns_as_row)
c.writerow(columns_as_row)

for dorm in db_dorm:
    c.writerow(dorm)