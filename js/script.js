// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const base = parseInt(document.getElementById("base-of-triangle").value)
  const height = parseInt(document.getElementById("height-of-triangle").value)

  // process
  const area = base * height / 2 

  // output
  document.getElementById("area").innerHTML = "The Area of Your Triangle is: " + area + ""
}
