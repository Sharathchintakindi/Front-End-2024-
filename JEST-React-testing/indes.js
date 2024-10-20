const getFullName = (fname,lname)=>{
  return `${fname} ${lname}`
}

const actualFullName = getFullName('Sharath', 'chintakindi')
const expectedFullName = "Sharathchintakindi"

if (actualFullName!==expectedFullName){
  throw new error (`${actualFullName} is not equal to ${expectedFullName}`)
}