# The Shaft - 2018/19
:weary:

[![Build Status](https://travis-ci.com/spectatorpublishing/NewShaft.svg?token=XxNtw1WGDsHqpaWtGdoD&branch=develop)](https://travis-ci.com/spectatorpublishing/NewShaft)

## Developer Setup Frontend

Make sure you are in theshaft directory:

`cd theshaft`

Before running the application make sure that that dependencies are up to date:

`yarn install`

To run the application make sure to cd into the shaft directory and run

`yarn dev`

To run storybook run the following

`yarn storybook`

To backup the current MySQL database run the following

`yarn dump-db`

## Developer Setup Backend

Our backend uses a mysql database:

host: 192.34.62.10
username: USERNAME
password: PASSWORD
database: dev

You can use mysql from the command line, but we would suggest you use:
https://www.mysql.com/products/workbench/

!!! For the time being there isn't a production database, so any changes made to the dev server will be seen on the main website.





