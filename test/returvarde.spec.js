var assert = require('assert'),
    { area } = require('../returvarde');


it('Width and height produce the right value.', () => {
    //Rätt
    assert.strictEqual(area(3, 4), 84)
})
// it('Parameter missing.', () => {
//     //Ger fel
//     assert.strictEqual(area(3), 84)
// })
// it('Width and height DO NOT produce the right value.', () => {
//     //Ger fel
//     assert.strictEqual(area(3, 5), 84)
// })

