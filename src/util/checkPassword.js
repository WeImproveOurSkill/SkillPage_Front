export const checkId = (str) => {
  const regexp = /^[a-z]+[a-z0-9]{5,19}$/g;
  const result = regexp.test(str);

  if (!result) {
    alert('아이디를 영문자 또는 숫자 6~20자로 입력해주세요');
  }
  return result;
};

export const checkPassword = (str) => {
  const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9^\W_]{8,20}$/;
  const result = regexp.test(str);

  if (!result) {
    alert('비밀번호를 영문자 또는 숫자 8~20자로 입력해주세요.');
  }
  return result;
};

export const checkEmail = (str) => {
  const regexp =
    // eslint-disable-next-line
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const result = regexp.test(str);

  if (!result) {
    alert('이메일 형식을 올바르게 입력해주세요.');
  }
  return result;
};

export const checkPhoneNumber = (str) => {
  const regexp = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  const result = regexp.test(str);

  if (!result) {
    alert('휴대폰 번호는 숫자만 입력해주세요.');
  }
  return result;
};
