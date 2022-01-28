const getAge = (age) => {
  if (age < 10) {
    return "<10";
  } else if (age >= 10 && age <= 50) {
    return "10-50";
  } else {
    return "50+";
  }
};

export default getAge;
