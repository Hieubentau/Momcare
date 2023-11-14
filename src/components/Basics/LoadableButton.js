import { Button } from 'react-native-paper'

export const LoadableButton = ({ children, isLoading, ...others }) => {
  return (
    <Button {...others} loading={isLoading} disabled={isLoading}>
      {children}
    </Button>
  )
}
