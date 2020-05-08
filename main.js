// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor.
//  The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice


console.log("so happy to be here")

const doctors = [
    {doctor: "Dr. Lucy Shepherd"},
    {doctor: "Dr. Mark Savage"},
    {doctor: "Dr. Adrian Fold"}
]

const specialties = [
    {specialty: "Orthopedic"},
    {specialty: "Oncologist"},
    {specialty: "Pediatrician"}
]

const addresses = [
    {address: "123 Love ln"},
    {address: "246 Pickup rd"},
    {address: "472 Maple st"}
]

const createObjDoctor = (name, specialty, address) => ({
    doctor: name,
    specialty: specialty,
    address: address
})


const newDoctorObj = createObjDoctor(doctors[1], specialties[1], addresses[1])

console.log(newDoctorObj)