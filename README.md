# mithril-date-range-picker
Mithril date range picker

[Examples](https://dontwork.github.io/mithril-date-range-picker/dist/)

A simple lightweight date range picker. It's only depencency is Mithril. It doesn't include any date libraries like moment or date-fns but is simple to integrate with projects using those libraries

Options

| Name | Description| Default |
|---|---|---|
| initialStart | Set the start date value. JS Date. | `undefined` |
| inititalEnd | Set the end date value. JS Date. | `undefined` |
| langCode | Set the locale for displaying month and day names. String compatable with `toLocaleDateString`. | `navigator.language`|
| open | Sets the datepicker to be open. Boolean. | `false`|
| disabled | This will make the inputs look disabled and prevent the picker from displaying. Boolean. | `false` |
| startInputLabel | Sets the label for the start input. String. | `''` |
| endInputLabel | Sets the label for the end input. String. | `''` |
| startInputPlaceholder | Sets the placeholder for the start input. String. | `'Start Date'` |
| endInputPlaceholder | Sets the placeholder for the end input. String. | `'End Date'` |
| minRange | Sets the minimum allowed range length in days. Number. `0` allows unlimited range lengths | `0` |
| maxRange | Sets the maximum allowed range length in days. Number. `0` allows unlimited range lengths | `0` |
| closeOnDatesSelected | Sets whether the picker will close once two dates have been picked. Boolean. | `false` |
| singleMonth | Sets whether one month, instead of two, is displayed. Boolean. Single month view is default on smaller displays | `false` |
| weekStart | Changes start day of the week. Number. It is 0 indexed, 0 is Sunday. | `0` |
| initialMonth | Sets the month to be displayed. JS Date. | `undefined` |
| onDateSet | A function providing the developer with the date values when both dates are set. Function. | `({start, end}) => { }` |
| disableDate | This will run for each date within the view and should return a boolean for whether that date should be disabled. Function that returns a boolean. `date` is any given date visible in the view. `start` is the selected start date of the range. `end` is the selected end date of the range. These values are provided to allow developers to do more complex date validations. Check the examples for such usage. | `(date, start, end) => false` |
| parseDateForInput | This will run when any date is picked to format the strings that get displayed within the inputs. Function that receives a date and should return a string | `d => d.toLocaleDateString()` |
| onInput | This will run oninput for both input fields. This function receives a string (from which ever input is being edited) and should return a date to be set as the corresponding date within the picker | `undefined` |

