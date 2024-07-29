interface Teacher  {
  readonly firstName : string;
  readonly lastName : string;
  fullTimeEmployee : boolean;
  yearsOfExperience ?: number;
  location : string;
  [key: string]: any;
};

interface Directors extends Teacher {
  numberOfReports: number;
};

interface StudentClassInterface {
  _firstName: string;
  _lastName: string;
};

interface StudentClassConstructorInterface {
  new (firstName: string, lastName: string): StudentClassInterface;
}
class StudentClass implements StudentClassInterface {
  _firstName : string;
  _lastName : string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }


}