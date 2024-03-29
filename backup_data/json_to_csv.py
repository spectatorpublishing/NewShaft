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

	keys = ['DORM','ADDRESS','DESCRIPTION','COLLEGE','THUMBNAIL_IMAGE','PROS','CONS','SUITE','WALKTHROUGH','SINGLE_','DOUBLE_','TRIPLE_','LATITUDE','LONGITUDE','LOTTERY_NUMS','CLASS_MAKEUP', 'RELATED']
	sets_keys = ['CLASS_MAKEUP', 'RELATED']
	new_json_arr = []
	for j in json_arr:
		to_add = True

		# handle bad vals
		j["LOTTERY_NUMS"] = "placeholder"
		j["SUITE"] = ('')
		j["COLLEGE"] = '%s'%(j["COLLEGE"].upper())
		j["RELATED"] = ""

		# these should have underscores
		for ky in ["SINGLE","DOUBLE","TRIPLE"]:
			j["%s_"%(ky)] = j.pop(ky,None)

		# format set properly (follow for suite once thats done)

		if(len(j["CLASS_MAKEUP"])==1):
			j["CLASS_MAKEUP"] = "'" + j["CLASS_MAKEUP"][0] + "'"
		else:
			j["CLASS_MAKEUP"] = ("%s") % (",".join(j["CLASS_MAKEUP"]))
		if(len(j["PROS"]) == 1):
			j["PROS"] = "'" + j["PROS"][0] + "'"
		else:
			j["PROS"] = ("%s") % (",".join(j["PROS"]))
		if(len(j["CONS"]) == 1):
			j["CONS"] = "'" + j["CONS"][0] + "'"
		else:
			j["CONS"] = ("%s") % (",".join(j["CONS"]))

		# unicode
		for ky in keys:
			if ky not in j:
				to_add = False
				break
			if isinstance(j[ky], basestring):
				if j[ky]=="" or (j[ky][0] != "'" and ky not in sets_keys):
					j[ky] = "'%s'" % (j[ky].encode("utf8"))
	
		if to_add:
			new_json_arr.append(j)

	# json to csv
	with open('json_csvd.csv','wb') as f:
		writer = DictWriter(f, fieldnames=keys)
		writer.writeheader()
		for row in new_json_arr:
			writer.writerow(row)

def insert_to_sql():
	JSON_to_CSV('otherJSONS/_alldata.json')
	os.system("./insert_script.sh dorm_static_info json_csvd.csv")

insert_to_sql()

