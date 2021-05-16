function assignment2(x, y) {
  for (i = 0; i <= y; ) {
    if (i % 2 == 0) {
      // separated by comma + space
      document.write(i + ", ");
      i += x;
    }
  }
}

assignment2(2, 100);
