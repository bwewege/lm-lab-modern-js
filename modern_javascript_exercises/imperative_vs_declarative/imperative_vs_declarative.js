// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
  // for (let i = 0; i < passwords.length; i++) {
  //   const password = passwords[i];
  //   if (password.length >= 9) {
  //     longPasswords.push(password);
  //   }
  // }

  return passwords.filter((p) => p.length >= 9);
}
