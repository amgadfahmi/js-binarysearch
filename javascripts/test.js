function test() {
    var iterations = $('#iterations').val();
    loadChart(iterations);

    var arrNum = [];
    for (var i = 0; i < iterations; i++) {
        arrNum.push(i + 1);
    }

    var arrStr = [];
    for (var i = 0; i < iterations; i++) {
        arrStr.push('a' + i);
    }

    var arrObj = [];

    for (var i = 0; i < iterations; i++) {
        arrObj.push({"id":i,"index":0,"guid":"jad" + i ,"isActive":false,"balance":"$3,368.37","picture":"http://placehold.it/32x32","age":30,"eyeColor":"blue","name":{"first":"Byrd","last":"Macdonald"},"company":"SCHOOLIO","email":"byrd.macdonald@schoolio.ca","phone":"+1 (835) 462-2052","address":"299 Polhemus Place, Suitland, Missouri, 8104","about":"Sunt ad voluptate Lorem exercitation labore excepteur amet. Sunt dolore ex reprehenderit ea nostrud consectetur eiusmod. Duis tempor sit ex cupidatat velit ea anim minim id occaecat nostrud. Ipsum occaecat consectetur minim duis magna incididunt reprehenderit. Nulla ad aliqua pariatur occaecat dolor veniam ex nulla magna reprehenderit nostrud irure cupidatat.","registered":"Tuesday, April 19, 2016 1:13 AM","latitude":"30.836734","longitude":"-135.663842","tags":["occaecat","eu","non","duis","ullamco"],"range":[0,1,2,3,4,5,6,7,8,9],"friends":[{"id":0,"name":"Leach Stout"},{"id":1,"name":"Angelia Stafford"},{"id":2,"name":"Barlow Kinney"}],"greeting":"Hello, Byrd! You have 5 unread messages.","favoriteFruit":"banana"});
    }

    //warm up to load the object
    new BS([1, 2, 3]);
    var lookFor = iterations - 1;

    //binary
    //*******************************
    if ($('#chbxNumber').prop('checked')) {
        var start = performance.now();
        var result = new BS(arrNum).search(lookFor);
        var end = performance.now();
        $('#number').text(end - start);
        console.log(result);
        chartBinaryNum.push({
            x: new Date(),
            y: end - start
        });
    }

    if ($('#chbxString').prop('checked')) {
        start = performance.now();
        result = new BS(arrStr).search('a' + lookFor);
        end = performance.now();
        $('#string').text(end - start);
        console.log(result);
        chartBinaryStr.push({
            x: new Date(),
            y: end - start
        });
    }

    if ($('#chbxObject').prop('checked')) {
        start = performance.now();
        result = new BS(arrObj).search(lookFor, 'id');
        end = performance.now();
        $('#object').text(end - start);
        console.log(result);
        chartBinaryObj.push({
            x: new Date(),
            y: end - start
        });
    }
    //linear
    //******************************* 
    if ($('#chbxNumber').prop('checked')) {
        start = performance.now();
        result = linear(arrNum, lookFor);
        end = performance.now();
        $('#number2').text(end - start);
        console.log(result);
        chartLinearNum.push({
            x: new Date(),
            y: end - start
        });
    }

    if ($('#chbxString').prop('checked')) {
        start = performance.now();
        result = linear(arrStr, 'a' + lookFor);
        end = performance.now();
        $('#string2').text(end - start);
        console.log(result);
        chartLinearStr.push({
            x: new Date(),
            y: end - start
        });
    }

    if ($('#chbxObject').prop('checked')) {
        start = performance.now();
        result = linearObj(arrObj, lookFor, 'id');
        end = performance.now();
        $('#object2').text(end - start);
        console.log(result);
        chartLinearObj.push({
            x: new Date(),
            y: end - start
        });
    }

}



function loop() {
    setInterval(function() {
        if (loopActive) {
            test();
        }
    }, 3000);
}

function toggle() {
    loopActive = !loopActive;
    loop();
}

function reset() {
    chartBinaryNum = [];
    chartLinearNum = [];
    chartBinaryStr = [];
    chartLinearStr = [];
    chartBinaryObj = [];
    chartLinearObj = [];
    loadChart(0);
}

function linear(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            return arr[i];
    }
}

function linearObj(arr, target, key) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] === target)
            return arr[i];
    }
}



function loadChart(iterations) {
    var chart = new CanvasJS.Chart("chartContainer", {

        title: {
            text: "Comparison for " + iterations + " objects",
            fontSize: 30
        },
        animationEnabled: true,
        axisX: {

            gridColor: "Silver",
            tickColor: "silver",
            valueFormatString: "mm:ss"

        },
        toolTip: {
            shared: true
        },
        theme: "theme2",
        axisY: {
            gridColor: "Silver",
            tickColor: "silver",
            title: "Execution time"
        },
        legend: {
            verticalAlign: "center",
            horizontalAlign: "right"
        },
        data: [{
            type: "spline",
            showInLegend: true,
            name: "Binary Number",
            lineThickness: 2,
            dataPoints: chartBinaryNum
        }, {
            type: "spline",
            showInLegend: true,
            name: "Linear Number",
            lineThickness: 2,
            dataPoints: chartLinearNum
        }, {
            type: "spline",
            showInLegend: true,
            name: "Binary String",
            lineThickness: 2,
            dataPoints: chartBinaryStr
        }, {
            type: "spline",
            showInLegend: true,
            name: "Linear String",
            lineThickness: 2,
            dataPoints: chartLinearStr
        }, {
            type: "spline",
            showInLegend: true,
            name: "Binary Object",
            lineThickness: 2,
            dataPoints: chartBinaryObj
        }, {
            type: "spline",
            showInLegend: true,
            name: "Linear Object",
            lineThickness: 2,
            dataPoints: chartLinearObj
        }],
        legend: {
            cursor: "pointer",
            itemclick: function(e) {
                if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                } else {
                    e.dataSeries.visible = true;
                }
                chart.render();
            }
        }
    });

    chart.render();
}