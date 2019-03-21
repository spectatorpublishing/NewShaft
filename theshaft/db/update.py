# Super useful resource https://pynative.com/python-mysql-update-data/#Python_MySQL_update_Multiple_Rows_data_in_a_single_query

# pip install gspread
import gspread
from oauth2client.service_account import ServiceAccountCredentials

# pip install mysql-connector-python
import mysql.connector
from mysql.connector import Error
from mysql.connector import errorcode


try:
  # Authentication Steps
  scope = ['https://spreadsheets.google.com/feeds',
          'https://www.googleapis.com/auth/drive']

  credentials = ServiceAccountCredentials.from_json_keyfile_name(
      'ShaftWhiteboard-2e790edd0bf3.json', scope)

  gc = gspread.authorize(credentials)

  wks = gc.open("Whiteboard-Test-Spreadsheet").sheet1

  # Generates list of lists of all rows in google spreadsheet

  sheet_list = wks.get_all_values()[1:]

  # MySQL setup

  config = {
    'user': 'USERNAME',
    'password': 'PASSWORD',
    'host': '192.34.62.10',
    'database': 'dorms',
    'raise_on_warnings': True
  }

  cnx = mysql.connector.connect(**config)
  cursor = cnx.cursor()

  # Stores all rows that will be updated in thr query
  records_to_update = []
  update_query = """UPDATE whiteboard_test SET NEW_PRIORITY = %s, NEW_NUM = %s WHERE DORM = %s AND ROOM = %s """


  # # Dictionary that keep track of previous values of database (so we don't update every row)
  # # {"47 Claremont4" :  ["20", "1000"]} 
  
  # # It appears that mysql deals with updates of the same values, which helps us avoid creating 
  # # our own cache logic. However, the append operation on the list may become very large. 
  # # Finding a way to update only at specific timestamps would be more efficient.
 
  # lottery_dict = {}


  # for s_row in sheet_list:
  #   key = s_row[0] + s_row[1]
  #   if(key not in lottery_dict):
  #     records_to_update.append((s_row[2], s_row[3], s_row[0], s_row[1]))
  #   elif(lottery_dict[key][0] == s_row[2] or lottery_dict[key][1] == s_row[3]):
  #     records_to_update.append((s_row[2], s_row[3], s_row[0], s_row[1]))

  for s_row in sheet_list:
    records_to_update.append((s_row[2], s_row[3], s_row[0], s_row[1]))

  
  cursor.executemany(update_query, records_to_update)
  cnx.commit()
  # print(records_to_update)
  print(cursor.rowcount, "Records Updated successfully into computers table. ")
  print("The Updated count is: ", cursor.rowcount)


except mysql.connector.Error as error :
    print("Failed to update records to database: {}".format(error))
finally:
    # closing database connection.
    if(cnx.is_connected()):
        cnx.close()
        print("connection is closed")



