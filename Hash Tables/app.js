function HashTable() {
    this.table = new Array(137)
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.buildChains = buildChains;
    this.get = get;
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

function betterHash(data){
    var total = 0;
    var H = 37; //Small prime
    for (var i = 0; i < data.length; i++){
        total += H * total + data.charCodeAt(i);
    }
    return total % this.table.length;
}

function put(key, data){
    var pos = this.betterHash(key);
    var index = 0; 
    if (this.table[pos][index]==undefined){
        this.table[pos][index+1] = data;
        index++;

    }
    
    else {
        while (this.table[pos][index] != undefined){
            index++;
        }
        this.table[pos][index] = data;
    }
}

function get(key){
    var index =0;
    var hash = this.betterHash(key);
    if (this.table[pos][index] = key){
        index +=2
        return this.table[pos][index-1];
    }
    else {
        while (this.table[pos][index] != key){
            index +=2
        }
        return this.table[pos][index+1];
    }
    return undefined;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; i++){
        if (this.table[i][0] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

//Testing hash table
var someNames = ["Dexter", "Donna", "Laura", "Matt", "Ish", "Ben", "Maisie"];

var hTable = new HashTable();
hTable.buildChains();

for (var i=0; i < someNames.length; i++){
    hTable.put(someNames[i]);
}

hTable.showDistro();