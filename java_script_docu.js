
//// variables 
// let => beschränkt an Scope        global varriable mit window nicht erreichbar
//const => beschränkt an scope       global varriable mit window nicht erreichbar
// var => beschränkt an function     global Variable mit window sind erreichbar. 


/// primitive  type--> number sring boolean null undefindes und 
//name='khalil'
let name = 'Khalil';
let id = 123
let admin= true
let lname= undefined;
let age= null
let mo = 10;

//console.log(id);
// const
const id_=123;
// type(variable)
/////////////////////////////////////////////////////////////////////////////////////
/// reference types--> objekt array funktion

// Array

const list =[1,2,3]
const list2= [1,2,5]
// Array -Primitiv
list.push(500,10)  // am Ende der Array kommt neue Elemente
list.unshift(1,2)  // Am Anfang der Arraykommt neue Elemente
list.splice(2,0,"test") // Index, wie viel muss gelöscht werden, Input
list.indexOf('te')
list.includes(2) // ob es unsere iput hat
let last =list.push()  //return lat element
let first =list.shift()//return first elemnt
list_ = [] // delete all elemente
list_.length=0
let com =list.concat(list2)  // concat 2 array
const combine =[1,...list,...list2,'a'] // concat 2 Array aber es ist viel flixeballer (Spread)
let sl = com.slice(2,4) // to get a tile of array   index, until 
// Array - Reference
const list1 = [{id:1, name:'Khalil'},{id:2, name:'Karim'}]
const num = list1.find(function(list1){  // It give gesamte objet zurück, {id:1, name:'Khalil'}
    return list1.name ==='Khalil'
})
console.log(num)

// Array   iterration forEach or for in or for of 
list.forEach(function(number){
    console.log(number)
})
let list_test_1 =[25,50,75,100,125]
list_test_1.forEach(number=>{console.log(number)})
list_test_1.forEach((number,index)=>{console.log(number, index)})

// Array  array to string
list_join =list_test_1.join(' ')   // Die Output wäre gesamte list zusammen geführt, kann man eine seperator auch haben. gegenteil von split()

// Array Every         // kann man iterate und eine Kondition in unsere Array checken. true or false 
let checker = list.every(function(value){
    return value>0
})

// Array Some                 wenn nur eine Elemnt match return true or false 
let some_checker = list.some(function(value){
    return value>0
})

// Array Filter               it returns nur elemte die unser Kriteria passen 

filtered = list.filter(function(value){
    return value >= 0
})

filterd1 = list.filter(value=> value>=0)

students = [{id:1, name:'Khalil'},{id:2, name:'Davi'}]
filtered_student= students.filter(student=> id>1)      // it returns all Student, that have an id bigger than 1

// Array map                /Damit kann man eine Array anpassen und jede Elemente verändrn
list_map = [1,2,3,4]
list_map1 = list_map.map(function(value){
    return value * 2        // it erstellt eine neue Array mit multiple 2 
})

// filter map together
let list_f_m = [1,2,3,4,5]
let list_f_m1 = list_f_m.filter(value=> value>2).map(value=> value*100000)


// object wie arry in python person={"name":"Khalil","age":22,admin:True}
let person = {
    name : "Karim",
    age: 35,
    admin: true
}
// How to get Value of a object
console.log(person['age'])
console.log(person.age)
console.log(person)
console.log(person.length)

// * Eine objekt kann eine Funktion auch drin haben
circle_={
    radius: 1,
    location:{
        x: 1,
        y:1,
    },
    draw : function(){console.log('Das ist eine Function aus objekt' )}
}
// Add neue Property und Method und löscheen
circle_.color= 'red'
circle_['name']= 'Hourses'
circle_['f'] = function(){console.log('Second function')}
delete circle_.name;
delete circle_.draw;
console.log(circle_)

// function factory OBJEKT ORIENTET  um Objekte zu erzeugen

function createCircle(radius){

    return{
        radius: radius,
        draw(){console.log('circle 1 is created')}
    }
}

circle_1 = createCircle(200000000000000000000)
console.log(circle_1.draw())

// Construnctor Function OBJEKT ORIENTET um Objekte zu erzeugen

function Circle(radius){
    this.radius = radius,
    this.draw_= function(){console.log(this.radius +' Ist von User eingegeben wurde')}
}

const circle = new Circle(3000)
console.log(circle.draw_)
/////////////////////////////////////////////////////////////////////////////////////////////

//circle.draw();
// Array js /list python
let users = ['Khalil','Mo','Soheil', true]
users[2]='Zahra'
users[1]='Staphan'
console.log(users[1])
console.log(users.length)
console.log(users) 
//function in pxthon def test():

function greeting(name){

    console.log('Hallo Herr '+name)

}
function square(number){
    let result = number * number
    return result
}
greeting('Khalil khan Omrani')
console.log(square(208))


//// Operators

// Arrismatic or Mohasebati Operators + * / - %(remeinder **(power) ++(increment) --(decrement))
let x =10
console.log(++x)
console.log(++x )

// Assinment Operators  = += -= *= %=  
x = 2
console.log(x += 10000)
console.log(x += 10000)

// relational  Operators <> <= >=

/// equality Operators
// lose equlity == !=
//strict equality === !== hier wird data type auch betrachtet

// ternery Operator
let autheticated = false;
let buttonText = autheticated===true? 'Dashboard': 'Login'
console.log(buttonText)

// logical Operators and && or || not !(Es konvertiert False to true und true to false)
let productCount= 3;
let ProductPrice = 1000;
let credit = 1200;
buy= productCount>0 && credit>ProductPrice
console.log(buy)

//// Conditions 

//if else 

let hours = 12
if (hours>6 && hours<12){
    console.log('good moorning')
}else if(hours>=12 && hours<19){
      console.log('good afternoon')  
}else{
    console.log('good night')
}

