const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let win = array.find(superbowl => superbowl['result'] === 'W')
  if (win !== undefined){
    return win['year']
  }
}