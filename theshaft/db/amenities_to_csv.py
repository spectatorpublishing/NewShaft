import json
from csv import DictWriter
import os

# writes provided json_file to CSVs for use w/ insert_script.sh
# outputted csv named json_csvd.csv
#
def JSON_to_CSV(json_file):
	json_arr = []
	with open(json_file,'r') as f:
		json_arr = json.load(f)

	keys = ['DORM','PRIVATE BATHROOM','LAUNDRY','CARPET','FLOOR KITCHEN','PRIVATE KITCHEN','LOUNGE','FITNESS ROOM','BIKE STORAGE','COMPUTER LAB','AC','PRINT STATION','MUSIC PRACTICE ROOM']
	new_json_arr = []
	for j in json_arr:
		to_add = True
		# unicode
		for ky in keys:
			if ky not in j:
				to_add = False
				break
			if isinstance(j[ky], basestring):
				if j[ky]=="" or (j[ky][0] != "'"):
					print j[ky]
					j[ky] = "'%s'"%(j[ky].encode("utf8"))
					print j[ky]
					print " "
	
		if to_add:
			new_json_arr.append(j)

	# json to csv
	with open('json_csvd.csv','wb') as f:
		writer = DictWriter(f, fieldnames=keys)
		writer.writeheader()
		for row in new_json_arr:
			writer.writerow(row)

def insert_to_sql():
	JSON_to_CSV('DormJSONS/_amenities.json')
	os.system("./insert_script.sh amenities json_csvd.csv")

insert_to_sql()

