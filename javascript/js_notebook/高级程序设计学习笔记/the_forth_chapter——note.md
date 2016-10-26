### Object类型

. Object实例类型可以在应用程序中用来传输和保存数据，是非常好的一种选择。

- 对象字面量是对象定义的一种简写的方法，在于简化包含大量属性的对象的过程。

- 在使用对象字面量的语法时，可以用空花括号来创建只包含默认属性和方法的对象。

- 对象字面量方法也是向函数传递大量可选参数的首选方法。

<pre>
function displayInfo(arg){
    var output = '';
    if (typeof arg.name == 'string'){
        output += 'name:'+arg.name+'\n';
    }
    if (typeof arg.age == 'number'){
        output += 'age:'+arg.age;
    }
   console.log(output);
}
displayInfo({
    "name":"hh",
    'age':12
});
displayInfo({
    "name":"hhd",
    'age':17
});
//name:hh
// age:12
//name:hhd
//age:17
</pre>

- 一般访问对象属性用点方法，但是用方括号的优点在于可以用变量来访问属性。

<pre>
var personName = 'dd';
alert(person[personName]);
</pre>

> 通常除了必须用变量来访问对象属性，一般建议用点方法。

### Array

- alert()要接受字符串参数，所以它会在后台调用tostring方法，由此会得到与直接调用toString()方法一样的结果。
