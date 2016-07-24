function HashTable() {
    this.table = new Array(137)
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.buildChains = buildChains;
    //this.get = get;
}

function simpleHash(data){
    var total = 0;
    for (var i = 0; i < data.length; i++){
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function buildChains() {
    for (var i = 0; i < this.table.length; i++){
        this.table[i] = new Array();
    }
}

function put(data){
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}

function betterHash(data){
    var total = 0;
    var H = 37; //Small prime
    for (var i = 0; i < data.length; i++){
        total += H * total + data.charCodeAt(i);
    }
    return total % this.table.length;
}

function put(data){
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; i++){
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}