export const handlePhoneFormat = (phoneNumber) => {
  let match = phoneNumber.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ')' + match[2] + '.' + match[3] + '-' + match[4];
  }
};
