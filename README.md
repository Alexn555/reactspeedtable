# React Speed Table component using redux

This a basic react table component

##  How to install

Versioning
v 1.1 Made super simplified version, removed semantic, bootstrap
 - Removed redux pattern, now only client that is getting infomation
- One thing, accedentally ran command webpack eject that is why so many scripts

```bash
# Install dependencies
cd reactspeedtable
npm install```

Main plot
 Uses classical redux pattern, with store and reducers.
 Uses axios for backend http client to get backend information.

## How to run

### The backend server
Backend data is coming from http://dummy.restapiexample.com/api/v1/employees

```bash
npm start
This will run the client at localhost:3000
 Check the page in desired Browser

 Best viewed in Firefox, Chrome

 # Table libraries
  Uses react-bootstrap-table-next as base and filter react-bootstrap-table2-filter
 CSS  Semantic UI for headers, messages like Loading, Error no data
      Bootstrap 4 for table component and override component

  Enjoy the app and do call if any errors occur.



