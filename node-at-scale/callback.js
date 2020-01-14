function fastFunction (done) {
  setTimeout(function () {
    done()
  }, 100)
}

function slowFunction (done) {
  setTimeout(function () {
    done()
  }, 300)
}