// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const age = parseInt(document.getElementById("user-age").value)
  // process
  if (age >= 17) {
    document.getElementById("answer").innerHTML = "You can see a R rated movie alone."
  } else if (age >= 13) {
    document.getElementById("answer").innerHTML = "You can see a PG-13 rated movie alone."
  } else if (age >= 5) {
    document.getElementById("answer").innerHTML = "You can see a G or PG rated movie alone."
  } else {
    document.getElementById("answer").innerHTML = "You are too young for most things."
  }
}