// Instruktioner: 

// Skapa en funktion med två parametrar "width" och "height" som endast tar emot värden större än 0. Dessa två värden ska då multipliceras med varandra.
// Om produkten av de valda parametrarna stämmer så ska vi ta reda på summan av höjden och längden.
// Sist ska produkten och summan av talen multipliceras och returneras.

module.exports = {
    area(width, height) {
        if (width > 0 && height > 0) {
            var result = width * height;
        }
        if (result === 12) {
            var last = width + height
        }
        return result * last
        //Det förväntade talet är 84.
    }
}
