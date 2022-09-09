function changeSwitchImageX(){
    var fx = document.getElementById("faultx");
    var imageX = document.getElementById("switchx");

    var inX = document.getElementById("inputx");
    if(inX.src.match("images/switchoff.jpg")) {
        inX.src = "images/switchon.jpg";
    }
    else {
       inX.src = "images/switchoff.jpg"; 
    }

    if(fx.value == "No fault" && imageX.src.match("switchon"))
    {
        imageX.src = "images/switchoff.jpg";
    }
    else if(fx.value == "No fault")
    {
        imageX.src = "images/switchon.jpg";
    }
    checkOutputC();
}

function changeFaultX() {
    var buttonx = document.getElementById("faultx");
    var imageX = document.getElementById("switchx");

    if(buttonx.value == "No fault")
    {
        buttonx.value = "Stuck at 0";
        imageX.src = "images/switchoff.jpg";
    }
    else if(buttonx.value == "Stuck at 0")
    {
        buttonx.value = "Stuck at 1";
        imageX.src = "images/switchon.jpg";
    }
    else    
        buttonx.value = "No fault";
    checkOutputC();
}

function changeSwitchImageY(){
    var fy = document.getElementById("faulty");
    var imageY = document.getElementById("switchy");

    var inY = document.getElementById("inputy");
    if(inY.src.match("images/switchoff.jpg")) {
        inY.src = "images/switchon.jpg";
    }
    else {
       inY.src = "images/switchoff.jpg"; 
    }

    if(fy.value == "No fault" && imageY.src.match("switchon"))
    {
        imageY.src = "images/switchoff.jpg";
    }
    else if(fy.value == "No fault")
    {
        imageY.src = "images/switchon.jpg";
    }
    checkOutputC();
}

function changeFaultY() {
    var buttony = document.getElementById("faulty");
    var imageY = document.getElementById("switchy");

    if(buttony.value == "No fault")
    {
        buttony.value = "Stuck at 0";
        imageY.src = "images/switchoff.jpg";
    }
    else if(buttony.value == "Stuck at 0")
    {
        buttony.value = "Stuck at 1";
        imageY.src = "images/switchon.jpg";
    }
    else    
        buttony.value = "No fault";
    checkOutputC();
}

function changeSwitchImageZ(){
    var fz = document.getElementById("faultz");
    var imageZ = document.getElementById("switchz");

    var inZ = document.getElementById("inputz");
    if(inZ.src.match("images/switchoff.jpg")) {
        inZ.src = "images/switchon.jpg";
    }
    else {
       inZ.src = "images/switchoff.jpg"; 
    }

    if(fz.value == "No fault" && imageZ.src.match("switchon"))
    {
        imageZ.src = "images/switchoff.jpg";
    }
    else if(fz.value == "No fault")
    {
        imageZ.src = "images/switchon.jpg";
    }
    checkOutputC();
}

function changeFaultZ() {
    var buttonz = document.getElementById("faultz");
    var imageZ = document.getElementById("switchz");

    if(buttonz.value == "No fault")
    {
        buttonz.value = "Stuck at 0";
        imageZ.src = "images/switchoff.jpg";
    }
    else if(buttonz.value == "Stuck at 0")
    {
        buttonz.value = "Stuck at 1";
        imageZ.src = "images/switchon.jpg";
    }
    else    
        buttonz.value = "No fault";
    checkOutputC();
}

function changeFaultXor1() {
    var button1 = document.getElementById("faultxor1");

    if(button1.value == "No fault")
    {
        button1.value = "Stuck at 0";
    }
    else if(button1.value == "Stuck at 0")
    {
        button1.value = "Stuck at 1";
    }
    else
        button1.value = "No fault";
    checkOutputC();
}

function changeFaultXor2() {
    var button1 = document.getElementById("faultxor2");

    if(button1.value == "No fault")
    {
        button1.value = "Stuck at 0";
    }
    else if(button1.value == "Stuck at 0")
    {
        button1.value = "Stuck at 1";
    }
    else
        button1.value = "No fault";
    checkOutputC();
}

