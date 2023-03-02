export default defineNuxtConfig({
  // server port number 
  devServer: {
    port: process.env.FRONDEND_EXPOSE_PORT || 8080
  }
})
