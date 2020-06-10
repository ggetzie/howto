function maketoc() {
    allh3 = document.getElementsByTagName('h3');
    insBefore = document.getElementById("start");
    toc = document.createElement('ol');
    toc.setAttribute("class", "toc");
    for (var i = 0; i < allh3.length; i++) {
        sectionnumber = i + 1;
        // make a bookmark anchor at the h3 heading
        sectionlink = document.createElement('a');
        sectionlink.name = "section" + sectionnumber;
        allh3[i].parentNode.insertBefore(sectionlink, allh3[i]);			  
        
        // add a "Back to Top" link
        btt = document.createElement('a');
        btt.href = "#top";
        btt.innerHTML = "Back To Top";
        btt.setAttribute("class", "btt");
        allh3[i].parentNode.appendChild(btt);
        
        
        // add a link to the bookmark to the table of contents
        thisli = document.createElement('li')
        toclink = document.createElement('a');
        toclink.href = "#section" + sectionnumber;
        toclink.innerHTML = allh3[i].innerHTML;
        thisli.appendChild(toclink);
        toc.appendChild(thisli);
    }
    insBefore.parentNode.insertBefore(toc, insBefore);
}