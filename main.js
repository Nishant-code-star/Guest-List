name_array = [];

function submit() {
    display_array = [];
    for (j = 1; j <= 4; j++) {
        var name = document.getElementById("name" + j).value;
        console.log(name);
        name_array.push(name);
    }

    console.log(name_array);
    var len = name_array.length;
    console.log(len);
    for (var k = 0; k < len; k++) {
        display_array.push("<h4>NAME -" + name_array[k] + "</h4>");
        console.log(display_array)
    }
    document.getElementById("display_name_with_commas").innerHTML = display_array;
    var remove_commas = display_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_btn").style.display = "none";
    document.getElementById("sort_btn").style.display = "inline-block";
}

function sort() {
    display_array_sort=[];
    name_array.sort();
    console.log(name_array);
    var len = name_array.length;
    console.log(len);
    for (var k = 0; k < len; k++) {
        display_array_sort.push("<h4>NAME -" + name_array[k] + "</h4>");
        console.log(display_array_sort)
    }
    document.getElementById("display_name_with_commas").innerHTML = display_array_sort;
    var remove_commas = display_array_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}