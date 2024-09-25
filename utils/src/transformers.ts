type NestedObject = {
  [key: string]: unknown;
};

export const transformFormObject = (obj: NestedObject) => {
  // Check if the input is an object
  if (obj && typeof obj === 'object') {
    // Iterate over each key in the object
    for (const key in obj) {
      // If the value is an empty string, set it to null
      if (obj[key] === '') {
        obj[key] = null;
      }
      // If the value is an object, recursively transform it
      else if (typeof obj[key] === 'object') {
        transformFormObject(obj[key] as NestedObject);
      }
      // If the key is "value" and the value is "true", convert it to true
      if (key === 'value') {
        if (obj[key] === 'true') {
          obj[key] = true;
        } else if (obj[key] === 'false') {
          obj[key] = false;
        }
      }
    }
  }
  return obj;
};

// Example usage:
// const data = {
//     "harness": {
//         "activated": true,
//         "specialInstructions": "dfsfsdfs",
//         "comfortableHarness": {
//             "id": "cl4801pdvd4",
//             "label": "No",
//             "value": "false"
//         }
//     },
//     "feeding": {
//         "activated": true,
//         "specialInstructions": "sadadadasd",
//         "quantity": {
//             "id": "j405x5dn48k",
//             "label": "1/2 Cup",
//             "value": "1/2 cup",
//             "_index": 2
//         },
//         "frequency": {
//             "id": "6esq1q2jc1l",
//             "label": "4x Per Day",
//             "value": "4x per day",
//             "_index": 3
//         }
//     },
//     "overnight": {
//         "activated": false,
//         "specialInstructions": ""
//     },
//     "medical": {
//         "activated": true,
//         "specialInstructions": "assvsdgsdasdas"
//     },
//     "specialNeeds": {
//         "activated": true,
//         "specialInstructions": "xzczxvsdadasda"
//     },
//     "additionalNotes": {
//         "activated": false,
//         "specialInstructions": ""
//     },
//     "id": "26f4r2pjhn7",
//     "state": "active",
//     "details": {
//         "name": "Muffin",
//         "species": "cat",
//         "color": {
//             "id": "3yfjhqp0idu",
//             "label": "Calico",
//             "value": "calico",
//             "_index": 4
//         },
//         "breed": {
//             "id": "vohwanmurt",
//             "label": "Bengal",
//             "value": "bengal",
//             "_index": 6
//         },
//         "sex": {
//             "id": "axhqeqqr8lt",
//             "label": "Female",
//             "value": "female"
//         },
//         "age": {
//             "id": "l0joaxmw6ym",
//             "label": "Adult (2–8 Years)",
//             "value": "adult (2–8 years)"
//         },
//         "size": {
//             "id": "9sh09lezp4k",
//             "label": "Extra Large (16+ Lbs)",
//             "value": "extra large (16+ lbs)"
//         },
//         "status": {
//             "id": "6az7qovb505",
//             "label": "Yes",
//             "value": "true"
//         }
//     }
// };
// const transformedData = transformObject(data);
// console.log(JSON.stringify(transformedData, null, 2));
