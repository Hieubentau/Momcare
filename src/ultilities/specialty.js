export const getSpecialtyIcon = (specialty) => {
  switch (specialty) {
    case 'Pediatrics':
    case 'Nhi Khoa':
      return 'baby'
    case 'Surgery':
    case 'Phẫu Thuật':
      return 'scalpel'
    case 'Obstetrics and Gynecology':
    case 'Sản Phụ Khoa':
      return 'pregnant-woman'
    case 'Orthopedics':
    case 'Chấn Thương Chỉnh Hình':
      return 'bone'
    case 'Dermatology':
    case 'Da Liễu':
      return 'skin'
    case 'Ophthalmology':
    case 'Mắt':
      return 'eye'
    case 'Otolaryngology':
    case 'Tai Mũi Họng':
      return 'ear'
    case 'Neurology':
    case 'Thần Kinh':
    case 'Psychiatry':
    case 'Tâm Thần':
      return 'brain'
    case 'Cardiology':
    case 'Tim Mạch':
      return 'heart'
    case 'Gastroenterology':
    case 'Tiêu Hóa':
      return 'stomach'
    case 'Nephrology':
    case 'Urology':
    case 'Thận':
      return 'kidney'
    case 'Endocrinology':
    case 'Nội Tiết':
      return 'endocrine'
    case 'Hematology':
    case 'Huyết Học':
      return 'blood'
    case 'Infectious Disease':
    case 'Bệnh Truyền Nhiễm':
      return 'virus'
    case 'Allergy and Immunology':
    case 'Dị Ứng':
      return 'allergy'
    case 'Rheumatology':
    case 'Thấp Khớp':
      return 'joint'
    case 'Pulmonology':
    case 'Hô Hấp':
      return 'lung'
    case 'Radiology':
    case 'X Quang':
      return 'x-ray'
    case 'Anesthesiology':
    case 'Gây Mê Hồi Sức':
      return 'anesthesia'
    case 'Dentistry':
    case 'Nha Khoa':
      return 'tooth'
    default:
      return 'stethoscope'
  }
}
