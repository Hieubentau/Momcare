import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'

import { Calendar } from 'react-native-calendars'

const CalendarComponent = (props) => {
  const { selectedDay, setSelectedDay } = props
  const theme = useTheme()
  const themeColor = theme.colors.primary
  return (
    <Calendar
      onDayPress={(day) => {
        setSelectedDay(day.dateString), console.log('selected day', day)
      }}
      markedDates={{
        [selectedDay]: {
          selected: true,
          disableTouchEvent: true
        }
      }}
      theme={{
        selectedDayBackgroundColor: themeColor,
        todayTextColor: themeColor,
        arrowColor: themeColor,
        textDayFontSize: 12
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default CalendarComponent
