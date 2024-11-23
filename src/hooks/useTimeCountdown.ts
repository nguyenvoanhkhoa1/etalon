import { useEffect, useState } from "react"

type Countdown = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const useTimeCountdown = (initialSeconds: number): Countdown => {
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds)

  useEffect(() => {
    if (timeLeft <= 0) return

    const timerId = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0))
    }, 1000)

    return () => clearInterval(timerId)
  }, [timeLeft])

  const days = Math.floor(timeLeft / (24 * 3600))
  const hours = Math.floor((timeLeft % (24 * 3600)) / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  return { days, hours, minutes, seconds }
}

export default useTimeCountdown
