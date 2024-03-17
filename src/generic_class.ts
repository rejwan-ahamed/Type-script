class KeyValuePair<K, V>{
    constructor(public key: K, public value: V) { }
}

let generic_number_Pair = new KeyValuePair('1', 'a');
let generic_string_Pair = new KeyValuePair(1, 2);