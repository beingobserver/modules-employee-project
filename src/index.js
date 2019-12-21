import {Requests} from './requests';


const calisanIsmiBox = document.getElementById("name");
const calisanDepartmentBox = document.getElementById("department");
const calisanSalaryBox = document.getElementById("salary");
const calisanEkleButton = document.getElementById("calisanEkleButton");
const employeesTable = document.getElementById("employeesTable");

calisanEkleButton.addEventListener("click", action);




window.addEventListener('DOMContentLoaded', (event) => {
    
    
    const requests = new Requests ();
    //const ui = new UI ();
    console.log(requests.getAllEmployees ());
});




function action (e) {

    e.preventDefault();

    calisanIsmiBoxValue = calisanIsmiBox.value;
    calisanDepartmentBoxValue = calisanDepartmentBox.value;
    calisanSalaryBoxValue = calisanSalaryBox.value;

    

}