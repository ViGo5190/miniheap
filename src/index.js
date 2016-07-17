'use strict';

class MinHeap {
    constructor(inputData) {
        this.data = inputData;
        this.sort();
    }

    sort() {
        if (this.data.length === 0) {
            return this;
        }

        return sortHeapArray(this.data);
    }

    heapify() {
        return subHeapify(0, this.data, 0);
    }
}

function sortHeapArray(heapArray) {
    for (let i = 0; i < heapArray.length; i++) {

        let swap = false;
        let j = 0;
        while (j < heapArray.length - 1) {
            if (heapArray[j].parentId > heapArray[j + 1].parentId) {
                let tmp = heapArray[j];
                heapArray[j] = heapArray[j + 1];
                heapArray[j + 1] = tmp;
                swap = true;
            }
            if ((heapArray[j].parentId === heapArray[j + 1].parentId) && (heapArray[j].id > heapArray[j + 1].id)) {
                let tmp = heapArray[j];
                heapArray[j] = heapArray[j + 1];
                heapArray[j + 1] = tmp;
                swap = true;
            }
            j++;
        }
        if (!swap) {
            break;
        }
    }
    return heapArray;
}

function subHeapify(parentNodeId, heap, it) {
    let subHeap = [];
    for (let i = it; i < heap.length; i++) {
        if (heap[i].parentId === parentNodeId) {
            let heapNode = {
                id: heap[i].id,
                parentId: heap[i].parentId
            };
            let children = subHeapify(heap[i].id, heap, i);
            if (children.length > 0) {
                heapNode.children = children;
            }

            subHeap.push(heapNode);
        }
        if (heap[i].parentId > parentNodeId) {
            break;
        }
    }
    return subHeap;
}

module.exports = MinHeap;