//switch case
let role = 'admin'
switch(role){
    case "gast":
        console.log('Er ist eine gast')
        break;
    case "admin":
        console.log('Es ist admin')
        break;
    default:
        console.log('unknown user')
}
//// Loops
// for       python for i in range(1,5,1)
for (let i =0; i<5; i++){
    console.log('You are the best')
}
//while
let i = 0
while(i<10){
    if(i%2==0){
        console.log(i)
        console.log('passed')
        
    }
   i ++ 
}
// do while
let j =0;
do{
    console.log('do')
    j++
}while(j<6)

// for in for of beide sind for array and object
person = {name:'Khalil', age:34}
for(let key in person){
    console.log(key)
    console.log(person[key])
}
colors =['red','black']
for(index in colors){
    console.log(index)
    console.log(colors[index])
}

// for of nur für array
colors =['red','black','yellow']
for (color of colors){
    console.log(color)
}

// break and continue
for (let i =0; i<10; i++){
    if(i==9){
        //break;
        continue
    }
    console.log(i)
}

// Date
 
const now = new Date()
console.log(now.toDateString())
console.log(now.toISOString())
console.log(now.getDay()) //Day of Weak 
console.log(now.getDate()) //Day of Month
const date1 = new Date("May 11 2020 09:00")
console.log(date1.toDateString())


// get set 
let ob = {
    fname:'Khalil',
    lname:'Omrani',
    get fullName(){
        return `${this.fname} ${this.lname}`
    },
    set fullName(value){
        person = value.split(' ')
        this.fname= person[0]
        this.lname=person[1]

    }
}

ob.fullName="Kamal Bandpey"

console.log(ob.fullName)

// try catch   Error handler

function arrayCreator(value){
    person = value.split(' ')
    if (typeof value != 'string')
        throw new Error('Input value is not string');    // Throw den Error
    if (person.length != 2)
        throw new Error('Please enter first and lastname ')
    let fname = person[0]
    let lname= person[1]
    return (fname,lname)
    

}

try{
    let name = arrayCreator('TRUEFALSIAN')
    console.log(name[0])
    console.log(name[1])
}catch(e){       // catch den Error
    //alert(e)
    console.log(e)
}

//// OOP   Object Orientet Programming

// Incapsulation all of methode and Properties in a Object 
let Cal = {
    basesalary: 3000,
    overtime: 40,
    rate: 10,

    calRate(){
        return this.basesalary + (this.overtime + this.rate)
    }
}

//   OOP Abstraction  some Methods oder Properties kann man mit let definieren, so werden die nur innerhalb der Objekt erreichbar sein.

function Circle(){
    this.radius = 10;
    let bame = 'Ali';
    this.drawCircle = function(){
        console.log('test')
    }
}

// OPP Inheritence
// Inheritence Prototype(parent)

let object_man = {
    name:'Khalil',
    fn(){
        console.log('tetst')
    }
}

// Intance Members and Prototype members 
function Circles(radius){
    // Instance Membersa
    this.radius= this.radius
    
}
// Prototype Members
Circles.prototype.draw= this.draw= function(){
    console.log('draw')
}

c1 = new Circles(2)
c2= new Circles(3)

// How can Inheritence a Object from another 

function Shape(size){
    this.site = size
}
Shape.prototype.duplicate=function(){
    console.log('Duplikate')
}

function Square(color){
    this.color = color
}

function extent(child,parent){
    child.prototype= Object.create(parent.prototype)
    child.prototype.constructor = child

}
extent(Square,Shape)

//// Class
class CircleClass{
    constructor(radius){
        this.radius= radius

    };
    draw(){
        console.log('Class dRAW')
    }

}
cc = new CircleClass(10) 

// Class Inheritance

// Parent
class Shape_{
    constructor(color){
        this.color=color
    }
    draw(){

    }

}
// Child
class Circle_ extends Shape_{
    // mit Super wir erreichen alle Properties von Parent
    constructor(color,radius){
        super(color)
        this.radius=radius
    }
    move(){

    }
}

c = new Circle_('red',2)

// REdefine a Methode in Child Class

class Shape_2{
    move(){
        console.log('move')
    }
}
class Circle_2 extends Shape_2{
    // redefine move function
    move(){
        // so kann ich eine Funktion aus Parent aufrufen
        super.move()

        console.log('circle move')
    }
}
c = new Circle_2()


//// Modules((Node js)---------> Damit kann man Skript in Unterschiedliche Files Verlegen

// module.export = was wir wollen exportieren
// const Circle = require('relative path of a File')

//// Module ES 6
//export class Circle{

//}

//import{Circle} from './path'

// Promise für parallel Process
function ball1(){
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('ball 1 success')
        }else{
            reject('ball 1 failer')
        }

    })
}
function ball2(){
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('ball 2 success')
        }else{
            reject('ball 2 failer')
        }

    })
}

ball1().then((mssg)=>{
    console.log(mssg)
    return ball2();
}).then((mssg)=>{
    console.log(mssg)
}).catch(err=>{
    console.log(err)
})

// asnc await

async function ball1_asyc(){
    if(true){
        return ('Ball 1 async sucsses')
    }else{
        throw new Error('Ball 1 async failer')
    }
}

async function ball2_asyc(){
    if(false){
        return ('Ball 2 async sucsses')
    }else{
        throw new Error('Ball 2 async failer')
    }
}
async function execute(){
    try{
        console.log(await ball1_asyc())
        console.log(await ball2_asyc())

    }catch(err){
        console.log(err)
    }
}
execute()


// test
try{
    if(true){

    }else{
        throw new Error('Failde')
    }

}
catch(error){

    console.log(error)
}
