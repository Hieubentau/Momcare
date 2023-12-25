import React from 'react'
import Animated from 'react-native-reanimated'

export const AnimatedViewSwitcher = (props) => {
  const { views } = props

  return (
    <Animated.View>
      <Animated.FlatList
        data={views}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => item}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
    </Animated.View>
  )
}
