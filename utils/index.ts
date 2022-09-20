export const formatTime = (timer: number) => {
  const getSeconds = `0${timer % 60}`.slice(-2)
  const minutes = Math.floor(timer / 60)
  const getMinutes = `0${minutes % 60}`.slice(-2)
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

  return `${getHours}:${getMinutes}:${getSeconds}`
}

//capitalize only the first letter of the string.
export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)
