class Course{
    public courseId:  number;
    public courseName: string;

    constructor(courseId:number,courseName:string){
        this.courseId=courseId;
        this.courseName=courseName;
    }
    public courseDetails():void{
        console.log(`Course Id: ${this.courseId}`);
        console.log(`Course Name: ${this.courseName} `)
    }
}
    class Employee extends Course{
        public empId:number;
        public empName:string;
        public empDesignation: string ;
       
    
        constructor(courseId:number,courseName:string,empId:number,empName:string,empDesignation:string){
             super(courseId,courseName);
             this.empId=empId;
             this.empName=empName;
             this.empDesignation=empDesignation;
        }
        public employeeDetails():void{
            console.log(`Employee Id: ${this.empId} `)
            console.log(`Employee Name :  ${this.empName} `)
            console.log(`Employee Designation: ${this.empDesignation} `)
        }
    }
    class Admin extends Employee{
        public adminId: number;
        public adminName: string;

    constructor(courseId:number,courseName:string,empId:number,empName:string,empDesignation:string,adminId:number,adminName:string){
        super(courseId,courseName,empId,empName,empDesignation)
        this.adminId=adminId;
        this.adminName=adminName;

    }
    public adminDetails():void{
        console.log(`Admin Id: ${this.adminId}`);
        console.log(`Admin Name: ${this.adminName} `)
    }
    }


    let d= new Admin(7,"Fullstack",777,"Hari","Developer",1,"Arul")
   d.courseDetails();
   d.employeeDetails();
    d.adminDetails();