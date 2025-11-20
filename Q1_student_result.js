
class Student {
  constructor(name, marks){
    this.name=name;
    this.marks=marks;
  }
  calculateAverage(){
    return this.marks.reduce((a,b)=>a+b,0)/this.marks.length;
  }
  getGrade(){
    const avg=this.calculateAverage();
    if(avg>=85)return "A";
    if(avg>=70)return "B";
    if(avg>=50)return "C";
    return "F";
  }
}

const s1=new Student("A", [80,90,85]);
const s2=new Student("B", [60,70,75]);
const s3=new Student("C", [30,40,50]);
console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());
console.log(s3.name, s3.getGrade());
