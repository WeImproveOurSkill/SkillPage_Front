export const checkPassword = (str) => {
  const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9^\W_]{8,20}$/;
  const result = regexp.test(str);

  if (!result) {
    alert(
      'Passwords must contain at least eight characters, including at least 1 letter and 1 number.'
    );
  }
  return result;
};
