import Person from './Person';

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor (name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }
  
  public get enrollment() {
    return this._enrollment;
  }
  public set enrollment(value) {
    if (value.length < 16) throw new Error('Matricula deve possuir 16 caracteres');
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('Só pode haver 4 notas de provas')
    this._examsGrades = value;
  }
  
  public get worksGrades(): number[] {
    return this._worksGrades;
  }
  public set worksGrades(value: number[]) {
    if (value.length > 2) throw new Error('Só pode haver 2 notas de trabalhos')
    this._worksGrades = value;
  }

  sumGrades(): number {
    const sum = this._examsGrades.reduce((a, b) => a + b)
    return sum;
  };

  sumAverageGrades(): number {
    const average = this.sumGrades() / this._examsGrades.length;
    return average;
  };

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }
}