const bundledImages=JSON.parse(document.getElementById("bundled-images")?.textContent || "{}");
const skills = [
['ai-image-generation','AI Image Generation','From an imagined scene to a considered visual. I shape subjects, lighting, atmosphere, and composition through carefully directed AI image generation.',['Art direction','Concept imagery','Visual storytelling']],
['graphic-design','Graphic Design','Clear hierarchy, expressive typography, and intentional composition. I bring messages to life through posters, layouts, and digital graphics.',['Layout','Typography','Digital graphics']],
['logo-design','Logo Design','Distinctive marks built around a clear idea. I explore shape, balance, and simplicity to give a brand a recognizable visual starting point.',['Brand marks','Symbol design','Wordmarks']],
['social-media-design','Social Media Design','Visual content that feels connected across a feed. I create posts and campaign graphics with a clear message and a consistent brand presence.',['Social posts','Campaigns','Content systems']],
['product-image-editing','Product Image Editing','Thoughtful image refinement that keeps the product at the center. My focus includes clean backgrounds, considered lighting, color, and presentation.',['Background cleanup','Retouching','Product presentation']],
['branding','Branding','A visual identity is more than a logo. I connect color, typography, imagery, and layout into a coherent language for a brand.',['Visual identity','Color systems','Brand consistency']],
['prompt-engineering','Prompt Engineering','Creative direction begins with the right words. I structure prompts around subject, composition, style, and constraints, then refine them toward a clear visual goal.',['Prompt structure','Iteration','Style direction']],
['canva','Canva','Flexible, coordinated designs for everyday communication. I use Canva to create presentations, social assets, and reusable layouts.',['Editable layouts','Presentations','Templates']],
['adobe-photoshop','Adobe Photoshop','Detailed image work, from subtle corrections to expressive composites. I use Photoshop for retouching, selections, color treatment, and visual composition.',['Compositing','Color grading','Retouching']],
['thumbnail-design','Thumbnail Design','A strong focal point and a message understood at a glance. I combine image selection, contrast, and typography to create clear, compelling thumbnails.',['Focal hierarchy','Contrast','Video covers']],
['mascot-design','Mascot Design','Characters with a recognizable personality. I develop expressive mascot concepts through silhouette, color, gesture, and a consistent visual style.',['Character concepts','Expressions','Brand personality']]
];
const fileSlug=value=>value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const portfolioImagePath=(id,index)=>{
  const skill=skills.find(item=>item[0]===id);
  return `assets/portfolio/${id}/${String(index+1).padStart(2,'0')}-${fileSlug(skill[3][index])}.png`;
};
document.getElementById('skill-index').innerHTML=skills.map(([id,title])=>`<a href="#${id}">${title}</a>`).join('');
document.getElementById('work').innerHTML=skills.map(([id,title,description,tags],i)=>`<article class="work" id="${id}"><figure class="visual"><img src="${bundledImages[id] || portfolioImagePath(id,0)}" alt="Original ${title.toLowerCase()} portfolio concept" loading="lazy" width="1200" height="900"></figure><div><span class="number">${String(i+1).padStart(2,'0')} / SPECIALTY</span><h3>${title}</h3><p>${description}</p><div class="tags">${tags.map((t,j)=>`<button type="button" class="feature-button" data-skill="${id}" data-feature="${j}" aria-haspopup="dialog">${t} <span aria-hidden="true">↗</span></button>`).join('')}</div></div></article>`).join('');
document.getElementById('image-manager')?.remove();
const manager=document.createElement('details');manager.id='image-manager';manager.innerHTML='<summary>Manage portfolio images</summary><p>Choose a section to update. Images stay in this browser until you export.</p>'+skills.map(([id,title])=>`<div class="manager-row"><strong>${title}</strong><label class="upload-label">Choose image<input type="file" aria-label="Choose image for ${title}" accept="image/png,image/jpeg,image/webp" data-upload="${id}"></label><button type="button" data-reset="${id}">Restore original</button></div>`).join('');document.querySelector('.editor-bar').after(manager);
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton=document.getElementById('motion-toggle');
let paused=motionPreference.matches;
function updateMotion(){document.body.classList.toggle('motion-paused',paused);motionButton.textContent=paused?'Enable motion':'Pause motion';motionButton.setAttribute('aria-pressed',String(paused));}
updateMotion();
motionButton.addEventListener('click',()=>{paused=!paused;updateMotion();});
motionPreference.addEventListener('change',event=>{paused=event.matches;updateMotion();});
if(window.matchMedia('(hover: hover) and (pointer: fine)').matches){document.querySelectorAll('.visual').forEach(card=>{card.addEventListener('pointermove',event=>{if(paused)return;const box=card.getBoundingClientRect();const x=(event.clientX-box.left)/box.width-.5;const y=(event.clientY-box.top)/box.height-.5;card.style.transform=`rotateX(${-y*10}deg) rotateY(${x*12}deg) translateZ(12px)`;});card.addEventListener('pointerleave',()=>{card.style.transform='';});});}
