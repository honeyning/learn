/**
 * Created by hhm on 2016/10/11.
 */
//function displayInfo(arg){
//    var output = '';
//    if (typeof arg.name == 'string'){
//        output += 'name:'+arg.name+'\n';
//    }
//    if (typeof arg.age == 'number'){
//        output += 'age:'+arg.age;
//    }
//   console.log(output);
//}
//displayInfo({
//    "name":"hh",
//    'age':12
//});
//displayInfo({
//    "name":"hhd",
//    'age':17
//});
//
//var personName = 'dd';
//alert(person[personName]);

$(document).ready(function(){
    $('.box2').each(function(){
        var maxWidth = 23;
        if($('.box2').text().length>maxWidth){
            $(this).text($(this).text().substring(0,maxWidth));
            $(this).html($(this).html()+'...');
        }
    });
});