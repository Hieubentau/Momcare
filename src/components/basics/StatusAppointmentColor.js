import React from 'react'
import { useTheme } from 'react-native-paper'

function statusAppointmentColor(appointmentStatus) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme()
  const themeColor = theme.colors.primary
  switch (appointmentStatus) {
    case 'CONFIRM':
      return themeColor
    case 'COMPLETED':
      return 'green'
    case 'UNCOMFIRM':
      return 'red'
    default:
      return 'black'
  }
}

export default statusAppointmentColor
