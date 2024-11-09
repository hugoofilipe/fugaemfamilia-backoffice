<template>
    <div id="print" ref="document">
      <div id="element-to-convert">
        <center>
          <!-- <img width="400" src="./path-or-url" /> -->
        </center>
        asdasdasd
      </div>
      <button @click="exportToPDF">Export to PDF</button>
    </div>
  </template>
  
  <script>
  import html2pdf from "html2pdf.js";
  
  export default {
    name: "App",
    methods: {
      exportToPDF() {
        html2pdf(document.getElementById("element-to-convert"), {
          margin: 1,
          filename: "generated-pdf.pdf",
        });
      },
    },
  };
  </script>
  
  <style>
    #print {
        background-color: #f5f5f5;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 20px;
        margin: 10px auto;
    }
  </style>
  