const $ = require('jquery')
const fs = require('fs')
const filename = 'mycontacts'
let sno = 0

$('#btn-submit').on('click', () => {
    let name = $('#name').val()
    let email = $('#email').val()
    
    fs.appendFile('mycontacts', name + ',' + email + '\n', (err)=> {
    if (err) throw err;
    console.log('Saved!');
})

//  addEntry(name, email)

})

function addEntry(name, email) {
  if(name && email) {
     sno++
     let updateString = '<tbody><tr><td>' + sno + '</td><td>' + name +'</td><td>'
     + email + '</td></tr>'
     $('#contact-table').append(updateString)
  }
}

function loadAndDisplayContacts() {  
  //Check if file exists
  if(fs.existsSync(filename)) {
     let data = fs.readFileSync(filename, 'utf8').split('\n')
     data.forEach((contact, index) => {
     let [ name, email ] = contact.split(',')

     addEntry(name, email)
     })

} else {
     console.log("File Doesn\'t Exist. Creating new file.")
     fs.writeFile(filename, '', (err) => {
        if(err)
           console.log(err)
        })
    }
}

loadAndDisplayContacts()




// let fs = require('fs');
// const filename = 'mycontacts';  //creating a file name
// let sno = 0; // declaire a serial number starting from 0

// // call the button using jquery
// // targetting that btn-submit, start jquery with dollar sign
// $('#btn-submit') .on('click', () =>{//using event handler
//     let name = $('#name').val();  // assigning values to the id's in the form for the variables
//     let email = $('#email').val();

//     fs.appendFile('contacts', name + ',' + email + '\n') // append the filename that will be created
    
//     addEntry(name, email);
// })

// //create a function to add an entry inside the form we created

// function addEntry(name, email) {// the function takes the two parameters for variables declaired above
//     if(!name && !email) {
//         alert('please fill in both fields')
//     }
//     else if(name && email) {
//         sn++ //increase the serial number if they exist
//         //populating table with table data
//         //we will use table body, table row and table data unlike electron with just <tr> and <td>
//         let data = '<tbody><tr><td>' + sn + '</td>' + '<tr><td>' + name + '</td>' + email + '</td><tr></tbody>'
//         $('#contact-table').append(data);
//     }
// }

// //add another function so that it can load and display the file

// function loadAndDisplayContact(){
//     //Check if file exists
//    if(fs.existsSync(filename)) {
//     let data = fs.readFileSync(filename, 'utf8').split('\n')
    
//     data.forEach((contact, index) => {
//        let [ name, email ] = contact.split(',')
//        addEntry(name, email)
//     })
 
//  } else {
//      alert("File Doesn\'t Exist. Create a new file")
//     console.log("File Doesn\'t Exist. Creating new file.")
//     fs.writeFile(filename, '', (err) => {
//        if(err)
//           console.log(err)
//     })
//  }
// }

// loadAndDisplayContact();

//Home try;

// let $ = require('jquery')
// let fs = require('fs')
// let filename = 'contacts'
// let sno = 0

// $('#btn-submit').on('click', () => {
//     let name = $('#name').val()
//     let email = $('#email').val()

//     fs.appendFile('contacts', name + ',' + email + '\n')

//     addEntry(name, email)
// })

// function addEntry(name, email) {
//     if(name && email) {
//         sno++
//         let updateString = '<tr><td>' + sno + '<td><td>' + name + '<td><td>' + email + '</td></tr>'
//         $('#contact-table').append(updateString)
//     }
// }

// function loadAndDisplayContacts() {

//     //check if file exists
//     if(fs.existsSync(filename)) {
//         let data = fs.readFileSync(filename, 'utf8').split('\n')

//         data.forEach((contact, index) => {
//             let[name, email] = contact.split(',')
//             addEntry(name, email)
//         })
//     } else {
//         console.log("File Doesn\'t Exist. Creating new file.")
//         fs.writeFile(filename, '', (err) => {
//             if(err)
//                 console.log(err)
//         })
//     }
// }

// loadAndDisplayContacts()