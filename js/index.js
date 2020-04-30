
function submit()
{
    var student = new Array()
    var year = document.getElementById("year").value
    var section = document.getElementById("section").value
    student.push(document.getElementById("enroll").value)
    student.push(document.getElementById("name").value)
    student.push(document.getElementById("age").value)
    student.push(document.getElementById("address").value)
    if(document.getElementById("male").checked)
    {
        student.push("Male")
    }
    else
    {
        student.push("Female")
    }
    student.push(year)
    student.push(section)
    window.localStorage.setItem("studentDetails",JSON.stringify(student))
    window.location.href = "second.html"
    
}

function view()
{
    var student = JSON.parse(window.localStorage.getItem("studentDetails"))
    document.getElementById("enrollSet").innerHTML = student[0]
    document.getElementById("nameSet").innerHTML = student[1]
    document.getElementById("ageSet").innerHTML = student[2]
    document.getElementById("genderSet").innerHTML = student[4]
    document.getElementById("addressSet").innerHTML = student[3]
    document.getElementById("yearSet").innerHTML = student[5]
    document.getElementById("sectionSet").innerHTML = student[6]
}