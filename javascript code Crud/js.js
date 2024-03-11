/*************************************/
/***********OPEN ICON-HEADER*********/
const v1=document.querySelector(".btn");
const dis=document.querySelector(".login")

var dispaly=1;
v1.addEventListener("click",function()
{
    if(dispaly==1)
    {
        dis.style.display="inline-block"
        dispaly=0;
    }
    else
    {
       dis.style.display="none"
        dispaly=1;
    }
})
document.getElementById('result').innerHTML=localStorage.getItem('email')

document.getElementById('result1').innerHTML=localStorage.getItem('email')

document.getElementById('result2').innerHTML=localStorage.getItem('email')

document.getElementById('result3').innerHTML=localStorage.getItem('email').slice(0,6);



/*************************************/
/***********VALIDATE ****************/
function validateform()
{
  let email=document.getElementById("email1").value  
  let name=document.getElementById("name1").value
  var b=true;
  
  if(name=="")
  {
    alert("name is required")
    b=false
    return b;
  }
  if(email=="")
  {
    alert("email is required")
    b=false
    return b;
  }
  else if(!email.includes("@"))
  {
     alert("email is invalied")
     b=false
     return b;
  }
  else
  {
    return b;
  }
}

function validateform1()
{
    let email=document.getElementById("uemail1").value  
    let name=document.getElementById("uname1").value

    var b=true;
  
  if(name=="")
  {
    alert("name is required")
    b=false
    return b;
  }
  if(email=="")
  {
    alert("email is required")
    b=false
    return b;
  }
  else if(!email.includes("@"))
  {
     alert("email is invalied")
     b=false
     return b;
  }
  else
  {
    return b;
  }
}
/*************************************/
/***********READ data1****************/
function readdata1()
{
    var data1;

    if(localStorage.getItem("data1")==null)
    {
       
        data1=[];
    }
    else
    {

      
        data1=JSON.parse(localStorage.getItem("data1"))
      
    }
  
  
    var html=""

    // var table=document.getElementById("t_body")
    data1.forEach(function(element,index)
    {
        html +="<tr>"
        html +="<td>"+element.name1+"<td>";
        html +="<td>"+element.email1+"<td>";
        html +="<td>"+index+"<td>";
        html +=
        '<td><button onclick="deletedata1('+index+')" class="btn btn-danger">Delete</button><button onclick="updatedata1('+index+')" class="btn btn-warning m-2" id="update">Edit</button></td>';
        
        html+="<tr/>";
    })
  
    document.getElementById("bodydata").innerHTML=html;
    // table.innerHTML=html;
// reset()
}

function reset()
{
 document.getElementById('email1').value=""
 document.getElementById("name1").value=""
}

const add=document.querySelector('.add')

const form=document.querySelector('.form-table')
add.addEventListener('click',function()
{
form.style.display="inline-block";
})

/*************************************/
/***********CLOSE DIALOG(*************/
const can=document.querySelector('.cancel')
can.addEventListener('click',function()
{
    form.style.display="none";
})
/*************************************/
/***********ADD  DIALOG(*************/

const n=document.querySelector('.onadd')

n.addEventListener('click',function()
{
    
  
   if(validateform()===true)
   {
  
    let email=document.getElementById("email1").value
    let name=document.getElementById("name1").value
    var data1;
    if(localStorage.getItem("data1")==null)
    {
     data1=[];
   
    }
    else
    {
        console.log(JSON.parse(localStorage.getItem("data1")))
    alert(JSON.parse(localStorage.getItem("data1")))
       data1=JSON.parse(localStorage.getItem("data1"))
    }
    data1.push(
        {
            email1:email,
            name1:name
        }
    )
   
    localStorage.setItem("data1",JSON.stringify(data1))
   readdata1()
   
   }
   else
   {
    alert("condition fail")
   }
})
/***********DELETE data1*********** */
function deletedata1(index)
{
    var data1;
    if(localStorage.getItem("data1")==null)
    {
        data1=[]
    }
    else
    {
        data1=JSON.parse(localStorage.getItem("data1"))
    }

    data1.splice(index,1);

    localStorage.setItem("data1",JSON.stringify(data1))

    readdata1();
}

function updatedata1(index)
{
    const form=document.querySelector('.form-table')
add.addEventListener('click',function()
{
form.style.display="inline-block";
})
    document.querySelector(".form-table1").style.display="block";
    document.getElementById("onupdate").style.display="block";
    document.getElementById("add-user").style.display="none";
    var data1;
    if(localStorage.getItem("data1")==null)
    {
        data1=[]
    }
    else
    {
        data1=JSON.parse(localStorage.getItem("data1"))
    }
    alert(JSON.parse(localStorage.getItem("data1")));
    alert(JSON.stringify(data1))
    alert(JSON.stringify(data1[index]))
    alert(index)
    alert(data1[index].email1)
    document.getElementById('uemail1').value=data1[index].email1;
    document.getElementById('uname1').value=data1[index].name1;

    document.getElementById("onupdate").addEventListener("click",function()
    {
        alert("hi")
        if(validateform1()==true)
        {
            alert(JSON.stringify(data1[index]))
            data1[index].email1=document.getElementById('uemail1').value
            data1[index].name1=document.getElementById('uname1').value
            alert(JSON.stringify(data1[index]))
            alert("after")
            
            localStorage.setItem("data1",JSON.stringify(data1))
// alert(localStorage.getItem(data1))
        }
        readdata1()
    })
    // document.getElementById("onupdate").style.display="none"
    // document.getElementById("add-user").style.display="block"

}
