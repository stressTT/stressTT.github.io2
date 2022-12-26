<template>
  <div class="Header flex justify-between items-center">
    <div class="HeadLeft flex items-center">
      <i class="fa-solid fa-image text-7xl mr-5"></i>
      <div>
        <h2 class="text-4xl">SapaSendGroup</h2>
        <h5>Транспортно-логистическая компания</h5>
      </div>
    </div>
    <div class="HeadRight flex items-center">
      <h5 class="font-semibold text-2xl tracking-wider">+7 771 232 3307</h5>
      <button class="border">
        <i class="fa-solid fa-sort-down text-sm"></i>
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Header {
  position: relative;
  z-index: 5;
  background: #fff;
  padding: 25px 120px 25px 30px;
  button {
    padding: 13px 20.625px;
    margin-left: 20px;
  }
}
</style>
