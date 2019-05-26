<template>
    <div class="header">
        <div class="header__my-picture header__my-picture--round"></div>
        <div class="header__identity">
        	{{ name }}
        </div>
    </div>
</template>


<script>
  export default {
  	props: {
  		name: String
  	}
  }
</script>
