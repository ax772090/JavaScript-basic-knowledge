/*
 * ---------this总是指向调用该函数的对象----------------
 */

var name="mike";
function Person(){
	var name="lucy";
	this.say=function(){
		print(name);
		print(this.name);
	}
}
var person=new Person();
person.say();
print("----------------");


function Person2(){
	var name="lucy";
	this.name="lily";
	this.say=function(){
		print(name);
		print(this.name);
	}
}
var person2=new Person2();
person2.say();
print("------------");

function say(){
	var name="wangxing";
	print(name);
	print(this.name);
}

function Person3(){
	var name="lucy";
	this.name="lily";
	this.say=say;
}
var person3=new Person3();
person3.name="xiaozhang";
say.call(person3);
print("-------------");




function print(msg){
	document.write(msg);
	document.write("<br />");
}

