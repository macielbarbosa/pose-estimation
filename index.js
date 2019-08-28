const coisa = require('@tensorflow-models/posenet');

async function estimatePoseOnImage(imageElement) {
  // load the posenet model from a checkpoint
  const net = await posenet.load();

  const pose = await net.estimateSinglePose(imageElement, {
    flipHorizontal: false
  });
  return pose;
}

const image = new Image();
image.src = 'imagens/em-pe.jpg'
console.log(image)
const pose = estimatePoseOnImage(image);

console.log(pose);