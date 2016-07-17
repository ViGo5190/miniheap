/**
 * Stanislav Gumeniuk i@vigo.su
 */

var assert = require('chai').assert;
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

        for (let i=1;i<=6;i++){
            it('test '+i, function () {
                let inData = require('../tests_mocks/heapify/'+i+'/in.js');
                let outData = require('../tests_mocks/heapify/'+i+'/out.js');
                let heap = new Heap(inData);
                console.log(heap.heapify());
                assert.deepEqual(heap.heapify(), outData);
            });
        }
    });
});