const carName = [
    'Bugati',
    'Range Rover',
    'Breza',
    'BMW',
    'Thar',
  ];
  
  test('the car name has BMW on it', () => {
    expect(carName).toContain('BMW');
    expect(new Set(carName)).toContain('BMW');
  });