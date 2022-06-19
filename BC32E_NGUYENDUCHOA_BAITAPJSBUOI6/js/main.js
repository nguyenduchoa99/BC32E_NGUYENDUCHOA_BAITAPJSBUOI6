/**
 * Bài 1: Tìm số nguyên dương nhỏ nhất có tổng < 10000
 * Mô hình 3 khối:
 * - Input:
 *      + tong: Number, run: Number
 * - Xử lý:
 *      + run = 0
 *      + tong = 0
 *      + với điều kiện vòng lập là tong < 10000
 *      + run = run + 1 đến khi tong < 10000 => tong = tong + run < 10000
 * - Output:
 *      + ketQuaBai1 = run đến khi thỏa điều kiện tong < 10000
 */

function soDuong() {
    var tong = 0;
    var run = 0;
    while (tong < 10000) {
        run++;
        tong += run;
    }

    document.getElementById('ketQuaBai1').innerHTML = "=> Số nguyên dương nhỏ nhất là: " + run;
}

document.getElementById('btnXemKetQua').onclick = soDuong;


/**`
 * Bài 2: Tính Tổng
 * Mô hình 3 khối
 * - Input:
 *          + soX: Number, soN: Number
 * - Xử lý:
 *          + run2 = 1
 *          + tinhTong = 0
 *          + Điều kiện vòng lập run2 <= soN
 *          + tinhTong = tinhTong + Math.pow(soX,run2)
 *          + run2++
 * - Output:
 *          + ketQuaBai3 = tinhTong
 */
function tinhTongCacSo() {
    var soX = Number(document.getElementById('nhapSoX').value);
    var soN = Number(document.getElementById('nhapSoN').value);
    var run2 = 1;
    var tinhTong = 0;
    while (run2 <= soN) {
        tinhTong += Math.pow(soX, run2);

        run2++;
    }
    document.getElementById('ketQuaBai2').innerHTML = '=> Tổng: ' + tinhTong;
}

document.getElementById('btnTinhTong').onclick = tinhTongCacSo;

/**
 * Bài 3: Tính giai thừa
 * Mô hình 3 khối
 * - Input:
 *      + soGiaThua: Number;
 * - Xử lý: 
 *      + tinhGiaThua = 1;
 *      + run3 = 1;
 *      + Điều kiện vòng lập  run3 <= soGiaThua
 *      + tinhGiaThua = tinhGiaThua * run3
 *      + run3++
 * - Output:
 *      + ketQuaBai3 = tinhGiaiThua
 */

function giaiThua() {
    var soGiaiThua = Number(document.getElementById('soGiaiThua').value);
    var run3 = 1;
    var tinhGiaiThua = 1;
    while (run3 <= soGiaiThua) {
        tinhGiaiThua *= run3;
        run3++;
    }
    document.getElementById('ketQuaBai3').innerHTML = '=> Giai thừa: ' + tinhGiaiThua;
}

document.getElementById('btnTinh').onclick = giaiThua;

/**
 * Bài 4: Tạo thẻ Div
 * Mô hình 3 khối
 * - Input:
 *          + run4: Number, html: String, ketQuaBai4: String;
 * - Xử lý:
 *          + Điều kiện vòng lập đề bài run4 <= 10
 *          + if(run4 %2==0) => ketQuaBai4 = "<div class='bg-danger text-white p-2'>Div chẵn</div>"; else => ketQuaBai4 = "<div class='bg-primary text-white p-2'>Div lẻ </div>";
 *          + html = html + ketQuaBai4
 *          + run4++
 * - Output:
 *          + In ra html theo từng điều kiện chẵn lẻ như đề bài bằng thẻ <div><div>
 */

function taoThe(){
    var run4 = 1;
    var html = '';
    var ketQuaBai4 = '';
    while(run4 <= 10 ){
        if (run4 %2 == 0) {
            ketQuaBai4 = "<div class='bg-danger text-white p-2'>Div chẵn</div>";
        }else {
            ketQuaBai4 = "<div class='bg-primary text-white p-2'>Div lẻ </div>";
        }
        html += ketQuaBai4;
        run4++;
    }
    document.getElementById('ketQuaBai4').innerHTML = html;
}


document.getElementById('btnTaoThe').onclick = taoThe;