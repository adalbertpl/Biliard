export default class Couples {
    static * from(list) {
        var length = list.length
        for (var i = 0; i < length; i++) {
            for (var j = i + 1; j < length; j++) {
                var first = list[i]
                var second = list[j]
                yield [first, second]
            }
        }
    }
}
