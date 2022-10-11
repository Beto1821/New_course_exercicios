
class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[] =Array();
  private _worksGrades: number[] = Array();

  constructor(enrollment: string, name: string, exams: number[], grades: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrades = exams;
    this.worksGrades = grades;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length !== 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }

    this._worksGrades = value;
  }

  sumGrades():number {
    return [...this.examsGrades, ...this.worksGrades]
    .reduce((prevGrade, grade) => {
      grade += prevGrade;
      return grade;
    }, 0);
  }
}

// Para testar!

const student1 = new Student('202001011', 'Maria da Silva', [5,6,7,3], [6,7]);

console.log(student1);
console.log('Soma das notas ', student1.sumGrades());


const student2 = new Student('202001012', 'João da Silva', [5, 1, 7, 8], [9, 7]);

console.log(student2);
console.log('Soma das notas ', student2.sumGrades());

