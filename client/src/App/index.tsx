import { useState } from 'react'
import styles from './styles.module.scss'

export const App = () => {
  const [value, setValue] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getRandomNumber = async () => {
    setIsLoading(true)
    const res = await fetch(`${import.meta.env.VITE_API_URL}/random`)
    if (!res.ok) return setIsLoading(false)
    try {
      const result = await res.json()
      setValue(result.value)
    } catch {
      setValue(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.root}>
      <button
        disabled={isLoading}
        className={styles.button}
        onClick={getRandomNumber}
      >
        Get random number
      </button>
      {value && <code className={styles.value}>{value}</code>}
    </div>
  )
}