function changeImageP() {
    var fp = document.getElementById("faultp");
    var imagep = document.getElementById("switchp");

    var inP = document.getElementById("inputp");
    if(inP.src.match("images/switchoff.jpg")) {
        inP.src = "images/switchon.jpg";
    }
    else {
       inP.src = "images/switchoff.jpg"; 
    }

    if(fp.value == "No fault" && imagep.src.match("switchon"))
    {
        imagep.src = "images/switchoff.jpg";
    }
    else if(fp.value == "No fault")
    {
        imagep.src = "images/switchon.jpg";
    }
    checkOutputC();
}
function changeFaultP() {

    var buttonp = document.getElementById("faultp");
    var imagep = document.getElementById("switchp");

    if(buttonp.value == "No fault")
    {
        buttonp.value = "Stuck at 0";
        imagep.src = "images/switchoff.jpg";
    }
    else if(buttonp.value == "Stuck at 0")
    {
        buttonp.value = "Stuck at 1";
        imagep.src = "images/switchon.jpg";
    }
    else    
        buttonp.value = "No fault";
    checkOutputC();
}

function changeFaultC() {
    var buttonc = document.getElementById("faultc");

    if(buttonc.value == "No fault")
    {
        buttonc.value = "Stuck at 0";
    }
    else if(buttonc.value == "Stuck at 0")
    {
        buttonc.value = "Stuck at 1";
    }
    else
        buttonc.value = "No fault";
    checkOutputC();
}

function checkOutputC(){
    var imageX = document.getElementById("switchx");
    var imageY = document.getElementById("switchy");
    var imageZ = document.getElementById("switchz");

    var imageC = document.getElementById("outputC");
    var imageP = document.getElementById("switchp");
    var fc, fxor1, fxor2;
    fc = document.getElementById("faultc");
    fxor1 = document.getElementById("faultxor1");
    fxor2 = document.getElementById("faultxor2");

    //Stuck at Fault for C
    if(fc.value == "Stuck at 0")
    {
        imageC.src = "images/ledoff.jpg";
        return;
    }
    else if(fc.value == "Stuck at 1")
    {
        imageC.src = "images/ledon.jpg";
        return;
    }

    //Stuck at Fault, Xor1 and Xor2
    if(fxor1.value == "No fault" && fxor2.value == "Stuck at 0")
    {
        if(imageX.src.match("images/switchon.jpg") && imageY.src.match("images/switchoff.jpg"))
            imageC.src = "images/ledon.jpg";
        else if(imageX.src.match("images/switchoff.jpg") && imageY.src.match("images/switchon.jpg"))
            imageC.src = "images/ledon.jpg";
        else 
            imageC.src = "images/ledoff.jpg";
        return;
    }
    else if(fxor1.value == "No fault" && fxor2.value == "Stuck at 1")
    {
        if(imageX.src.match("images/switchon.jpg") && imageY.src.match("images/switchon.jpg"))
            imageC.src = "images/ledon.jpg";
        else if(imageX.src.match("images/switchoff.jpg") && imageY.src.match("images/switchoff.jpg"))
            imageC.src = "images/ledon.jpg";
        else 
            imageC.src = "images/ledoff.jpg";
        return;
    }
    else if(fxor1.value == "Stuck at 0" && fxor2.value == "No fault")
    {
        if(imageZ.src.match("images/switchon.jpg") && imageP.src.match("images/switchoff.jpg"))
            imageC.src = "images/ledon.jpg";
        else if(imageZ.src.match("images/switchoff.jpg") && imageP.src.match("images/switchon.jpg"))
            imageC.src = "images/ledon.jpg";
        else 
            imageC.src = "images/ledoff.jpg";
        return;
    }
    else if(fxor1.value == "Stuck at 0" && fxor2.value == "Stuck at 0")
    {
        imageC.src = "images/ledoff.jpg";
        return;
    }
    else if(fxor1.value == "Stuck at 0" && fxor2.value == "Stuck at 1")
    {
        imageC.src = "images/ledon.jpg";
        return;
    }
    else if(fxor1.value == "Stuck at 1" && fxor2.value == "No fault")
    {
        if(imageZ.src.match("images/switchoff.jpg") && imageP.src.match("images/switchoff.jpg"))
            imageC.src = "images/ledon.jpg";
        else if(imageZ.src.match("images/switchon.jpg") && imageP.src.match("images/switchon.jpg"))
            imageC.src = "images/ledon.jpg";
        else 
            imageC.src = "images/ledoff.jpg";
        return;
    }
    else if(fxor1.value == "Stuck at 1" && fxor2.value == "Stuck at 0")
    {
        imageC.src = "images/ledon.jpg";
        return;
    }
    else if(fxor1.value == "Stuck at 1" && fxor2.value == "Stuck at 1")
    {
        imageC.src = "images/ledoff.jpg";
        return;
    }

    //no faults at XOR lines
    if(imageP.src.match("images/switchon.jpg"))
    {
        if(imageX.src.match("images/switchoff") && imageY.src.match("images/switchoff") && imageZ.src.match("images/switchoff"))
        {
            imageC.src = "images/ledon.jpg";
        }
        else if(imageX.src.match("images/switchoff") && imageY.src.match("images/switchon")&& imageZ.src.match("images/switchon"))
        {
            imageC.src = "images/ledon.jpg";
        }
        else if(imageX.src.match("images/switchon") && imageY.src.match("images/switchoff")&& imageZ.src.match("images/switchon"))
        {
            imageC.src = "images/ledon.jpg";
        }
        else if(imageX.src.match("images/switchon") && imageY.src.match("images/switchon")&& imageZ.src.match("images/switchoff"))
        {
            imageC.src = "images/ledon.jpg";
        }
        else
        {
            imageC.src = "images/ledoff.jpg";
        }
    }
    else //P is OFF
    {
        if(imageX.src.match("images/switchoff") && imageY.src.match("images/switchoff") && imageZ.src.match("images/switchoff"))
        {
            imageC.src = "images/ledoff.jpg";
        }
        else if(imageX.src.match("images/switchoff") && imageY.src.match("images/switchon")&& imageZ.src.match("images/switchon"))
        {
            imageC.src = "images/ledoff.jpg";
        }
        else if(imageX.src.match("images/switchon") && imageY.src.match("images/switchoff")&& imageZ.src.match("images/switchon"))
        {
            imageC.src = "images/ledoff.jpg";
        }
        else if(imageX.src.match("images/switchon") && imageY.src.match("images/switchon")&& imageZ.src.match("images/switchoff"))
        {
            imageC.src = "images/ledoff.jpg";
        }
        else
        {
            imageC.src = "images/ledon.jpg";
        }
    }
}

