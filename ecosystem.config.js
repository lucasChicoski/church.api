module.exports = {
  apps : [{
    name   : "api-church",
    interpreter : "ts-node",
    script : "./src/app.ts",
    instances: "1",
    watch: true
  }]
}
