// a custom nightwatch assertion.
// the name of the method is the filename.
// can be used in tests like this:
//
//   browser.assert.elementCount(selector, count)
//
// for how to write custom assertions see
// http://nightwatchjs.org/guide#writing-custom-assertions
exports.assertion = function (selector, count) {
  Object.assign(this, {
    message: `Testing if element <${selector}> has count ${count}.`,
    expected: count,
    pass: (val) => val === this.expected,
    value: (res) => res.value,
    command: (cb) => {
      this.api.execute(
        (selector) => document.querySelectorAll(selector).length,
        [selector],
        (res) => cb(res),
      )
    }
  })
}
