
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log('Docker Username: ' + process.env.DOCKER_USERNAME);
    await sleep(5000);
  }
}

main();

