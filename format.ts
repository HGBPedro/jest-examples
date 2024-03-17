const format = {
  onlyDigits: (value: string | undefined) => {
    if (!value && value !== '0') return ''
    return value.replace(/\D/g, '')
  },

  onlyLettersAndNumbers: (value : string | undefined): string => {
    if (!value && value !== '0') return ''
    return value.replace(/\./g, '').replace(/-/g, '').toUpperCase()
  },

  formatBRL: (value: number | undefined): string => {
    if (!value) return 'R$ ' + 0
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  },

  capitalize: (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
  },
}

export default format
