#!/bin/bash

# USAGE
# run ./delete_script.sh <table_name> <file_name>
# file should be a row of where conditions, i.e.
	# DORM="110", to delete 110 entry
	# LONGITUDE IS NULL, to delete entries w/ null longitude
	# LIMIT TO ONE CONDITION AT A TIME. Several seems unnecessary for our purposes
	# MUST ADD A newline terminating the file

table=$1

# make a big string of sql_query insert statements
sql_query=""
FILE=$2

while read LINE; do
	sql_query="${sql_query} DELETE FROM ${table} WHERE ${LINE};"
done < $FILE

echo ${sql_query}

# actually insert to sql!
mysql -u spectech -p -h 85.10.205.173 --database="theshaft" --execute "${sql_query}"
