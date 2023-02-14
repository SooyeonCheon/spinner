
const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   \n'];
let delayTime = 100;

for (const spin of spinner) {

  setTimeout(() => {
    process.stdout.write(spin);
  }, delayTime);

  delayTime += 200;

}
