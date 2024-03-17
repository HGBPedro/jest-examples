import format from "./format"

describe('Format funcions tests', () => {
  describe('onlyDigits', () => {
    const tests = [
      { inputValue: 'asdfh1234', expected: '1234' },
      { inputValue: 'skdfhskjf', expected: '' },
      { inputValue: '123456789', expected: '123456789' },
      { inputValue: '1234efghi', expected: '1234' },
      { inputValue: '/*-+,.<>/;?:\\|', expected: '' },
      { inputValue: 'no texts 123 and no spaces', expected: '123' },
      { inputValue: '', expected: '' }
    ]

    test.each(tests)('Format to onlyDigits', ({ inputValue, expected }) => {
      expect(format.onlyDigits(inputValue)).toBe(expected)
    })
  })

  describe('Only letters and numbers', () => {
    const tests = [
      { inputValue: 'ABC123def', expected: 'ABC123DEF' },
      { inputValue: '123456', expected: '123456' },
      { inputValue: '1234 abcd', expected: '1234 ABCD' },
      { inputValue: '0.05', expected: '005' },
      { inputValue: '', expected: '' },
      { inputValue: '!#$%&!@1%#%$!@', expected: '!#$%&!@1%#%$!@' },
      { inputValue: 'email@gmail.com', expected: 'EMAIL@GMAILCOM' },
      { inputValue: 'nome-sem-hifen', expected: 'NOMESEMHIFEN' },
      { inputValue: '__main__', expected: '__MAIN__' },
      { inputValue: undefined, expected: '' }
    ]

    test.each(tests)('Format to only letters and numbers', ({ inputValue, expected }) => {
      expect(format.onlyLettersAndNumbers(inputValue)).toStrictEqual(expected)
    })
  })

  describe('Format BRL', () => {
    const tests = [
      { inputValue: 50, expected: 'R$\xa050,00' },
      { inputValue: 0.10, expected: 'R$\xa00,10' },
      { inputValue: 500.45, expected: 'R$\xa0500,45' },
      { inputValue: 5.0, expected: 'R$\xa05,00' },
      { inputValue: 30330.00304, expected: 'R$\xa030.330,00' },
      { inputValue: 78654726.304, expected: 'R$\xa078.654.726,30' },
      { inputValue: 304331.10909876, expected: 'R$\xa0304.331,11' },
      { inputValue: 778.10969876, expected: 'R$\xa0778,11' },
      { inputValue: 255.99969876, expected: 'R$\xa0256,00' },
      { inputValue: 0, expected: 'R$ 0' },
      { inputValue: undefined, expected: 'R$ 0' },
      { inputValue: 1234.5678, expected: 'R$\xa01.234,57' }
    ]

    test.each(tests)('Format to BRL', ({ inputValue, expected }) => {
      expect(format.formatBRL(inputValue)).toStrictEqual(expected)
    })
  })

   describe('Capitalize', () => {
    const tests = [
      { inputValue: 'capitalize this', expected: 'Capitalize this' },
      { inputValue: 'No changes', expected: 'No changes' },
      { inputValue: '123456abcd', expected: '123456abcd' },
      { inputValue: 'aLL CAPS', expected: 'ALL CAPS' },
      { inputValue: '', expected: '' }
    ]

    test.each(tests)('Format to capitalize', ({ inputValue, expected }) => {
      const value = format.capitalize(inputValue)
      expect(value).toBe(expected)
    })
  })
})
