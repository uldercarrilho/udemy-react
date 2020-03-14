// Section 2: Refresing Next Generation JavaScript
// 15. Exports & Imports (Modules)

// default export - you choose de name
import person from './samples/person.js'
import prs from './samples/person.js'

// named export - name is defined by export
import { baseData } from './samples/utility.js'
import { clean } from './samples/utility.js'
import { clean as cleaner } from './samples/utility.js'
import * as Utils from './samples/utility.js'

// how to use imported modules
console.log(person.name);
console.log(prs.name);
console.log(baseData);
console.log(clean());
console.log(cleaner());
console.log(Utils.baseData);