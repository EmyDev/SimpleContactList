var rws, fname, contact 

function addRow(){
    fname = document.getElementById("name").value
    contact = document.getElementById("contact").value
    var MyTable = document.getElementById("table1");
    rws = MyTable.getElementsByTagName('tr');
    var NewRow = MyTable.insertRow(rws[rws.length]);
    var Newcell1 = NewRow.insertCell(0);
    var Newcell2 = NewRow.insertCell(1);
    Newcell1.innerHTML = fname;
    Newcell2.innerHTML = contact;
    document.getElementById("name").value ="";
    document.getElementById("contact").value = "";
    Newcell1.classList.add("td");
    Newcell2.classList.add("td"); 
}

