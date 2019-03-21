import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']

credentials = ServiceAccountCredentials.from_json_keyfile_name('ShaftWhiteboard-2e790edd0bf3.json', scope)

gc = gspread.authorize(credentials)

wks = gc.open("Whiteboard-Test-Spreadsheet").sheet1

print(wks.acell('A2').value)




