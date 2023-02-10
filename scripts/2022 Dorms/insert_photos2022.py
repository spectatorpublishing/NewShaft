import json
import requests
from datetime import datetime
import mysql.connector
import urllib.parse
import os
from dotenv import load_dotenv

load_dotenv()

""" photographers = {
    "47 Claremont": "Judy Goldstein",
    "600 W 116th St.": "Jessica Samudio",
    "601 W 110th St.": "Maria Shaughnessy",
    "616 W 116th St.": "Annie Son",
    "620 W 116th St.": "Jessica Samudio",
    "Broadway Hall": "Shannon Binns",
    "Carlton Arms": "Kate Del la Pietra",
    "Carman Hall": "Annie Son",
    "Cathedral Gardens": "Jessica Samudio",
    "East Campus": "Princeton Huang",
    "Harmony Hall": "Beatrice Shlansky",
    "Hartley Hall": "Kat St. Martin",
    "Hogan Hall": "Millie Felder",
    "McBain Hall": "Joao Santos",
    "Plimpton Hall": "Princeton Huang",
    "Schapiro Hall": "Princeton Huang",
    "Symposium": "Maria Shaughnessy",
    "Wallach Hall": "Yash Mangalick",
    "Watt Hall": "Ryan Newberger",
    "Wien Hall": "Millie Felder",
    "Woodbridge Hall": "Millie Felder"
}

db = mysql.connector.connect(
    host= os.environ['SHAFTHOST'],
    user= os.environ['SHAFTUSER'],
    password= os.environ['SHAFTPASSWORD'],
    database= os.environ['SHAFTDATABASE']
)

mycursor = db.cursor()

mycursor.execute("SELECT DORM FROM dorm_static_info")
db_dorm = mycursor.fetchall()

print(db_dorm)

db_dorm_names = list()

for dorm in db_dorm:
    #print(dorm[0])
    db_dorm_names.append(dorm[0])

f = open('2022_dorm_photos_new.json')
new_images_json = json.load(f)

f = open('2022_dorm_photos_old.json')
old_images_json = json.load(f)

print("------ not in database with new photos ------")
for dorm in new_images_json:
    if not dorm in db_dorm_names:
        print(dorm)

need_old_photos = []
print("------ no new photos -------")
for dorm in db_dorm_names:
    if not dorm in new_images_json:
        need_old_photos.append(dorm)
        print(dorm)

dorm_photos = {}
# dorms with new photos
for dorm in new_images_json:
    for image in new_images_json[dorm]:
        if not dorm in dorm_photos:
            dorm_photos[dorm] = [{
                "imageLink": image,
                "photographer": photographers[dorm],
                "isMain": False
            }]
        else:
            dorm_photos[dorm].append(
                {
                    "imageLink": image,
                    "photographer": photographers[dorm],
                    "isMain": False
                }
            )

# dorms that need to use old photos
for dorm in need_old_photos:
    for image in old_images_json[dorm]:
        if not dorm in dorm_photos:
            dorm_photos[dorm] = [{
                "imageLink": image,
                "photographer": "unknown",
                "isMain": False
            }]
        else:
            dorm_photos[dorm].append(
                {
                    "imageLink": image,
                    "photographer": "unknown",
                    "isMain": False
                }
            )

with open("2022_dorm_photos.json", "w") as outfile:
        json.dump(dorm_photos, outfile) """

db = mysql.connector.connect(
    host= os.environ['SHAFTHOST'],
    user= os.environ['SHAFTUSER'],
    password= os.environ['SHAFTPASSWORD'],
    database= os.environ['SHAFTDATABASE']
)

mycursor = db.cursor()

mycursor.execute("SELECT DORM FROM dorm_static_info")
db_dorm = mycursor.fetchall()

print(db_dorm)

f = open('2022_dorm_photos.json')
dorm_images = json.load(f)

for dorm in dorm_images:
    for image in dorm_images[dorm]:
        isMain = 0
        if (image["isMain"] is True):
            isMain = 1
        val = (dorm, image["photographer"], image["imageLink"], isMain)
        sql = "INSERT INTO dorm_photos (DORM, PHOTOGRAPHER, IMAGE_LINK, IS_MAIN) VALUES (%s, %s, %s, %s)"
        print(val)
        print(sql)
        #mycursor.execute(sql, val)

#db.commit()