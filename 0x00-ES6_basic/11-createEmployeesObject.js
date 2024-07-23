export default function createEmployeesObject(departmentName, employees) {
  let Emp = {
    [departmentName] : employees
  }
return Emp;
}
