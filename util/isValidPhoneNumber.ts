export const isValidPhoneNumber = (phone: string) => {
  const pattern = /^(09|08)\d{8}$/;
  return pattern.test(phone.trim());
};