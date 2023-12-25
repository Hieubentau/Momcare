import { Appbar } from 'react-native-paper'

const MainTabScreenHeader = (props) => {
  const { title, children } = props

  return (
    <Appbar.Header statusBarHeight={0}>
      {title ? (
        <Appbar.Content
          title={title}
          titleStyle={{
            fontSize: 24,
            fontWeight: 'bold'
          }}
        />
      ) : undefined}
      {children}
    </Appbar.Header>
  )
}

export default MainTabScreenHeader
