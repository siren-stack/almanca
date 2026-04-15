// extra-tabs.js - html/ klasöründeki dosyaları otomatik sidebar tab olarak yükler

function fileNameToTitle(f) {
  return f.replace('.html', '')
    .replace(/-[a-f0-9]{6,10}$/, '')
    .replace(/-/g, ' ')
    .replace(/w/g, function(c) { return c.toUpperCase(); });
}

function switchTabExtra(filename) {
  document.querySelectorAll('.lesson-panel').forEach(function(p) {
    p.style.display = 'none';
  });
  document.querySelectorAll('.iframe-panel').forEach(function(p) {
    p.style.display = 'none';
  });
  var iframe = document.getElementById('extra-' + filename);
  if (iframe) iframe.style.display = 'block';
  document.querySelectorAll('.tab-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  var btn = document.querySelector('[data-extra="' + filename + '"]');
  if (btn) btn.classList.add('active');
}

function loadExtraHtmlFiles(files) {
  var container = document.getElementById('extra-tabs-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'extra-tabs-container';
    var sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.appendChild(container);
  }
  var body = document.body;
  container.innerHTML = '';
  if (!files || !files.length) return;
  var sep = document.createElement('div');
  sep.className = 'sidebar-title';
  sep.style.marginTop = '12px';
  sep.textContent = 'Ek Dersler';
  container.appendChild(sep);
  files.forEach(function(filename) {
    var title = fileNameToTitle(filename);
    var btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.setAttribute('data-extra', filename);
    btn.textContent = title;
    btn.onclick = function() { switchTabExtra(filename); };
    container.appendChild(btn);
    if (!document.getElementById('extra-' + filename)) {
      var iframe = document.createElement('iframe');
      iframe.id = 'extra-' + filename;
      iframe.className = 'iframe-panel';
      iframe.src = 'html/' + filename;
      iframe.setAttribute('loading', 'lazy');
      iframe.style.display = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100vh';
      iframe.style.border = 'none';
      body.appendChild(iframe);
    }
  });
}

(function discoverFiles() {
  fetch('html/')
    .then(function(r) { return r.text(); })
    .then(function(text) {
      var matches = text.match(/href="[^"]*html\/([^"]+\.html)"/g) || [];
      var files = matches
        .map(function(m) {
          var x = m.match(/html\/([^"]+\.html)/);
          return x ? x[1] : null;
        })
        .filter(Boolean);
      var unique = files.filter(function(f, i) { return files.indexOf(f) === i; });
      loadExtraHtmlFiles(unique);
    })
    .catch(function() {
      console.log('html/ klasoru okunamadi');
    });
})();
