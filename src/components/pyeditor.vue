

<template>
    <body>
          <div v-bind:id="pad" 
      ></div>
    </body>  
    
      
    </template>
      <script setup>
        let app = document.getElementById('main');
        let child = app.firstChild;
        while (child) {
        app.removeChild(child);
        child = app.firstChild
        }
        // Create a Pythonpad instance in the element with an id "pad". 
        Pythonpad('main', {src: 'print("hello world")'})
      </script>
    
    