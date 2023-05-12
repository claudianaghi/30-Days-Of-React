export const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  let index  = webTechs.indexOf('Sass')

  if (index != -1 ) {
    console.log('Sass is a css preprocess')
  } else {
    webTechs.push('Sass')
  }
  console.log(webTechs)