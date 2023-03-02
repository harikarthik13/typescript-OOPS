"use strict";
class Course {
    constructor(courseId, courseName) {
        this.courseId = courseId;
        this.courseName = courseName;
    }
    courseDetails() {
        console.log(`Course Id: ${this.courseId}`);
        console.log(`Course Name: ${this.courseName} `);
    }
}
class Employee extends Course {
    constructor(courseId, courseName, empId, empName, empDesignation) {
        super(courseId, courseName);
        this.empId = empId;
        this.empName = empName;
        this.empDesignation = empDesignation;
    }
    employeeDetails() {
        console.log(`Employee Id: ${this.empId} `);
        console.log(`Employee Name :  ${this.empName} `);
        console.log(`Employee Designation: ${this.empDesignation} `);
    }
}
class Admin extends Employee {
    constructor(courseId, courseName, empId, empName, empDesignation, adminId, adminName) {
        super(courseId, courseName, empId, empName, empDesignation);
        this.adminId = adminId;
        this.adminName = adminName;
    }
    adminDetails() {
        console.log(`Admin Id: ${this.adminId}`);
        console.log(`Admin Name: ${this.adminName} `);
    }
}
let d = new Admin(7, "Fullstack", 777, "Hari", "Developer", 1, "Arul");
d.courseDetails();
d.employeeDetails();
d.adminDetails();
