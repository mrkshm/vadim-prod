interface sortArg {
  acf: {
    ordre: number;
  };
}

export function sortInvChrono(a: sortArg, b: sortArg) {
  if (a.acf.ordre > b.acf.ordre) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
}

export function sortChrono(a: sortArg, b: sortArg) {
  if (a.acf.ordre < b.acf.ordre) {
    return -1;
  }
  if (a.acf.ordre > b.acf.ordre) {
    return 1;
  }
  return 0;
}
