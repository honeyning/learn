###  数据类型

- typeof

``` python
typeof null --> "object"
```

``` python
var a;
typeof a;   //"undefined"
typeof b;   // "undefined"
```

注意：typeof 的结果为string类型; 对未初始化的变量执行typeof操作符会返回undefined值，同样对未声明的变量执行typeof 也会返回undefined值。

-  null

> null 和Undefined

> undefined派生自null

> typeof (undefined == null)    //true

Number(null)    //0;
Number(undefined)   //NaN

- Number
- 所有16进制和8进制的数据在计算时都会被转化为10进制。

![](http://images2015.cnblogs.com/blog/742466/201610/742466-20161011102148868-21329886.png)



>浮点数的最好精确度为17位，并且不能测试某个特定的浮点数值,因为存在舍入误差问题，如代码所示。

####  Infinity

> 如果在一次计算中某个数值的值是infinity，则该值不能参与下一次计算，因为Infinity不能够参与计算的数值。

#### NaN

- 任何涉及到NaN的运算都会返回NaN，NaN与任何值都不相等，包括它自己。
- isNaN()函数，在给这个函数传入数据的时候，该函数会尝试将传入的数据转化为数值；而任何不能被转化为数值的数据都会导致该函数返回true.(一般0/0会导致NaN)

#### 数值转化

-  可以把非数值转化为数值的有3个函数：parseInt(),parseFloat(),Number().
-  Number():

![](http://images2015.cnblogs.com/blog/742466/201610/742466-20161011102429711-1059458687.png)



- parseInt():
- 因为八进制数据的问题，所以推荐在parseInt()，传入两个参数，一个是转化数据，还有个表示是转化时的数据为几进制的。
![](http://images2015.cnblogs.com/blog/742466/201610/742466-20161011102641946-1168317952.png)



- parseFloat():
- parseFloat()之后把数据解析为十进制，会直接忽略前导的零，当然，parseFloat()会将16进制的数据解析为0;
- parseFloat()没有用第二参数指定基数的用法。

#### string类型

- 转化为字符串

    1. toString()

    - 默认情况下，toString()以10进制返回数值的字符串形式。当然可以通过给toString()传递参数，输出以数值相应进制的字符串形式。
    - null ，undefined没有toString()方法。

    2. String()

    - 如果有toString()方法，则String()的数值会直接调用toString()方法。
    - 如果是null，undefined则返回"null","undefined"。

#### Object类型

- constructor():保存用于创建当前对象的函数。
- hasOwnProperty(propertyName):检测给定的属性是不是属于对象实例，并且参数必须以字符串形式指定。
- propertyIsEnumberable():检查给定的属性是否可以通过for-in来枚举，同理，属性指定必须用字符串形式指定。
- toString():返回对象的字符串形式。
- toLocalString():返回对象的字符串形式，与区域有关，比如日期时间。
- valueOf():返回对象的字符串，布尔值，数值的表示，一般和toString()返回的形式一样。

### 操作符

- 递增和递减操作符，在执行该操作之前都会将所要操作的变量默认转化为数值变量（Number()）,然后再进行操作。并且操作之后的变量类型为number;

### width语句

- 将代码的作用域设置到一个特定的对象中。

<pre>
var qs = location.search;
var hostName = location.hostname;
var url = location.href;

//with改写
with(location){
    var qs = search;
    var hostName = hostname;
    var url = href;
}
</pre>

> 严格模式下，不允许用with,否则视为语法错误。

### 参数的理解

- ECMAScript的函数不介意传进来多少个参数，就是说你在定义函数的时候定义的参数个数在2个，你可以传递1个或者3个都没关系。因为ECMAScript的参数是在内部是使用一个数组来表示的，函数始终接受到的是这个数组，并不会管数组中有哪些元素。
- 在函数体内可以通过arguments来访问函数参数数组，获得传递给函数的每个参数。
- arguments.length可以知道传递了多少个参数给函数。
- arguments的值永远和命名参数保持一致。注：他们的内存空间不一样。
- 在严格模式下重写arguments的值，会导致错误。
- 活动对象在开始只包含一个变量，即arguments,arguments在全局环境是不存在的。




