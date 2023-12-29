

var day = "Monday";

switch(day){
				case "Tuesday": alert('Tuesday');
				break;
				case "Monday": alert('Monday');
				break;
				case "Wednesday": alert('Wednesday');
				break;
				default: prompt("Days unknown");
				//multiple conditionals
}
var x=1;
for ( x=2; x<32; x+=2)
				{
				console.log(x);
				// print odd numbers from 1- 31
}
function Profile(name, age, nationality){
				this.name = name;
				this.age = age;
				this.nationality = nationality;
				this.bio = function (){
								console.log(`my name is ${this.name}, I am ${this.age} from ${this.nationality}`)
				} 
	const abeeb=newProfile("Abeeb", 14, "Nigerian")
console.log(abeeb.bio())
