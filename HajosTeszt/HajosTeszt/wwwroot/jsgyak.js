window.onload = function ()
{
        let hova = document.getElementById("ide");
        var rows = 10
        var arr = generatePascal(+rows);
        for (var i = 0; i < arr.length; i++) {
            let sor = document.createElement("div");
            sor.classList.add("sor")
            hova.appendChild(sor);

            for (var j = 0; j < arr[i].length; j++) {
                let szám = document.createElement("div");
                szám.classList.add("elem")
                szám.innerText = arr[i][j];
                sor.appendChild(szám)
                szám.style.color = `rgb(${255/10 * i},0,${255/10 * j})`
            }
            
        }
    
    function generatePascal(n) {
        var arr = [];
        var tmp;
        for (var i = 0; i < n; i++) {
            arr[i] = [];
            for (var j = 0; j <= i; j++) {
                if (j == i) {
                    arr[i].push(1);
                } else {
                    tmp = (!!arr[i - 1][j - 1] ? arr[i - 1][j - 1] : 0) + (!!arr[i - 1][j] ? arr[i - 1][j] : 0);
                    arr[i].push(tmp);
                }
            }
        }
        return arr;
    }
}