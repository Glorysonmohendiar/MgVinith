test('there is no M in gloryson', () => {
    expect('Gloryson').not.toMatch(/M/);
  });
  
  test('but there is a "son" in Gloryson', () => {
    expect('Gloryson').toMatch(/son/);
  });