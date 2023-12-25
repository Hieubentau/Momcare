import { VALIDATION_STATUS } from '../../config'

export const isEmailValid = (email) => {
  const emailRegex = /\S+@\S+\.\S+/
  if (!emailRegex.test(email)) {
    return {
      status: VALIDATION_STATUS.INVALID,
      message: 'Định dạng email không hợp lệ'
    }
  }

  return {
    status: VALIDATION_STATUS.VALID
  }
}
export const isPasswordValid = (password) => {
  if (password.length < 6) {
    return {
      status: VALIDATION_STATUS.INVALID,
      message: 'Mật khẩu phải có ít nhất 6 ký tự'
    }
  }
  // check if password contains at least one number
  else if (!/\d/.test(password)) {
    return {
      status: VALIDATION_STATUS.INVALID,
      message: 'Mật khẩu phải chứa ít nhất 1 số'
    }
  }
  // check if password contains at least one lowercase letter
  else if (!/[a-z]/.test(password)) {
    return {
      status: VALIDATION_STATUS.INVALID,
      message: 'Mật khẩu phải chứa ít nhất 1 chữ thường'
    }
  }
  // check if password contains at least one uppercase letter
  else if (!/[A-Z]/.test(password)) {
    return {
      status: VALIDATION_STATUS.INVALID,
      message: 'Mật khẩu phải chứa ít nhất 1 chữ hoa'
    }
  }
  // check if password contains at least one special character
  else if (!/[@#$%^&+=]/.test(password)) {
    return {
      status: VALIDATION_STATUS.INVALID,
      message: 'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (!@#$%^&+=)'
    }
  }

  return {
    status: VALIDATION_STATUS.VALID
  }
}
const nameRegex = /^[a-zA-Z\s]*$/
function removeAscent(str) {
  if (str === null || str === undefined) {
    return str
  }
  str = str.toLowerCase()
  console.log(str)
  str = str.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
  str = str.replace(/[èéẹẻẽêềếệểễ]/g, 'e')
  str = str.replace(/[ìíịỉĩ]/g, 'i')
  str = str.replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
  str = str.replace(/[ùúụủũưừứựửữ]/g, 'u')
  str = str.replace(/[ỳýỵỷỹ]/g, 'y')
  str = str.replace(/đ/g, 'd')
  return str
}
export const isNameValid = (name) => {
  // check if name contains at least one word
  if (!/\w/.test(name)) {
    return {
      status: VALIDATION_STATUS.INVALID,
      message: 'Tên phải chứa ít nhất 1 từ'
    }
  }
  // check if the name contains only letters and spaces
  else if (!nameRegex.test(removeAscent(name))) {
    return {
      status: VALIDATION_STATUS.INVALID,
      message: 'Tên chỉ được chứa chữ cái và khoảng trắng'
    }
  }
  const refactored = refactorName(name)
  return {
    status: VALIDATION_STATUS.VALID,
    refactor: refactored
  }
}

const refactorName = (name) => {
  const words = name.split(' ')
  const newWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
  return newWords.join(' ')
}

export const isAgeValid = (age) => {
  if (age < 1) {
    return {
      status: VALIDATION_STATUS.INVALID,
      message: 'Tuổi phải lớn hơn 0'
    }
  } else if (age > 150) {
    return {
      status: VALIDATION_STATUS.INVALID,
      message: 'Bạn có chắc mình đã sống hơn 150 tuổi chưa?'
    }
  }

  return {
    status: VALIDATION_STATUS.VALID
  }
}

export const isPhoneNumberValid = (phoneNumber) => {
  const phoneNumberRegex = /(84|0[3|5|7|8|9])+([0-9]{8,10})\b/
  if (!phoneNumberRegex.test(phoneNumber)) {
    return {
      status: VALIDATION_STATUS.INVALID,
      message: 'Số điện thoại không hợp lệ'
    }
  }

  return {
    status: VALIDATION_STATUS.VALID
  }
}
