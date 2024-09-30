import { describe, it, expect } from 'vitest'
import { formatPrice } from './../../utils/index';

describe('formatPrice', () => {
  it("Should format price accordingly", () => {
    const result = formatPrice('299000')
    const expectedResult = '$299.000'
    expect(result).toEqual(expectedResult)
  })
})
