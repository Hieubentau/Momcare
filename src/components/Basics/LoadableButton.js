import { Button } from 'react-native-paper'

export const LoadableButton = ({ children, isLoading, ...others }) => {
  return (
    <Button
      {...others}
      loading={isLoading}
      disabled={isLoading}
      contentStyle={{
        height: '100%',
        width: '100%'
      }}
    >
      {children}
    </Button>
  )
}
