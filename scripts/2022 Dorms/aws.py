import json
import requests
from datetime import datetime
import mysql.connector
import urllib.parse
import boto3

s3 = boto3.resource('s3')

dorm_photos = dict()

for bucket in s3.buckets.all():
    #print(bucket.name)
    if (bucket.name == "theshaft"):
        for obj in bucket.objects.all():
            file = obj.key.split("/")
            if (file[1] == "regulars"):
                if (len(file) == 5):
                    print(obj.key)
                    dorm = file[3]
                    print(dorm)
                    if not dorm in dorm_photos:
                        dorm_photos[dorm] = list()
                    dorm_photos[dorm].append("https://theshaft.s3.amazonaws.com/" + obj.key.replace(" ", "+"))

print(dorm_photos)
with open("2022_dorm_photos_new.json", "w") as outfile:
        json.dump(dorm_photos, outfile)

""" for bucket in s3.buckets.all():
    #print(bucket.name)
    if (bucket.name == "theshaft"):
        for obj in bucket.objects.all():
            file = obj.key.split("/")
            if (file[1] == "regulars"):
                if (len(file) == 4):
                    print(obj.key)
                    dorm = file[2]
                    print(dorm)
                    if not dorm in dorm_photos:
                        dorm_photos[dorm] = list()
                    dorm_photos[dorm].append("https://theshaft.s3.amazonaws.com/" + obj.key.replace(" ", "+"))

print(dorm_photos)
#with open("2022_dorm_photos_old.json", "w") as outfile:
        #json.dump(dorm_photos, outfile) """