export const API_URL = 'https://00d7-14-191-184-205.ngrok-free.app'
export const GG_MAP_API_KEY = 'AIzaSyDc-cC31-9hRA4w3DgZzu8fqAMt-mgtwkw'
export const REQ_RETURN_STATUS = Object.freeze({
  OK: 0,
  USER_ERROR: 1,
  SERVER_ERROR: 2
})

export const VALIDATION_STATUS = Object.freeze({
  VALID: 0,
  INVALID: 1
})

export const ROLE = Object.freeze({
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR',
  HOSPITAL: 'HOSPITAL',
  ADMIN: 'ADMIN'
})

export const AS_STATUS = Object.freeze({
  OK: 0,
  ERROR: 1,
  // Null or Undefined
  NORU: 2
})

export const AS_KEY = Object.freeze({
  MEDICAL_SPECS: 'medical-specs',
  TOKEN: 'token'
})
