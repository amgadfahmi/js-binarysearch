console.log('Starting ...');

define(['BS'], function(BS) {

    describe("Initialize", function() {
        it("instance", function() {
            var bs = new BS([1, 2]).internalArray;
            expect(bs.length).toBe(2);
        });
    });
   
    describe("Initialize", function() {
        it("wrong contructor", function() {
            expect(function(){
             new BS();   
            }).toThrow();
        });
    });

    describe("Sort", function() {
        it("numbers", function() {
            var bs = new BS([4]).sort();
            expect(bs).toEqual(undefined);
        });
    });

    describe("Sort", function() {
        it("numbers", function() {
            var bs = new BS([41, 3, 2, 4]).sort().internalArray;
            expect(bs).toEqual([2, 3, 4, 41]);
        });
    });

    describe("Sort", function() {
        it("strings", function() {
            var bs = new BS(["Banana", "Orange", "Apple", "Mango"]).sort().internalArray;
            expect(bs).toEqual(["Apple","Banana","Mango","Orange"]);
        });
    });


    describe("Sort", function() {
        it("objects", function() {
        	var arr = [{id:33, name:'Jasmin'},{id:12, name:'David'},{id:7, name:'Amgad'},{id:56, name:'Katya'}];
            var bs = new BS(arr).sort('id').internalArray;
            var check1 = bs[0].id  === 7;
            var check2 = bs[bs.length -1 ].id === 56;
            expect(check1 && check2).toBeTruthy();
        });
    });


    describe("Search", function() {
        it("numbers", function() {
            var bs = new BS([41, 33, 1 , 15,7]).sort().search(33);
            expect(bs).toEqual(33);
        });
    });

    describe("Search", function() {
        it("strings", function() {
            var bs = new BS(["Banana", "Orange", "Kiwi","Apple", "Mango"]).sort().search("Mango");
            expect(bs).toEqual("Mango");
        });
    });
  
    describe("Search", function() {
        it("objects by id", function() {
          var arr = [{id:99, name:'Karin'},{id:33, name:'Jasmin'},{id:12, name:'David'},{id:7, name:'Amgad'},{id:56, name:'Katya'}];
            var bs = new BS(arr).sort('id').search(33,'id');
            expect(bs).toEqual({id:33, name:'Jasmin'});
        });
    });


    describe("Search", function() {
        it("objects by name", function() {
          var arr = [{id:33, name:'Jasmin'},{id:12, name:'David'},{id:7, name:'Amgad'},{id:56, name:'Katya'}];
            var bs = new BS(arr).sort('name').search('Katya','name');
            expect(bs).toEqual({id:56, name:'Katya'});
        });
    });

    describe("Search", function() {
        it("search by custom-iterator", function() {
          function searchCustomIterator(item, target) {
            if (target >= item.min && target <= item.max) {
              return 0; // This is the item we want to find
            }

            return target - item.min; // res>0 || res<0
          }
          var arr = [
            {id: 33, name: 'Jasmin', min: 1, max: 6},
            {id: 12, name: 'David', min: 5, max: 6},
            {id: 7, name: 'Amgad', min: 7, max: 9},
            {id: 56, name: 'Katya', min: 10, max: 12}
          ];
            var bs = new BS(arr).sort('min').search(5, searchCustomIterator);
            expect(bs).toEqual({id: 12, name: 'David', min: 5, max: 6});
        });
    });

});
console.log('Test ended ...');