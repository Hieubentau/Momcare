export * from './asyncStorage'
export * from './validations'
export * from './specialty'

export const getShortName = (name) => {
  // get the first letter of the first name and last name
  const nameArr = name.split(' ').filter((item) => item !== '')
  const firstName = nameArr[0]
  if (nameArr.length === 1) {
    return firstName[0]
  }
  const lastName = nameArr[nameArr.length - 1]
  return firstName[0] + lastName[0]
}
