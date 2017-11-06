var o={}
o.title='Bilogy'
o.price=150

var b = {title: 'biology',price:150}
b.available=200

console.log(o)
console.log(b)

//สร้าง class, class คือ กลุ่มข้อมูลแบบ Book
//ใน class ใส่ข้อมูลได้สามแบบ คือ 1) Field 2)Method 3)Property
class Book {
    showWelcome() {
        console.log('Welcome to iBook')
    }
    // มี method พิเศษชื่อ Constructor ถูกเรียกเมื่อมีการ new
    constructor(t) {
        // ทุกวันนี้นิยมสร้าง Field ใน Constructor
        this.title = t
        
    }
    
    show(){
        console.log(this.title + ' ' +this.price)
    }
}

var yip = new Book()
yip.showWelcome()
console.log(yip)
yip.show

var a = new Book //C++, PHP
var c = new Book() //Java, C#
//Javascript ใช้ได้หมด

c.title = 'Chemistry'
c.price=140
c.available=5
console.log(c)

class Product{
    constructor(p){
        this.price = p
    }
    specialprice(){
        console.log('Total is '+(this.price*.9))
    }
}

var p = new Product(123)
console.log(p.price)
p.specialprice()

class Circle{
    constructor(r){
        this.radius=r
    }
    showArea(){
        var area= Math.PI*this.radius*this.radius
        area = area.toFixed(2)
        console.log('Circle Area is '+area)
    }
}
var c = new Circle(5)
c.showArea()

class Rectangle{
    constructor(w,h){
        this.width=w
        this.height=h
    }
    showArea(){
        var area = this.width*this.height
        console.log('Rectangle Area is '+area)
    }
}
var r = new Rectangle(8,5)
r.showArea()

class Book2{
    constructor(name,price){
        this.name=name
        this.price=price
    }
    showDetail(){
        console.log(this.name+' ' +this.price+' '+ (this.price*0.55))
    }
}
var b2= new Book2('Biology',150)
b2.showDetail()

class Shape{

    area(){
        return 0
    }
}

class Rectangle2 extends Shape{ //Super Class มีmethod ตัวแปร เหมือนคลาสต้นแบบทุกอย่าง
    constructor(w,h){
        //Javascript บังคับให้เรียก constructor ของ Super Class
        super()
        this.width=w
        this.height=h
    }
    area(){
        return this.width*this.height
    }
}

var aiba = new Rectangle2(6,4)
var eeba = aiba.area()
console.log('พื้นที่ก็คือ!!! ',eeba)

class Square extends Rectangle2{
    constructor(darn){
        super(darn,darn)
    
    }
}

var ss=new Square(5)
console.log('iyaaaaa '+ss.area())

if (ss instanceof Square){console.log('yes')}
else{console.log('Nooooooooooo!!!')}

if (ss instanceof String){console.log('yes')}
else{console.log('Nooooooooooo!!!')}

if (ss instanceof Array){console.log('yes')}
else{console.log('Nooooooooooo!!!')}

if (ss instanceof Shape){console.log('yes')}
else{console.log('Nooooooooooo!!!')}

if (ss instanceof Object){console.log('yes')}
else{console.log('Nooooooooooo!!!')}

var s = new Set()
s.add('Latte')
s.add('Mocha')
s.add('Latte')
console.log([...s]) //แปลงเป็น Array

class StringSet extends Set{
    add(x){
        if(typeof x== 'string'){
            super.add(x)
        }
    }
}
var sos=new StringSet()
sos.add('Koisuru Fortune Cookies')
sos.add(5)
sos.add('Hajimemashite')
console.log([...sos])

class BookSet extends Set{
    add(x){
        if(x instanceof Book){
            super.add(x)
        }    
    }
} 
var sod=new BookSet()
sod.add('Koisuru Fortune Cookies')
sod.add(5)
sod.add('Hajimemashite')
sod.add(new Book('Applied Physics by A.Pao'))
sod.add(new Book('Chem Easy by A.Ou'))
console.log([...sod])
for(var b of sod){
    console.log(b.title)
}

var m = new Map()
m.set('Bangrak','10500')

var c = m.get('Bangrak')
console.log(c)
m.set('Dusit','10300')
m.set('Bangplad','10700')
c = m.get('Dusit')
console.log(c)

class Shirt{
    constructor(s,p){ //เรียกว่า Method
        this.size=s //เรียกว่า Field
        this.prize=p
    }
    get cost(){ //เรียกว่า property
        return this.price*50/100
    }
    set cost(x){
        this.price=2*x
    }
}
var m = new Shirt('M',200)
m.cost = 120
console.log('property: '+ m.cost + ', field: ' + m.price)
