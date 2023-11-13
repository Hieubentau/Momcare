import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { AntDesign } from '@expo/vector-icons'

const CalendarComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.monthYear}>Month, Year</Text>
        <View style={styles.arrows}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="arrowright" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Calendar
        style={styles.calendar}
        theme={{
          textSectionTitleColor: 'black',
          selectedDayBackgroundColor: '#2196F3',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#2196F3',
          dayTextColor: 'black',
          textDisabledColor: 'gray',
          monthTextColor: 'black',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: 'gainsboro',
    padding: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  monthYear: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  arrows: {
    flexDirection: 'row'
  },
  calendar: {
    borderRadius: 8
  }
})

export default Calendar
