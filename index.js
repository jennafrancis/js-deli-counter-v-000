var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  } else {
    var line = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i === 0) {
        line += `1. ${katzDeliLine[i]}`
      } else {
        line += `, ${i + 1}. ${katzDeliLine[i]}`
      }
    }
    return line
  }
}
