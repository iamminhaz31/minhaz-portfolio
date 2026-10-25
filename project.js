const root = document.getElementById('projectDetail');
const id = new URLSearchParams(window.location.search).get('id');
const project = PROJECTS.find(p => p.id === id);

document.getElementById('year').textContent = new Date().getFullYear();

if (!project) {
  root.innerHTML = `
    <a href="index.html#projects" class="back-link">← Back to projects</a>
    <h1 class="detail-title">Project not found</h1>
    <p class="detail-lead">This project link is not valid. Go back and pick a project from the list.</p>
  `;
} else {
  document.title = `${project.name} | Minhajul Islam Tanjil`;
  root.innerHTML = `
    <a href="index.html#projects" class="back-link">← Back to projects</a>
    <h1 class="detail-title">${project.name}</h1>
    <p class="detail-lead">${project.description}</p>

    <div class="detail-shot">
      <img src="${project.image}" alt="${project.name} website preview">
    </div>

    <div class="detail-actions">
      <a href="${project.liveLink}" class="btn btn-primary" target="_blank" rel="noopener">Live project</a>
      <a href="${project.sourceLink}" class="btn btn-outline" target="_blank" rel="noopener">GitHub repository</a>
    </div>

    <section class="detail-block">
      <h2>Main technology stack</h2>
      <ul class="tag-row">${project.tags.map(t => `<li>${t}</li>`).join('')}</ul>
    </section>

    <section class="detail-block">
      <h2>Challenges I faced</h2>
      <ul class="detail-list">${project.challenges.map(c => `<li>${c}</li>`).join('')}</ul>
    </section>

    <section class="detail-block">
      <h2>Future plans and improvements</h2>
      <ul class="detail-list">${project.improvements.map(i => `<li>${i}</li>`).join('')}</ul>
    </section>
  `;
}