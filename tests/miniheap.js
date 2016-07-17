/**
 * Stanislav Gumeniuk i@vigo.su
 */

let assert = require('chai').assert;
let Heap = require('../src/');
describe('services/cache', function () {


    describe('Check sort', function () {
        it('empty array', function () {
            let heap = new Heap([]);
            assert.sameMembers(heap.data, []);
        });

        for (let i=1;i<=4;i++){
            it('test '+i, function () {
                let inData = require('../tests_mocks/sort/'+i+'/in.js');
                let outData = require('../tests_mocks/sort/'+i+'/out.js');
                let heap = new Heap(inData);
                assert.deepEqual(heap.data, outData);
            });
        }
    });

    describe('Check heapify', function () {
        it('empty array', function () {
            let heap = new Heap([]);
            assert.sameMembers(heap.heapify(), []);
        });

        for (let j=1;j<=6;j++){
            it('test '+j, function () {
                let inData = require('../tests_mocks/heapify/'+j+'/in.js');
                let outData = require('../tests_mocks/heapify/'+j+'/out.js');
                let heap = new Heap(inData);
                assert.deepEqual(heap.heapify(), outData);
            });
        }
    });
});