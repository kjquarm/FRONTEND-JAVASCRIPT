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
