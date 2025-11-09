// Definição do ListNode
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Função auxiliar para criar lista a partir de array
function createList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Função auxiliar para converter lista em array (para visualizar)
function listToArray(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Sua solução
let mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let p1 = list1;
    let p2 = list2;

    while (p1 !== null && p2 !== null) {
        if (p1.val <= p2.val) {
            current.next = p1;
            p1 = p1.next;
        } else {
            current.next = p2;
            p2 = p2.next;
        }
        current = current.next;
    }
    
    current.next = p1 !== null ? p1 : p2;
    
    return dummy.next;
};

// Testes
console.log(listToArray(mergeTwoLists(createList([1,2,4]), createList([1,3,4])))); // [1,1,2,3,4,4]
console.log(listToArray(mergeTwoLists(createList([]), createList([])))); // []
console.log(listToArray(mergeTwoLists(createList([]), createList([0])))); // [0]

/* BIG O NOTATION ANALYSIS
    Time Complexity: O(n + m) where n and m are the lengths of list1 and list2
    Space Complexity: O(1) since we are not using any extra space that grows with input size
*/