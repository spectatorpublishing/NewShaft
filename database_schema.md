## Documentation

### Database Schema (theshaft)
#### dorm_static_info
Field | Type | Constraints
 --- | --- | ---
DORM | VARCHAR(40) | NOT NULL
ADDRESS | VARCHAR(60) | NOT NULL
DESCRIPTION | TEXT | NOT NULL
COLLEGE | ENUM("BARNARD", "COLUMBIA") | NOT NULL
THUMBNAIL_IMAGE | VARCHAR(255) | NOT NULL
SUITE | SET('3','4','5','6','7','8') | NOT NULL
WALKTHROUGH | BOOLEAN | NOT NULL
SINGLE_ | BOOLEAN | NOT NULL
DOUBLE_ | BOOLEAN | NOT NULL
TRIPLE_ | BOOLEAN | NOT NULL
SUITE_  | BOOLEAN | NOT NULL
PROS	| TEXT	  | NOT NULL
CONS	| TEXT	  | NOT NULL
LATITUDE  | FLOAT(10,6) |
LONGITUDE | FLOAT(10,6)	|
LOTTERY_NUMS	| VARCHAR(20) |
CLASS_MAKEUP	| SET("first-years","sophomores","juniors","seniors") |

#### review
Field | Type | Constraints
 --- | --- | ---
DORM | VARCHAR(40) | NOT NULL
ADDRESS | VARCHAR(60) | NOT NULL
NUM_STARS | INT(11) | NOT NULL
REVIEW_TXT | text | NOT NULL
ROOM_NUM | CHAR(50) | NOT NULL
YEAR | SET("first-years","sophomores","juniors","seniors") | NOT NULL
THUMBS_UP | INT(11) | DEFAULT NULL
THUMBS_DOWN | INT(11) | DEFAULT NULL
id | INT(11) | NOT NULL AUTO_INCREMENT
TIME_STAMP | TIMESTAMP | NOT NULL DEFAULT CURRENT_TIMESTAMP

### Endpoints
Type | url | params | returns
 --- | --- | --- | ---
POST | /api/getDormInfo | ``` {"table": <table>, <key>:<value>, ...} ``` | ```"SELECT * FROM <table> WHERE <key>=<value> AND ..."```
POST | /api/deleteDormInfo _1_ | ``` {"table": <table>, <key>:<value>, ...} ``` | ```{"Status": "Success"/"Failure"}```
POST | /api/filterDorm | ``` {"college": <college>, "single": <value>, ...} ``` | ```[{ "dorm": "110", "adress": "601 W 110th St",...},...] ```
POST | /api/postReview | ```{"DORM": <DORM>, "ADDRESS": <ADDRESS>, ...}```| NULL
}

_1_: will NOT allow deletion of all entries in <table>. You must specify at least one key to query on.

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="af-magic"
### Folder Structure

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.
