const { log } = require("console")

function isValid(stale, latest, otjson) {
  let ot = JSON.parse(otjson)
  let cursorPosition = 0

  for(let i = 0; i < ot.length; i++) {
    if(ot[i].op === "skip") {
      cursorPosition += ot[i].count
      if(cursorPosition >= stale.length)
        return false
    }
    else if(ot[i].op === "delete") {
      if(ot[i].count + 1 >= stale.length || cursorPosition + ot[i].count >= stale.length)
        return false

      if(cursorPosition === 0) 
        stale = stale.slice(ot[i].count)
      else 
        stale = stale.slice(0, cursorPosition) + stale.slice(cursorPosition + ot[i].count)
    }
    else {
      if(cursorPosition === 0)
        stale = ot[i].chars + stale.slice(0)
      else 
        stale = stale.slice(0, cursorPosition - 1) + ot[i].chars + stale.slice(cursorPosition)

      cursorPosition += ot[i].chars.length
    }
  }

  if(stale === latest) {
    return true
  }
  return false
}

log(isValid(
  'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
  'Repl.it uses operational transformations.',
  '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
));

log(isValid(
  'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
  'Repl.it uses operational transformations.',
  '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
));

log(isValid(
  'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
  'Repl.it uses operational transformations.',
  '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
));

log(isValid(
  'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
  'We use operational transformations to keep everyone in a multiplayer repl in sync.',
  '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
))

log(isValid(
  'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
  'We can use operational transformations to keep everyone in a multiplayer repl in sync.',
  '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
))

log(isValid(
  'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
  'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
  '[]'
));
