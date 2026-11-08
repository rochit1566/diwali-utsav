const plans = {
  traditional: {
    small: ["Mini diya rangoli", "20–30 min", "Easy", ["3 colours of rangoli powder", "Chalk, a small bowl and 1 diya", "A few flower petals"], ["Wipe the floor clean and dry.", "Draw a small circle using a bowl as a guide.", "Add 6 simple petals around the circle.", "Fill with colour and place an LED diya beside it."]],
    medium: ["Classic diya circle", "30–45 min", "Easy–medium", ["4–5 colours of rangoli powder", "Chalk or pencil for the outline", "A small bowl or stencil for circles", "Optional flower petals and 2 diyas"], ["Clean and dry the floor; mark a light circle.", "Draw a small centre flower or diya shape.", "Add 8–12 petals around the circle and fill each section.", "Outline with white powder and add flowers or diyas safely."]],
    large: ["Festive lotus pathway", "60–90 min", "Medium", ["5–6 rangoli colours", "White powder for outlines", "Flower petals and 4 LED diyas", "Chalk, string and a bowl"], ["Mark a large circle and divide it into 8 equal sections.", "Draw a lotus with broad petals inside the circle.", "Fill alternating petals with bright colours.", "Add a dotted border and place LED diyas outside the design."]]
  },
  peacock: {
    small: ["Peacock-feather accent", "30–40 min", "Medium", ["Blue, teal, green and white powder", "A spoon or paper cone", "Chalk and a small diya"], ["Draw one long curved feather outline.", "Make a rounded eye shape at the top.", "Fill with teal and blue; add green strokes.", "Add white dots and a small diya beside the feather."]],
    medium: ["Peacock fan rangoli", "45–60 min", "Medium", ["Blue, teal, green, yellow and white powder", "Chalk and a paper cone", "Optional flower petals"], ["Draw a small central body and a fan outline.", "Divide the fan into 5–7 feather sections.", "Fill sections with alternating blue and teal.", "Add green feather eyes and white dotted borders."]],
    large: ["Grand peacock rangoli", "75–100 min", "Advanced", ["6–8 rangoli colours", "White outline powder", "Chalk, string and paper cones"], ["Sketch the peacock body lightly in the centre.", "Draw a wide fan of curved feathers behind it.", "Fill each feather with layered colours.", "Finish with fine white details and a border."]]
  },
  floral: {
    small: ["Four-petal flower", "20–30 min", "Easy", ["3 colours of powder", "Chalk and a small bowl", "A pinch of rice or flower petals"], ["Draw a small centre circle.", "Add four rounded petals around it.", "Fill the centre and petals in contrasting colours.", "Add tiny dots around the outside."]],
    medium: ["Layered flower mandala", "45–60 min", "Medium", ["4–6 colours of powder", "Chalk, bowl and paper cone", "Optional marigold petals"], ["Draw three circles, one inside another.", "Add 8 petals around the outer circle.", "Add smaller petals between the first layer.", "Fill alternating colours and outline with white dots."]],
    large: ["Grand lotus mandala", "75–100 min", "Advanced", ["6–8 colours of powder", "White outline powder", "String, chalk and flower petals"], ["Mark a large circle and its centre point.", "Draw two layers of lotus petals.", "Fill each layer with a different colour family.", "Add fine dots, a border and flower accents."]]
  },
  geometric: {
    small: ["Diamond star", "25–35 min", "Easy–medium", ["3–4 colours of powder", "Ruler and chalk", "A small stencil (optional)"], ["Draw a small square turned like a diamond.", "Add a second diamond around it.", "Repeat small lines to make a star pattern.", "Fill alternate sections and outline in white."]],
    medium: ["Symmetry wheel", "40–55 min", "Medium", ["4–5 colours of powder", "Chalk, ruler and string", "Paper cone for dots"], ["Draw a circle and divide it into 8 equal parts.", "Repeat one simple shape in each section.", "Fill matching sections with the same colours.", "Add a dotted border to make the pattern crisp."]],
    large: ["Geometric floor medallion", "70–90 min", "Advanced", ["6 colours of powder", "Chalk, ruler and string", "White powder for fine lines"], ["Mark a large square and circle inside it.", "Create repeating triangles and diamond shapes.", "Keep the pattern symmetrical on all sides.", "Fill alternating sections and finish with a clean border."]]
  }
};

const form = document.getElementById('rangoliForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const space = document.getElementById('space').value;
  const skill = document.getElementById('skill').value;
  const budget = document.getElementById('budgetChoice').value;
  let theme = document.getElementById('theme').value;
  if (theme === 'surprise') theme = ['traditional', 'peacock', 'floral', 'geometric'][Math.floor(Math.random() * 4)];
  const plan = plans[theme][space];
  const level = skill === 'beginner' ? 'Beginner-friendly adaptation' : skill === 'confident' ? 'Add extra detail if you have time' : 'Follow the design as written';
  const budgetTip = budget === 'low'
    ? 'Keep costs low: use 3 colours, homemade paper cones and flower petals you already have.'
    : budget === 'mid'
    ? 'Balanced budget: buy 4–5 colours and add one small flower accent.'
    : 'Extra-detail option: add more colours, a stencil and reusable LED diyas.';
  document.getElementById('rangoliResult').innerHTML = `
    <div class="result-top"><span class="result-tag">YOUR PERSONAL RANGOLI PLAN</span><span class="result-icon">✿</span></div>
    <h3>${plan[0]}</h3>
    <p class="muted">${level}. Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}.</p>
    <div class="plan-meta"><span>◷ ${plan[1]}</span><span>✦ ${plan[2]}</span></div>
    <h4>What you'll need</h4><ul>${plan[3].map(x => `<li>${x}</li>`).join('')}</ul>
    <h4>Make it in 4 steps</h4><ol>${plan[4].map(x => `<li>${x}</li>`).join('')}</ol>
    <p class="muted"><strong>Budget tip:</strong> ${budgetTip}</p>`;
});

const checklist = document.getElementById('checklist');
function updateProgress() {
  const boxes = [...checklist.querySelectorAll('input[type="checkbox"]')];
  const done = boxes.filter(box => box.checked).length;
  document.getElementById('progressText').textContent = `${done} of ${boxes.length} items ready`;
}
checklist.addEventListener('change', updateProgress);
document.getElementById('addItem').addEventListener('click', () => {
  const input = document.getElementById('newItem');
  const value = input.value.trim();
  if (!value) { input.focus(); return; }
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const span = document.createElement('span');
  span.textContent = value;
  label.append(checkbox, span);
  checklist.append(label);
  input.value = '';
  updateProgress();
});
document.getElementById('newItem').addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); document.getElementById('addItem').click(); }
});

const costInputs = ['rangoliCost', 'lightsCost', 'decorCost', 'foodCost'];
function updateBudget() {
  const total = costInputs.reduce((sum, id) => sum + Math.max(0, Number(document.getElementById(id).value) || 0), 0);
  document.getElementById('budgetTotal').textContent = '₹' + total.toLocaleString('en-IN');
}
costInputs.forEach(id => document.getElementById(id).addEventListener('input', updateBudget));
updateProgress();
updateBudget();
