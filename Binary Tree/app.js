function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show(){
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.getFam = getFam;
}

function insert(data){
    var n = new Node(data, null, null);
    if (this.root == null){
        this.root = n;
    }

    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

//Google question from glassdoor?
function getFam(node){
    if (node == null){
        return "";
    }
    else if (node.left == null && node.right == null){
        return node.data;
    }
    else if (node.left !=null && node.right != null){
        var wholeFam = [];
        wholeFam.push(node.data, node.left.data, node.right.data);
        return wholeFam;
    }
}

function inOrder(node){
    if (node != null){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}

function preOrder(node){
    if (node != null){
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node){
    if (node != null){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}

function getMin(){
    current = this.root;
    while (current.left != null){
        current = current.left;
    }
    return current.data;
}

function getMax(){
    current = this.root;
    while (current.right != null){
        current = current.right;
    }
    return current.data;
}

function find(data){
    current = this.root;

    while (data != current.data){
        if (data < current.data){
            current = current.left;
        }
        else {
            current = current.right;
        }

        //Means the the node does not exist in the tree because we have gone through every possible node
        if (current == null){
            return null;
        }
    }
    return current;
}


var nums = new BST();
nums.insert(45);
nums.insert(10);
nums.insert(6);
nums.insert(2);
nums.insert(7);
nums.insert(12);
nums.insert(11);
nums.insert(48);
nums.insert(46);
nums.insert(50);

//Testing inOrder
console.log("Inorder Traversal");
inOrder(nums.root);

console.log("Pre Order Traversal");
preOrder(nums.root);

console.log("Post Order Traversal");
postOrder(nums.root);

console.log("Min: ");
console.log(nums.getMin());

console.log("Max: ");
console.log(nums.getMax());

var x = 50;

if (nums.find(x)){
    console.log("The value " + x + " IS in the tree");
}
else{
    console.log("The value " + x + " is NOT in the tree");
}

//Test the getFam
console.log("The fam is " + getFam(nums.root.left.left));