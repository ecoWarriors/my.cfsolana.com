<template>
  <div class="frame">
    <div class="cards">
      <h2 class="uppercase">
        Projects
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>

.radio-toggle {
  @apply inline-block relative bg-slate-300 h-10 p-0.5 rounded-full 
}

.radio-toggle input[type=radio] {
  @apply absolute w-9 h-9 cursor-pointer opacity-0 z-20
}

.radio-toggle input[type=radio] + label {
  @apply relative inline-block w-9 h-9 text-center text-slate-500 text-xl pt-1 pr-0.5 mr-1 z-10
}
.radio-toggle input[type=radio]:checked + label {
  @apply text-white z-10
}

.radio-toggle span {
  transition:all 0.3s ease-in-out;
  @apply absolute block h-9 w-9 bg-lime-500 rounded-full left-[22px] top-[2px]
}

.radio-toggle input[value="system"]:checked ~ span {
  left: 2px;
}

.radio-toggle input[value="light"]:checked ~ span {
  left: 43px;
}
.radio-toggle input[value="dark"]:checked ~ span {
  left: 86px;
}




/* tete 

.radio-toggle {
  background: #95A5A6;
  display: inline-block;
  padding: 2px 3px;
  border-radius: 20px;
  position:relative;
  border: 2px solid #95A5A6;
}

.radio-toggle input {

  position: absolute;
  z-index: 3;
  opacity: 0;
  cursor: pointer;
}

.radio-toggle label {
  text-align: center;
  font-family: sans-serif;
  display: inline-block;
  color: #95A5A6;
  position:relative;
  z-index:2;
  margin: 0;
  text-align: center;
  padding: 2px 3px;
  font-size: 15px;

}

.radio-toggle input {

  position: absolute;
  z-index: 3;
  opacity: 0;
  cursor: pointer;
}

.radio-toggle span {
  height: 21px;
  width: 21px;
  line-height: 21px;
  border-radius: 50%;
  background:#fff;
  display:block;
  position:absolute;
  left: 22px;
  top: 2px;
  transition:all 0.3s ease-in-out;
}

.radio-toggle input[value="system"]:checked ~ span{
  background:#e74c3c;
  left:2px;
  color:#fff;
}

.radio-toggle input[value="sun"]:checked ~ span{
  background:#95A5A6;
  left: 23px;
}



.radio-toggle input[value="dark"]:checked ~ span{
  background:#27ae60;
  left: 46px;
}

.radio-toggle input[value="false"]:checked + label,.radio-toggle input[value="true"]:checked + label{
  color:#fff;
}
.radio-toggle input[value="-1"]:checked + label{
  color:#fff;
}




*/


</style>
