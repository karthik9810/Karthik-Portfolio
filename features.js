const featureDetails={
'ai-image-generation':[
['Set the visual direction','Define the subject, lighting, palette, and mood before generating. A focused direction helps every image belong to the same creative world.','Mood and palette · Lighting plan · Composition brief'],
['Explore the idea','Develop visual concepts for a product, campaign, or imagined scene. Refine the strongest direction through deliberate variations.','Concept exploration · Scene variations · Refined image'],
['Tell a story visually','Use setting, scale, and atmosphere to make an image communicate an idea beyond its subject.','Scene design · Narrative cues · Atmospheric treatment']],
'graphic-design':[
['Build a clear layout','Arrange headlines, images, and supporting information so the eye moves naturally from the main message to the details.','Composition · Spacing · Visual hierarchy'],
['Give words a visual voice','Choose type styles, sizes, and spacing that support the tone and keep the message readable.','Type pairing · Headline styling · Readability'],
['Design for the screen','Create digital graphics with purposeful color, balanced imagery, and clear messaging across screen sizes.','Digital posters · Web graphics · Campaign assets']],
'logo-design':[
['Create a recognizable mark','Explore simple forms that express a brand idea and remain recognizable at different sizes.','Mark exploration · Proportions · Small-size use'],
['Turn an idea into a symbol','Translate a brand concept into a distinctive silhouette with intentional negative space.','Symbol concepts · Shape refinement · Monochrome use'],
['Make the name distinctive','Shape a typographic identity through letterforms, spacing, and proportion.','Letterform direction · Kerning · Wordmark variations']],
'social-media-design':[
['Create a focused social post','Give each post one clear message, a strong focal point, and a layout suited to its format.','Post composition · Message hierarchy · Format adaptation'],
['Connect a campaign','Develop a consistent look across a sequence of posts while giving each message its own emphasis.','Campaign direction · Coordinated graphics · Visual sequencing'],
['Build a repeatable content system','Use reusable design rules to keep recurring content recognizable and easy to update.','Layout patterns · Type rules · Color consistency']],
'product-image-editing':[
['Keep the product in focus','Remove distracting backgrounds and refine edges to give the product a clean presentation.','Background isolation · Edge refinement · Clean backdrop'],
['Refine the product details','Correct distracting marks, balance exposure, and retain believable materials and texture.','Surface cleanup · Tonal correction · Texture preservation'],
['Create a considered product scene','Bring lighting, background, and composition together around the product.','Product framing · Shadow direction · Color harmony']],
'branding':[
['Define a visual identity','Connect typography, color, marks, and imagery into one recognizable visual language.','Identity direction · Type selection · Image style'],
['Build a purposeful palette','Choose primary and supporting colors that express the brand and work together consistently.','Core palette · Supporting colors · Contrast'],
['Keep the brand connected','Apply consistent spacing, typography, and image treatment across brand materials.','Usage rules · Coordinated layouts · Visual review']],
'prompt-engineering':[
['Write a clear visual brief','Organize prompts around subject, environment, composition, lighting, style, and constraints.','Subject and setting · Camera and lighting · Constraints'],
['Refine one decision at a time','Compare results against the brief and make targeted changes to improve control and consistency.','Result review · Targeted revisions · Version comparison'],
['Guide a consistent style','Describe material, color, medium, and atmosphere with specific language that supports the intended look.','Style vocabulary · Material cues · Palette direction']],
'canva':[
['Design layouts that are easy to update','Build coordinated layouts with clear text areas and image placement for recurring content.','Reusable structure · Text hierarchy · Image placement'],
['Make information easy to follow','Organize presentation content into clear slides with a consistent visual rhythm.','Slide layouts · Content structure · Visual consistency'],
['Create a reusable starting point','Develop repeatable designs for posts, announcements, and other recurring communication.','Template variations · Brand styling · Editing guidance']],
'adobe-photoshop':[
['Combine images convincingly','Bring visual elements together with consistent perspective, lighting, color, and edges.','Selections and masks · Light matching · Scene integration'],
['Shape the mood with color','Adjust color relationships, contrast, and tonal balance to create a coherent atmosphere.','White balance · Tonal shaping · Color treatment'],
['Refine without losing texture','Remove distractions and make selective corrections while retaining natural detail.','Spot cleanup · Local adjustments · Texture preservation']],
'thumbnail-design':[
['Make the focal point obvious','Choose one dominant subject, simplify the background, and arrange supporting elements around it.','Subject emphasis · Composition · Small-size readability'],
['Help the subject stand out','Use differences in light, color, and scale to separate the focal point from its surroundings.','Value contrast · Color separation · Clear silhouette'],
['Design a clear video cover','Compose a cover around the video’s central idea, with space for a short headline when needed.','Cover composition · Headline placement · Format framing']],
'mascot-design':[
['Create a memorable character','Develop a character around a clear personality, readable silhouette, and intentional proportions.','Character direction · Silhouette · Color palette'],
['Give the character expression','Use face, gesture, and pose to communicate emotion while preserving the character’s identity.','Facial expressions · Gesture · Pose exploration'],
['Express the brand through character','Connect the mascot’s attitude, shapes, and colors with the brand’s intended personality.','Personality traits · Visual cues · Consistent character styling']]
};
const bundledFeatures=JSON.parse(document.getElementById('bundled-features')?.textContent || '{}');
function featureImageSource(id,index){return bundledFeatures[`${id}-${index}`] || (index===0 ? (document.getElementById(id)?.querySelector('img')?.src || bundledImages[id] || portfolioImagePath(id,0)) : portfolioImagePath(id,index));}
document.getElementById('feature-dialog')?.remove();
const featureDialog=document.createElement('dialog');featureDialog.id='feature-dialog';featureDialog.setAttribute('aria-labelledby','feature-title');
featureDialog.innerHTML='<button type="button" class="dialog-close" aria-label="Close details">Close ×</button><div class="dialog-grid"><figure><img id="feature-image" alt=""></figure><div><p id="feature-category" class="number"></p><h2 id="feature-title"></h2><h3 id="feature-heading"></h3><p id="feature-copy"></p><ul id="feature-deliverables"></ul></div></div>';
document.body.append(featureDialog);
function showFeature(id,index){const skill=skills.find(item=>item[0]===id);const detail=featureDetails[id][index];const section=document.getElementById(id);document.getElementById('feature-category').textContent=skill[1];document.getElementById('feature-title').textContent=skill[3][index];document.getElementById('feature-heading').textContent=detail[0];document.getElementById('feature-copy').textContent=detail[1];document.getElementById('feature-deliverables').replaceChildren(...detail[2].split(' · ').map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));const img=document.getElementById('feature-image');img.src=featureImageSource(id,index);img.alt=skill[3][index]+' — '+skill[1]+' portfolio example';featureDialog.showModal();}
document.querySelectorAll('.feature-button').forEach(button=>button.addEventListener('click',()=>showFeature(button.dataset.skill,Number(button.dataset.feature))));
featureDialog.querySelector('.dialog-close').addEventListener('click',()=>featureDialog.close());
featureDialog.addEventListener('click',event=>{if(event.target===featureDialog){const r=featureDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)featureDialog.close();}});
