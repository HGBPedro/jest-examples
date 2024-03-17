type _maskEnum = 'cpf' | 'cnpj' | 'rg' | 'cellphone' | 'cep'

const cpfMask = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

const cnpjMask = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

const cellphoneMask = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const rgMask = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/[^0-9x]/gi, '')
    .replace(/([0-9x]{2})([0-9x])/i, '$1.$2')
    .replace(/([0-9x]{3})([0-9x])/i, '$1.$2')
    .replace(/([0-9x]{3})([0-9x])/i, '$1-$2')
    .replace(/(-[0-9x]{1})([0-9x])/i, '$1$2')
    .replace(/([0-9x]{2})(\.)([0-9x]{3})(\.)([0-9x]{3})(-)([0-9x]{1})([0-9x])/, '$1$3$5$7$8')
    .replace(/([0-9x]{9,14})([0-9x])/i, '$1-$2')
    .toUpperCase()
}

const cepMask = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d)/i, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

function masks (value?: string | number, mask?: _maskEnum): string {
  if (!value || typeof value === 'object') return ''
  const result = String(value)
  if (!mask) return result
  switch (mask.toLocaleLowerCase()) {
    case 'cpf':
      return cpfMask(result)
    case 'cnpj':
      return cnpjMask(result)
    case 'cellphone':
      return cellphoneMask(result)
    case 'rg':
      return rgMask(result)
    case 'cep':
      return cepMask(result)
    default:
      return result
  }
}

export default masks
