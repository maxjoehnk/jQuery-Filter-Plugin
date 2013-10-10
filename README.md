# jQuery Filter Plugin

The jQuery Filter Plugin allows you to filter any content on your webpage. 

## Getting Started
###Please use the [src file](https://raw.github.com/e-freak/jQuery-Filter-Plugin/master/src/jquery.filter.js) for now, the dist files aren't working as expected yet

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/e-freak/jQuery-Filter-Plugin/master/dist/jquery.filter.min.js
[max]: https://raw.github.com/e-freak/jQuery-Filter-Plugin/master/dist/jquery.filter.js

## Examples
```html
<input type="text" data-filter-container="#example-filterable" data-filter="name" class="filter">
<select data-filter-container="#example-filterable" data-filter="state" class="filter">
	<option data-filter-ignore>-- Release State --</option> <!-- Ignore this option -->
	<option>Beta</option>
	<option data-filter-value="RC">Release Candidate</option> <!-- Filter with "RC" instead of "Release Candidate"-->
</select>
<button class=".reset-filter">Reset Filter</button>
<ul id="#example-filterable">
  <li class="filterable" data-name="Test" data-state="Beta">Test</li>
  <li class="filterable" data-name="Project" data-state="RC">Project</li>
  <li class="filterable" data-name="Awesome Project" data-state="RC">Awesome Project</li>
</ul>
```

## License
JQuery Filter Plugin is freely distributable under the terms of an MIT-style license.

Copyright notice and permission notice shall be included in all copies or substantial portions of the Software.

## Authors
Max J&ouml;hnk / [@e-freak](https://twitter.com/efreak1996)
