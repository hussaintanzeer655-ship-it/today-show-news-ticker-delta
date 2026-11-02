const track = document.getElementById('ticker-track');
const headlines = [
  'Markets rally as tech gains offset energy slump',
  'Weather update: sunny week ahead',
  'Exclusive interview tease set for today',
  'Local charity drives record donations',
  'Morning commute improves with new lanes'
];
let index = 0;
function renderHeadline(text){
  const span = document.createElement('span');
  span.className = 'headline';
  span.textContent = text;
  return span;
}
function tick(){
  // remove old if too long
  if (track.children.length > 0){ track.removeChild(track.firstChild); }
  const head = renderHeadline(headlines[index % headlines.length]);
  track.appendChild(head);
  index++;
  // animate the scroll by translating
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = 'translateX(-'+ (index * 0.0001) +'px)';
}
setInterval(tick, 1800);
// initialize with first
tick();
