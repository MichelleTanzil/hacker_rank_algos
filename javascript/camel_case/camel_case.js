function camelcase(s) {
  return s.replace(/([A-Z])/g, " $1").split(" ").length;
}
