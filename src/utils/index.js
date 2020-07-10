export const generateHistogram = () => {
  const data = []
  let date = new Date()
  for (let i = 0; i < 12; i += 1) {
    data.push({
      date: date.getTime(),
      value: parseInt((Math.random(0.8) + 0.1) * 12)
    })
    date.setMonth(date.getMonth() + 1)
  }
  return data
}
