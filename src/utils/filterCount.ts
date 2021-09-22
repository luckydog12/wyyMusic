const tenThousand = Math.pow(10, 4)
const oneHundredMillion = Math.pow(10, 8)

export const filterCount = (count: number): string => {
  if (count > tenThousand) {
    return `${(count / tenThousand).toFixed(1)}万`
  } else if (count > oneHundredMillion) {
    return `${(count / oneHundredMillion).toFixed(1)}亿`
  } else {
    return count + ""
  }
}
