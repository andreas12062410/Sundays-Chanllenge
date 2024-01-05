# Angular Code Challengs - Sundays
1. Add a new route for /pages/sundays and ensure that all pages redirect to that page by default
2. Create a new component under the "sundays" directory that does the following
    1. Displays a material date range picker and apply the following validaation rules
        1. Dates must be at least two years apart 
        2. The start must be in the future and cannot be a sunday
    2. Watch for changes to the picking of dates and when two valid dates are selected then display the number of Sundays between the two dates (including the days selected) excluding any sunday that falls on or after the 28th of the month.  You can just output this to the screen below the date picker

Notes:
1. You can choose whichever date adapater you like
2. Don't worry about styling, just use the default material one provided
3. Extra marks if you use a Reactive Form and watch for the value changes using a RxJS stream.

## Timeframe

This should take between 30 - 60  minutes to complete

## When finished

Create your own public repository and upload to there and provide the link
