import React from "react";
import "./css/filters.css";

export default class FilterBar extends React.Component{

    render() {
        return(
    <div class="filterRow">
        <div class="textbox">
            <strong>Filters:</strong>
        </div>
        <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">School</button>
            <div class="dropdown-content" id="myDropdown">
            <input type="checkbox" class="checkbox-control" value="on"></input>
                <a href="/">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
        <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Group Size</button>
            <div class="dropdown-content" id="myDropdown">
            <input type="checkbox" class="checkbox-control" value="on"></input>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
        <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Room Type</button>
            <div class="dropdown-content" id="myDropdown">
            <input type="checkbox" class="checkbox-control" value="on"></input>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
        <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">More</button>
            <div class="dropdown-content" id="myDropdown">
            <input type="checkbox" class="checkbox-control" value="on"></input>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
        
        
        
    </div>
        );
    }
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}