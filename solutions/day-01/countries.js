export const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

  let index = countries.indexOf('Ethiopia');

  if (index != -1){
    console.log('ETHIOPIA')
  } else {
    countries.push('ETHIOPIA')
  }