interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  contract: boolean;
};

const teacher1: Teacher = {
  firstName: "Akwasi",
  lastName: "London",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "Accra",
  contract: false,
};


console.log(teacher1);

interface Director {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  numberOfReports: number;
  location: string;
  contract: boolean;
};

const director1: Director = {
  firstName: "Kofi",
  lastName: "Mireku",
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  numberOfReports: 17,
  location: "Kumasi",
  contract: false,
};

console.log(director1);
