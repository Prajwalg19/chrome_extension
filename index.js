let count = 0;
var recount;
increment = () => {
    document.getElementById("count").innerHTML =++ count;
    recount = count;
    return count

};
// restart = () => {
//     document.getElementById('count').innerHTML = 0;
//     return count= 0;
// }
save = () => {
    let variable = document.getElementById("pe");
    variable.textContent+= recount + ' - ';
    return count = 0;





}

