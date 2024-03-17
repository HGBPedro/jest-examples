import masks from './masks';

describe('Masks function tests', () => {
  describe('CPF mask tests', () => {
    const tests = [
      { inputValue: '05911608030', expected: '059.116.080-30' },
      { inputValue: '059.116.080-30', expected: '059.116.080-30' },
      { inputValue: '05911', expected: '059.11' },
      { inputValue: 'abcdefghijk', expected: '' },
      { inputValue: 'abcde05911fghijk', expected: '059.11' },
      { inputValue: 'a1b2c3d4ef5ghi6jk78l9mnop10', expected: '123.456.789-10' },
      { inputValue: '059116080301234567891011', expected: '059.116.080-30' },
      { inputValue: 'jshagfdjk05911608030', expected: '059.116.080-30' },
    ]

    test.each(tests)('Format to CPF mask', ({ inputValue, expected }) => {
      const value = masks(inputValue, 'cpf')
      expect(value).toBe(expected)
    })
  });

  describe('CNPJ masks tests', () => {
    const tests = [
      { inputValue: '74708616000158', expected: '74.708.616/0001-58' },
      { inputValue: '747086', expected: '74.708.6' },
      { inputValue: 'abcdefghijk', expected: '' },
      { inputValue: 'abcde74708616fghijk', expected: '74.708.616' },
      { inputValue: 'a1b2c3d4ef5ghi6jk78l9mnop10', expected: '12.345.678/910' },
      { inputValue: '747086160001581234567891011', expected: '74.708.616/0001-58' },
      { inputValue: 'jshagfdjk74708616000158', expected: '74.708.616/0001-58' },
      { inputValue: '74708616000158jshgfdsjah', expected: '74.708.616/0001-58' },
    ]

    test.each(tests)('Format to CNPJ mask', ({ inputValue, expected }) => {
      const value = masks(inputValue, 'cnpj')
      expect(value).toBe(expected)
    })
  });

  describe('Phone and cellphone tests', () => {
    describe('Cellphones: ', () => {
      const tests = [
        { inputValue: '97979523767', expected: '(97) 97952-3767' },
        { inputValue: '(97) 97952-3767', expected: '(97) 97952-3767' },
        { inputValue: '97979', expected: '(97) 979' },
        { inputValue: '979795237', expected: '(97) 97952-37' },
        { inputValue: 'dont accept any letters', expected: '' },
      ]

      test.each(tests)('Format to cellphone mask', ({ inputValue, expected }) => {
        const value = masks(inputValue, 'cellphone')
        expect(value).toBe(expected)
      })
    })
  });

  describe('RG tests', () => {
    const tests = [
      { inputValue: '393202318', expected: '39.320.231-8' },
      { inputValue: '39.320.231-8', expected: '39.320.231-8' },
      { inputValue: '39320', expected: '39.320' },
      { inputValue: 'dont accept letters', expected: '' },
    ]

    test.each(tests)('Format to RG mask', ({ inputValue, expected }) => {
      const value = masks(inputValue, 'rg')
      expect(value).toBe(expected)
    })
  });

  describe('CEP tests', () => {
    const tests = [
      { inputValue: '18015140', expected: '18015-140' },
      { inputValue: '18015-140', expected: '18015-140' },
      { inputValue: '1801', expected: '1801' },
      { inputValue: 'dont accept letters', expected: '' },
    ]

    test.each(tests)('Format to CEP mask', ({ inputValue, expected }) => {
      const value = masks(inputValue, 'cep')
      expect(value).toBe(expected)
    })
  });
});
