test('there is no  A in Good Morning', () => {
    expect('Good Morning').not.toMatch(/A/);
  });
  
  test('but there is a "Morning" in Good Morning', () => {
    expect('Good Morning').toMatch(/Morning/);
  });