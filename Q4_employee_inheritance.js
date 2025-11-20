
class Employee{
  constructor(name, dept){
    this.name=name;
    this.dept=dept;
  }
  work(){ console.log(this.name,"is working in",this.dept); }
}

class Manager extends Employee{
  work(){ console.log(this.name,"is managing the",this.dept,"department"); }
}

const e=new Employee("A","Sales");
const m=new Manager("B","IT");
e.work();
m.work();