function resetTable()
{
    var bodyRef = document.getElementById('output').getElementsByTagName('tbody')[0];
    bodyRef.innerHTML = '';
}

function addToTable() 
{
    var table = document.getElementById("output").getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    var ix,iy,iz,ip,ic;
    ix = document.getElementById("inputx");
    iy = document.getElementById("inputy");
    iz = document.getElementById("inputz");
    ip = document.getElementById("inputp");
    ic = document.getElementById("outputC");
    
    var x,y,z,p,c, count;

    count = 0;
    if(ix.src.match("images/switchon.jpg")) 
    {   
        x = 1;
        count += 1;
    }
    else 
       x = 0;

    if(iy.src.match("images/switchon.jpg")) 
    {   
        y = 1;
        count += 1;
    }
    else 
       y = 0;

    if(iz.src.match("images/switchon.jpg")) 
    {   
        z = 1;
        count += 1;
    }
    else 
       z = 0;

    if(ip.src.match("images/switchon.jpg")) 
    {  
        p = 1;
        count += 1;
    }
    else 
       p = 0;

    if(ic.src.match("images/ledon.jpg")) 
       c = 1;
    else 
       c = 0;
    
    var expectedOutput = 0;
    if(count%2)
    {
        expectedOutput = 1;
    }

    var c0 = document.createElement('td');
    c0.style.width = '50px';
    c0.innerHTML = x;
    row.appendChild(c0);

    var c1 = document.createElement('td');
    c1.style.width = '50px';
    c1.innerHTML = y;
    row.appendChild(c1);

    var c2 = document.createElement('td');
    c2.style.width = '50px';
    c2.innerHTML = z;
    row.appendChild(c2);

    var c3 = document.createElement('td');
    c3.style.width = '50px';
    c3.innerHTML = p;
    row.appendChild(c3);

    var c4 = document.createElement('td');
    c4.style.width = '140px';
    c4.innerHTML = c;
    row.appendChild(c4);

    var c5 = document.createElement('td');
    c5.style.width = '140px';
    c5.innerHTML = expectedOutput;
    row.appendChild(c5);

    if(expectedOutput == c)
        row.style.backgroundColor = "#A6ECA8"
    else
        row.style.backgroundColor = "#FFCCCB"
}