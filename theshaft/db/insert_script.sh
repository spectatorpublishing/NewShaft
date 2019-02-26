#!/bin/bash

# USAGE
# run ./insert_script.sh <table_name> <file_name>

table=$1

# make a big string of sql_query insert statements
sql_query=""
FILE=$2
first_line=0
cols=""
while read LINE; do
    # get column names
    if [ $first_line -eq 0 ]
    	then cols=${LINE}
    fi 
    
    if [ $first_line -ne 0 ]
       # then echo "INSERT INTO ${table} (${cols}) VALUES (${LINE});"
       then sql_query="${sql_query} INSERT INTO ${table} (${cols}) VALUES (${LINE});"
    fi
    first_line=1 
done < $FILE

# actually insert to sql!
mysql -u root -p -h 157.230.66.55 --database="dorms" --execute "${sql_query}"
