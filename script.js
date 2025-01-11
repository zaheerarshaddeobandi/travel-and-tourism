function goToLayer(layerId) {
  const allLayers = document.querySelectorAll('.layer');
  allLayers.forEach(layer => layer.classList.remove('active'));

  const nextLayer = document.getElementById(layerId);
  nextLayer.classList.add('active');
}

function goBack(previousLayerId) {
  goToLayer(previousLayerId);
}

// Initialize the first layer
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('layer1').classList.add('active');
});
