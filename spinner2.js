const animation = '|/-x|/-x|';
const x = '\\';
for (let i = 0; i < animation.length; i++) {
  setTimeout (() => {  
    if (animation[i] === 'x') {
      process.stdout.write('\r\\');
    } else {
      process.stdout.write('\r' + animation[i]);
    }
    if (i === animation.length - 1) {       
      process.stdout.write('\n');
    }
  }, i * 300);
};